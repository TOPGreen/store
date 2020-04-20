import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {BucketComponent} from './components/bucket/bucket.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'bucket', component: BucketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
