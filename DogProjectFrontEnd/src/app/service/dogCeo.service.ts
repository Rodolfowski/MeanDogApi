import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ARaca } from './../model/ARaca'; // string
import { Observable } from 'rxjs';
import { APhotoRaca} from './../model/APhotoRaca'; // string


@Injectable({
  providedIn: 'root'
})
export class DogCeoService {

  public urlRaca = 'https://dog.ceo/api/breeds/list';

  constructor(private http: HttpClient ) { }

  getRacas(): Observable<ARaca[]> {
    return this.http.get<ARaca[]>(this.urlRaca);
  }
  getRacaPhoto(breed): Observable<APhotoRaca[]> {
    return this.http.get<APhotoRaca[]>(`https://dog.ceo/api/breed/${breed}/images`);
  }

}
