import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModelComponent } from './test-model/test-model.component';
import { HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { TestingService } from './testing.service';

@NgModule({
  declarations: [
    AppComponent,
    TestModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
