import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

export const router: Routes = [
    { path: '', redirectTo: 'footer', pathMatch: 'full' },
    { path: 'footer', component: FooterComponent },
    { path: 'header', component: HeaderComponent },
    { path: '**', redirectTo: 'footer' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);