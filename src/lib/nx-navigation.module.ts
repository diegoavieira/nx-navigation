import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule } from '@angular/material';
import { NxSidenavNavigationComponent } from './components/nx-sidenav-navigation/nx-sidenav-navigation.component';
import { NxToolbarNavigationComponent } from './components/nx-toolbar-navigation/nx-toolbar-navigation.component';
import { NxNavigationComponent } from './container/nx-navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NxNavigationComponent,
    NxToolbarNavigationComponent,
    NxSidenavNavigationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    NxNavigationComponent,
    NxToolbarNavigationComponent,
    NxSidenavNavigationComponent
  ]
})
export class NxNavigationModule {}
