import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
public Humidite:string;
public Culture:string;
public Variété:string;
public Rendement:string;
public Résultat:string;
public Irrigation:string;
public Azote:string;

  constructor() { }

  ngOnInit() {
  }
partageResults(){
  console.log("Résultat");
}
}
