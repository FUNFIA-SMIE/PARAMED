import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/services';

@Component({
  selector: 'app-patient-pec',
  templateUrl: './patient-pec.page.html',
  styleUrls: ['./patient-pec.page.scss'],
  standalone: false
})
export class PatientPecPage implements OnInit {
  patients: any;
  constantes_listes: any;
  constructor(private srvc: Services) { }

  async ngOnInit() {
    this.patients = await this.srvc.Consultation_jour_attente('En attente').toPromise();
    console.log("avant", this.patients);

    this.constantes_listes = await this.srvc.Liste_des_constant().toPromise();
    console.log("Constantes reçues :", this.constantes_listes);



    this.patients = this.patients.map((pa: any) => {
      const constante = this.constantes_listes.some((c: any) => c.consultation_id === pa.id_consultation);
      return {
        ...pa,
        constante: constante // 🔹 renvoie bien un boolean
      };
    })

    this.patients = this.patients.filter((pa: any) => pa.constante === true);
    console.log("après", this.patients);



  }
  searchText: any;

  filteredPatients() {
    if (!this.searchText) return this.patients;
    return this.patients.filter((p: { nom: string; statut: string; }) =>
      p.nom.toLowerCase().includes(this.searchText.toLowerCase()) ||
      p.statut.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
