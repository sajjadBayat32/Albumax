import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PagePostComponent} from "./page-post/page-post.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'post/:post_id', component: PagePostComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
