import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';
import { DogCeoService } from './../../service/dogCeo.service';
@Component({
  selector: 'app-create-cachorro',
  templateUrl: './create-cachorro.component.html',
  styleUrls: ['./create-cachorro.component.css']
})

export class CreateCachorroComponent implements OnInit {
  submitted = false;
  cachorroForm: FormGroup;
  cachorroNgBinding = {nome:'',raca:'',cor:'',fonte:'',descricao:'',photo:''}

  CachorroCores: any = [{nome:'Azul',valor:'blue'},{nome:'Marrom',valor:'brown'},{nome:'Roxo',valor:'purple'},{nome:'Verde',valor:'green'},{nome:'Vermelho',valor:'red'}]

  CachorroFontes: any = ['Acme','Bellota','Raleway','Sen','Ubuntu','Arial','Verdana']

  cachorroRacas: any = {}

  CachorroPhotos: any = {}

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    private _dogCeoService: DogCeoService){
    this.mainForm();
    }

  ngOnInit(){
    this._dogCeoService.getRacas()
    .subscribe(data => {
      this.cachorroRacas = data
    });
  }

  mainForm(){
      this.cachorroForm = this.fb.group({
      nome: ['', [Validators.required]],
      raca: ['', [Validators.required]],
      cor: ['', [Validators.required]],
      fonte: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      photo:['', [Validators.required]],
      date:new Date()
    })
  }
  // Função para tratar do Select de raça,cor e fonte
  updatePerfilPhoto(e){
    this.cachorroForm.get('photo').setValue(e,{
      onlySelf:true
    })
  }
  updatePerfilRaca(e){
    this.cachorroForm.get('raca').setValue(e,{
      onlySelf:true
    })
    }
    updatePerfilCor(e){
    this.cachorroForm.get('cor').setValue(e,{
      onlySelf:true
    })
  }
    updatePerfilFonte(e){
    this.cachorroForm.get('fonte').setValue(e, {
      onlySelf: true
    })
  }
// Acessa o controle do formulário
    get myForm(){
    return this.cachorroForm.controls;
  }
    buscaPorPhoto(raca) {
    this._dogCeoService.getRacaPhoto(raca)
    .subscribe(data => {
    console.log(data);
    this.CachorroPhotos = data
   });
    }

onSubmit() {
    this.cachorroForm.get('date').setValue(Date.now,{
      onlySelf: true
      })
    this.submitted = true;
    if (!this.cachorroForm.valid) {
      return false;
    } else {
      this.apiService.createCachorro(this.cachorroForm.value).subscribe(
        (res) => {
          alert('Cachorro criado com sucesso!')
          console.log('Cachorro criado com sucesso!')
          this.ngZone.run(() => this.router.navigateByUrl('/Canil-list'))
        }, (error) => {
          alert('Houve um erro e o cachorro não foi criado')
          console.log(error);
        });
    }
  }
}
