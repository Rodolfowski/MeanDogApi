import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServerService {
    constructor(private http: HttpClient) {}
    storeDogs(breeds: any[]) {
        this.http.get('https://dog.ceo/api/breeds/list');
    }
}
