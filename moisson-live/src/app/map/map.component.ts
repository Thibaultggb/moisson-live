
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { BarleyServiceService } from '../barley-service.service';
import { CornService} from '../corn.service';
import { RapeseedService } from '../rapeseed.service';
import { SunflowerService } from '../sunflower.service';
import { WheatService } from '../wheat.service';
 
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
 
// Implémenter OnInit
export class MapComponent implements OnInit {
  public data: any;
  constructor(private barley: BarleyServiceService, private corn: CornService, private rapeseed : RapeseedService, private sunflower : SunflowerService, private wheat : WheatService){}

// Fonction d'initialisation du composant.
ngOnInit() {
  // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
  const myfrugalmap = L.map('frugalmap').setView([48.852969, 2.349903], 8);

// barleyservices

  var blueIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
 
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Frugal Map'
  }).addTo(myfrugalmap);

  this.barley.getAll().subscribe(
    (barley:any) => {
      barley.forEach(podotactile => {
        L.marker([podotactile.coordinates.latitude, podotactile.coordinates.longitude], {icon: blueIcon}).addTo(myfrugalmap);
      });
    }
  )
 //cornservices

 var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: 'Frugal Map'
}).addTo(myfrugalmap);

this.corn.getAll().subscribe(
  (corn:any) => {
    corn.forEach(podotactile => {
      L.marker([podotactile.coordinates.longitude, podotactile.coordinates.latitude], {icon: greenIcon}).addTo(myfrugalmap);
    });
  }
)

//rapeseedservices

var redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: 'Frugal Map'
}).addTo(myfrugalmap);

this.rapeseed.getAll().subscribe(
  (rapeseed:any) => {
    rapeseed.forEach(podotactile => {
      L.marker([podotactile.coordinates.longitude, podotactile.coordinates.latitude], {icon: redIcon}).addTo(myfrugalmap);
    });
  }
)

//suflowerServices

var yellowIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: 'Frugal Map'
}).addTo(myfrugalmap);

this.sunflower.getAll().subscribe(
  (sunflower:any) => {
    sunflower.forEach(podotactile => {
      L.marker([podotactile.coordinates.longitude, podotactile.coordinates.latitude], {icon: yellowIcon}).addTo(myfrugalmap);
    });
  }
)

// wheatservices

var violetIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: 'Frugal Map'
}).addTo(myfrugalmap);

this.wheat.getAll().subscribe(
  (wheat:any) => {
    wheat.forEach(podotactile => {
      L.marker([podotactile.coordinates.longitude, podotactile.coordinates.latitude], {icon: violetIcon}).addTo(myfrugalmap);
    });
  }
)

}
}