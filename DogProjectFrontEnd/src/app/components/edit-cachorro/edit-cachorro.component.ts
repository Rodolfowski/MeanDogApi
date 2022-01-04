import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from './../../service/api.service';
import {ActivatedRoute , Router } from '@angular/router';
import { CachorroModel } from './../../model/CachorroModel';
import { DogCeoService } from './../../service/dogCeo.service';
@Component({
  selector: 'app-edit-cachorro',
  templateUrl: './edit-cachorro.component.html',
  styleUrls: ['./edit-cachorro.component.css']
})
export class EditCachorroComponent implements OnInit {
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
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private _dogCeoService: DogCeoService
  ) { }

  ngOnInit(): void {
    this._dogCeoService.getRacas()
    .subscribe(data => {
      this.cachorroRacas = data
    });
    this.updateCachorro();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getCachorro(id);
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
  get myForm() {
    return this.cachorroForm.controls;
  }
  getCachorro(id) {
    this.apiService.getCachorro(id).subscribe(data => {
      this.cachorroForm.setValue({
        nome:data['nome'],
        raca:data['raca'],
        cor:data['cor'],
        fonte:data['fonte'],
        descricao:data['descricao'],
        photo:data['photo'],
        date:data['date']
      });
    });
  }
updateCachorro() {
    this.cachorroForm = this.fb.group({
    nome: ['', [Validators.required]],
    raca: ['', [Validators.required]],
    cor: ['', [Validators.required]],
    fonte: ['', [Validators.required]],
    descricao: ['', [Validators.required]],
    photo:['', [Validators.required]],
    date:[Date.now()]
    })
  }
  buscaPorPhoto(raca) {
    this._dogCeoService.getRacaPhoto(raca)
    .subscribe(data => {
    console.log(data);
    this.CachorroPhotos = data
   });
    }
  onSubmit() {

    this.submitted = true;
    if (!this.cachorroForm.valid) {
      return false;
    } else {
      if (window.confirm('Deseja mesmo atualizar?')) {
          this.cachorroForm.value.date=Date.now()
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateCachorro(id, this.cachorroForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/Canil-list');
            console.log('Conteúdo atualizado com sucesso!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }
}
