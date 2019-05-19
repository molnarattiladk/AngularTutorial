import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailedComponent } from './detailed/detailed.component';
import { PersonDetailResolver } from './_resolver/persondetailedresolver.resolver';
import { EditComponent } from './edit/edit.component';
import { PersonEditResolver } from './_resolver/personeditresolver.resolver';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      {path: '', component: HomeComponent},
      {path: 'detailed/:id', component: DetailedComponent, resolve: { person: PersonDetailResolver}},
      {path: 'edit/:id', component: EditComponent, resolve: { person: PersonEditResolver}},
      {path: 'create', component: CreateComponent}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
