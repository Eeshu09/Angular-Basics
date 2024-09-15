import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { authGuard } from './auth.guard';
import { FormvalComponent } from './component/formval/formval.component';
import { DirectiveComponent } from './directive/directive.component';
import { MergeComponent } from './component/merge/merge.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TaxiComponent } from './taxi/taxi.component';

export const routes: Routes = [
        {path:'',component:HomeComponent},
        {path:'user',component:UserComponent,title:"User",canActivate:[authGuard]},
        {path:'userlist',component:UserlistComponent,title:"Userlist",canActivate:[authGuard]},
        {path:'aboutUs',component:AboutComponent,title:"About"},
        {path:"contactUs",component:ContactComponent,title:"contactUs"},
        // {path:'updateuser/:id',component:UpdateUserComponent},
                 {path:'updateuser',component:UpdateUserComponent},

        {path:'validation',loadComponent:()=>import('../app/component/formval/formval.component').then((c)=>c.FormvalComponent) },
        // {path:'validation',component:FormvalComponent},
        {path:'directive',component:DirectiveComponent},
        {path:'merge',component:MergeComponent},
        {path:'pipes',component:PipesComponent},
        { path: 'product', component: ProductComponent, children: [
                { path: ':id', component: ProductDetailsComponent },
                { path: 'taxi', component: TaxiComponent }
              ]},

        {path:"**",component:PageNotFoundComponent,title:"PageNotFound"},

        

    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
