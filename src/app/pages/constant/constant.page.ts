import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Services } from 'src/app/services/services';
export interface Constantes {
  temperature?: number;
  pouls?: number;
  tension?: string;
  frequenceResp?: number;
  saturation?: number;

  // nouvelles propriétés à ajouter
  poids?: number;
  taille?: number;
  imc?: number;
  sao2?: number;
  dextrose?: any;
}

@Component({
  selector: 'app-constant',
  templateUrl: './constant.page.html',
  styleUrls: ['./constant.page.scss'],
  standalone: false
})


export class ConstantPage implements OnInit {
  constantes_listes: any;

  goBack() {
    this.router.navigateByUrl('/patient-attente', { skipLocationChange: false }).then(() => {
      window.location.reload();
    });
  }

  constructor(private services: Services, private router: Router) { }
  constantes: Constantes = {
    temperature: 0,
    pouls: 0,
    tension: '',
    frequenceResp: 0,
    saturation: 0,
    poids: 0,
    taille: 0,
    imc: 0,
    sao2: 0,
    dextrose: 0
  };

  data: any;
  async ngOnInit() {
    console.log("Patient reçu :", history.state.data);
    this.data = history.state.data;




  }

  onSubmit() {
    console.log("Constantes enregistrées :", this.constantes);
    alert("Constantes enregistrées !");

    const constantes = {
      consultation_id: history.state.data.id_consultation ?? null,
      temperature: this.constantes.temperature ?? null,
      pouls: this.constantes.pouls ?? null,
      poids: this.constantes.poids ?? null,
      tension: this.constantes.tension ?? null,
      sao2: this.constantes.saturation ?? null,
      taille: this.constantes.taille ?? null,
      imc: this.constantes.imc ?? null,
      dextrose: this.constantes.dextrose ?? 0
    };



    this.services.Save_constante(constantes).subscribe((response: any) => {
      console.log("Constantes sauvegardées avec succès :", response);
      alert("Constantes sauvegardées avec succès !");
      this.router.navigateByUrl('/patient-attente', { skipLocationChange: false }).then(() => {
        window.location.reload();
      });

    }, error => {
      console.error("Erreur lors de la sauvegarde des constantes :", error);
      alert("Erreur lors de la sauvegarde des constantes.");
    });
    // Ici tu peux envoyer les données vers ton service / backend
  }
}
