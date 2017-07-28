import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServiceService } from './service.service'
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  {
      path: 'about', component: AboutComponent
  },
  {
      path: 'help', component: HelpComponent
  },
  {
      path: 'search', component: SearchComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,

    AboutComponent,
    HelpComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,  RouterModule.forRoot(routes)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
