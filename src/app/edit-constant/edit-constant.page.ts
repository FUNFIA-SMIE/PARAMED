import { Component, OnInit } from '@angular/core';
import { Services } from '../services/services';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
  selector: 'app-edit-constant',
  templateUrl: './edit-constant.page.html',
  styleUrls: ['./edit-constant.page.scss'],
  standalone: false
})


export class EditConstantPage implements OnInit {
  constantes_listes: any;
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

  constructor(
    private srvc: Services,
    private router: Router,
    private services: Services,
      private alertCtrl: AlertController
  ) { }

  async ngOnInit() {
    console.log(history.state.data)
        this.data = history.state.data;

    this.constantes_listes = await this.srvc.Liste_des_constant().toPromise();
    this.constantes_listes = this.constantes_listes.filter((pa: any) => pa.consultation_id === history.state.data?.id_consultation)
    console.log("constante", this.constantes_listes);


    if (this.constantes_listes.length > 0) {
      const existant = this.constantes_listes[0]; // prend la première par ex.
      this.constantes = {
        temperature: existant.temperature ?? 0,
        pouls: existant.pouls ?? 0,
        tension: existant.tension ?? '',
        frequenceResp: existant.frequenceResp ?? 0,
        saturation: existant.saturation ?? 0,
        poids: existant.poids ?? 0,
        taille: existant.taille ?? 0,
        imc: existant.imc ?? 0,
        sao2: existant.sao2 ?? 0,
        dextrose: existant.dextrose ?? ''
      };
    }


  }

async update_constant() {
  const constantes = {
    consultation_id: this.constantes_listes[0].consultation_id,
    temperature: this.constantes.temperature ?? null,
    pouls: this.constantes.pouls ?? null,
    poids: this.constantes.poids ?? null,
    tension: this.constantes.tension ?? null,
    sao2: this.constantes.saturation ?? null,
    taille: this.constantes.taille ?? null,
    imc: this.constantes.imc ?? null,
    dextrose: this.constantes.dextrose ?? 0
  };

  this.services.Modifier_constant(this.constantes_listes[0].id, constantes)
    .subscribe({
      next: async () => {
        const alert = await this.alertCtrl.create({
          header: 'Succès',
          message: 'Constantes mises à jour avec succès ✅',
          buttons: ['OK']
        });
        await alert.present();
      },
      error: async () => {
        const alert = await this.alertCtrl.create({
          header: 'Erreur',
          message: 'Échec de la mise à jour ❌',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
}

async delete_constant() {

  let id = this.constantes_listes[0].id;
  const confirm = await this.alertCtrl.create({
    header: 'Confirmation',
    message: 'Voulez-vous vraiment supprimer cette constante ?',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel'
      },
      {
        text: 'Supprimer',
        handler: () => {
          this.services.Supprimer_constant(id).subscribe({
            next: async () => {
              const alert = await this.alertCtrl.create({
                header: 'Succès',
                message: 'Constante supprimée avec succès ✅',
                buttons: ['OK']
              });
              await alert.present();
            },
            error: async () => {
              const alert = await this.alertCtrl.create({
                header: 'Erreur',
                message: 'Échec de la suppression ❌',
                buttons: ['OK']
              });
              await alert.present();
            }
          });
        }
      }
    ]
  });

  await confirm.present();
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

  goBack() {
    this.router.navigateByUrl('/patient-pec', { skipLocationChange: false }).then(() => {
      window.location.reload();
    });
  }


}
