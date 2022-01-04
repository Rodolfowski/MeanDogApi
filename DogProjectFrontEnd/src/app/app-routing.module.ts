import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCachorroComponent } from './components/create-cachorro/create-cachorro.component';
import { ListCachorroComponent } from './components/list-cachorro/list-cachorro.component';
import { EditCachorroComponent } from './components/edit-cachorro/edit-cachorro.component';

const routes: Routes = [
//redireciona a pagina padrão
  { path: '', pathMatch: 'full', redirectTo: 'Canil-list' },
  { path: 'Create-cachorro', component: CreateCachorroComponent },
  { path: 'edit-cachorro/:id', component: EditCachorroComponent  },
  { path: 'Canil-list', component: ListCachorroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
