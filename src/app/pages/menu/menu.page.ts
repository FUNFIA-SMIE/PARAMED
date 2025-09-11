import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false
})
export class MenuPage implements OnInit {
  patients: any;
  constantes_listes: any;
  patients_attente: any;
  patients_traite: any;

  constructor(private srvc: Services) { }

  async ngOnInit() {
    this.constantes_listes = await this.srvc.Liste_des_constant().toPromise();
    console.log("Constantes reçues :", this.constantes_listes);

    this.patients = this.patients.map((pa: any) => {
      const constante = this.constantes_listes.some((c: any) => c.consultation_id === pa.id_consultation);
      return {
        ...pa,
        constante: constante // 🔹 renvoie bien un boolean
      };
    })

    this.patients_attente = this.patients.filter((pa: any) => pa.constante === true);
    this.patients_traite = this.patients.filter((pa: any) => pa.constante === false);
 
    console.log("après", this.patients);



  }

}
