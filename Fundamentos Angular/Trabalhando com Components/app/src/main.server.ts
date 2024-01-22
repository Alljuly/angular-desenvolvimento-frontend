import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MenuComponent } from './app/components/menu.component';
import { config } from './app/app.config.server';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//const bootstrap = () => bootstrapApplication(AppComponent, config);

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
