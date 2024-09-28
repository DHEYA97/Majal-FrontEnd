import { Routes } from '@angular/router';
import { SystemDetailesComponent } from './Component/system-detailes/system-detailes.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { HomeComponent } from './Component/home/home.component';
import { BlogComponent } from './Component/blog/blog.component';
import { BlogDetailComponent } from './Component/blog-detail/blog-detail.component';

export const routes: Routes = [
    {
        path:"home",component:HomeComponent
    },
    {
        path :"system/:id" , component : SystemDetailesComponent
    },
    {
        path :"blog" , component : BlogComponent
    },
    { 
        path: 'blog/:id', component: BlogDetailComponent
    },
    { 
        path:"",redirectTo:'/home',pathMatch:'full'
    },
    { 
        path:"**",component:NotFoundComponent
    }
];
