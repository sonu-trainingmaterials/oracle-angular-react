import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmGuard } from './guards/confirm.guard';
import { ProfileResolver } from './resolvers/profile.resolver';


const routes:Routes =[
    { path:"", component:HomeComponent, pathMatch:'full'  },
    { path:"about", component:AboutComponent},
    { 
        path:"profiles/new", 
        component:AddProfileComponent,
        canActivate:[AuthGuard],
        canDeactivate:[ConfirmGuard]
    },
    { 
        path:"profiles/edit/:id", 
        component:EditProfileComponent,
        //canActivate:[AuthGuard],
        canDeactivate:[ConfirmGuard],
        resolve:{
            profile:ProfileResolver
        }
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}