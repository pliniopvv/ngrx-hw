import { modalReducer } from './+state/modal.state';
import { appReducer } from './+state/app.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ContadorComponent } from './components/contador/contador.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './components/todo/todo.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BotaoEventsComponent } from './components/botao-events/botao-events.component';
import { BotaoNgrxComponent } from './components/botao-ngrx/botao-ngrx.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    TodoComponent,
    BotaoEventsComponent,
    BotaoNgrxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer, appM: modalReducer }),
    NgbModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
