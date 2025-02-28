import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'mfe1/order',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:4001/remoteEntry.js',
        type:'module',
        //remoteName: "mfe1-App",
        exposedModule: "./OrderModule"
      }).then(m => m.OrderModule).catch(err => console.log(err));
    }
  }
   
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
