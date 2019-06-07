import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BarleyServiceService {

  constructor(private client: HttpClient) { }

  public getAll(): Observable<any> {
    return this.client.get('https://api.capgrain.com/barley-observations').pipe(

      map(

        (data: any) => {
          return data["hydra:member"];

        }
      )
    )
  }
}
