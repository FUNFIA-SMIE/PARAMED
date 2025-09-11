import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-attente',
  templateUrl: './patient-attente.page.html',
  styleUrls: ['./patient-attente.page.scss'],
  standalone: false
})
export class PatientAttentePage implements OnInit {
  constantes_listes: any;

  constructor(private srvc: Services) { }
  patients: any;
  searchText: any;
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

    this.patients = this.patients.filter((pa: any) => pa.constante === false);
    console.log("constante", this.patients);



  }

  filteredPatients() {
    if (!this.searchText) return this.patients;
    return this.patients.filter((p: { nom: string; statut: string; }) =>
      p.nom.toLowerCase().includes(this.searchText.toLowerCase()) ||
      p.statut.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
