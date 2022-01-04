import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import {CachorroModel} from './../../model/CachorroModel';
@Component({
  selector: 'app-list-cachorro',
  templateUrl: './list-cachorro.component.html',
  styleUrls: ['./list-cachorro.component.css']
})
export class ListCachorroComponent implements OnInit {

public CachorroRegistros: any= [];

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.readCachorros();
  }
  readCachorros() {
    this.apiService.getCachorros().subscribe(
    data => {console.log(data);
      this.CachorroRegistros = data;
    },
    error => {
     console.log(error);
    }
    );
  }

  removeCachorro(Dog) {
    if (confirm('Você tem certeza disso?')) {

    this.apiService.deleteCachorro(Dog._id).subscribe((data) => {
    return this.CachorroRegistros.splice(this.CachorroRegistros.indexOf(Dog), 1);
         }, error => {
        console.log(error);
        }
      );
      }
    }
}
