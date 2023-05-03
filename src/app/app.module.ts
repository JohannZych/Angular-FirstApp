import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {MenuComponent} from './menu/menu.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {MyFormComponent} from './my-form/my-form.component';
import {FormsModule} from "@angular/forms";
import {DeveloperComponent} from './developer/developer.component';
import {SkillComponent} from './skill/skill.component';
import {CreateOnomatopiaComponent} from './create-onomatopia/create-onomatopia.component';
import {CreateKittenComponent} from './create-kitten/create-kitten.component';
import {ListKittenComponent} from './list-kitten/list-kitten.component';
import {UserKittenComponent} from './user-kitten/user-kitten.component';
import {CocktailListComponent} from './cocktail-list/cocktail-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LogInterceptor} from "./core/log.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    MenuComponent,
    SignUpComponent,
    MyFormComponent,
    DeveloperComponent,
    SkillComponent,
    CreateOnomatopiaComponent,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent,
    CocktailListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LogInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
