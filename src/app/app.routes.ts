import { Routes } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { canActivateAuthRole } from "../auth-guard";
import { ForbiddenComponent } from "./forbidden/forbidden.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./home/home.component";

const defaultRouteConfig = {
    canActivate: [canActivateAuthRole],
    data: {
        role: 'default-roles-localhost'
    }
};

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        ...defaultRouteConfig,
    },
    {
        path: 'test',
        component: TestComponent,
        ...defaultRouteConfig,
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
