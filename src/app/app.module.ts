import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api'; //api

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { PasswordModule } from 'primeng/password';
import {SidebarModule} from 'primeng/sidebar';

import { ToastModule } from 'primeng/toast';
import {TableModule} from 'primeng/table';

import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { LayOutComponent } from './shared/lay-out/lay-out.component';
import {ContextMenuModule} from 'primeng/contextmenu';
import {TreeModule} from 'primeng/tree';

@NgModule({
  declarations: [AppComponent, HomeComponent, LayOutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CheckboxModule,
    TabViewModule,
    RippleModule,
    RadioButtonModule,
    InputTextModule,
    AccordionModule,
    FormsModule,
    PasswordModule,
    ToastModule,
    TableModule,
    ProgressSpinnerModule,
    SidebarModule,
    ContextMenuModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
