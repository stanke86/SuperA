import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { JwtHelper } from 'angular2-jwt';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagService } from './api/tag.service';
import { TagsEditComponent } from './tags-edit/tags-edit.component';
import { TagCreateComponent } from './tag-create/tag-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    TagListComponent,
    TagsEditComponent,
    TagCreateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'tags', component: TagListComponent },
      { path: 'tags/create', component: TagCreateComponent },
      { path: 'tags/edit/:id', component: TagsEditComponent },
    ])
  ],
  providers: [AuthGuard, JwtHelper, TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
