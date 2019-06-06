import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CornService {

  constructor(private client: HttpClient) { }

  public getAll(): Observable<any> {
    return this.client.get('https://api.capgrain.com/corn-observations').pipe(

      map(

        (data: any) => {
          return data["hydra:member"];

        }
      )
    )
  }
}
