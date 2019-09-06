import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleService } from './article.service';
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
	ReactiveFormsModule,
 
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
