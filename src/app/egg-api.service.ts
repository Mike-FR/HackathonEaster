import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


class ResultAPI {
  id: string;
  name: string;
  color: string;
  caliber: string;
  farming: number;
  country: string;
  validity: string;
  rarity: string;
  image: string;
  power: string;
}

@Injectable({
  providedIn: 'root'
})
export class EggApiService {

  urlAPI = "http://easteregg.wildcodeschool.fr/api/eggs/random"

  constructor(private http: HttpClient) { }

  getEggs(): Observable<ResultAPI> {
    return this.http.get<ResultAPI>(this.urlAPI);
  }

}
