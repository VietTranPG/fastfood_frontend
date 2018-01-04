import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ProductComponent } from './product/product.component';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent,data:{title:'dashboard'} },
    { path: 'user-profile',   component: UserProfileComponent,data:{title:'profile'} },
    { path: 'table-list',     component: TableListComponent,data:{title:'table'} },
    { path: 'typography',     component: TypographyComponent,data:{title:'typography'} },
    { path: 'icons',          component: IconsComponent,data:{title:'icons'} },
    { path: 'maps',           component: MapsComponent,data:{title:'maps'} },
    { path: 'notifications',  component: NotificationsComponent,data:{title:'notifications'} },
    { path: 'upgrade',        component: UpgradeComponent,data:{title:'upgrade'} },
    { path: 'product',        component: ProductComponent,data:{title:'product'} },
    { path: '',               redirectTo: 'product', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
