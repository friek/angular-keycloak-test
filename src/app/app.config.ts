import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AutoRefreshTokenService, provideKeycloak, UserActivityService, withAutoRefreshToken } from "keycloak-angular";

console.log(import.meta.env);

export const appConfig: ApplicationConfig = {
    providers: [
        provideKeycloak({
            config: {
                url: import.meta.env.NG_APP_KEYCLOAK_URL,
                realm: import.meta.env.NG_APP_KEYCLOAK_REALM,
                clientId: import.meta.env.NG_APP_KEYCLOAK_CLIENT_ID,
            },
            initOptions: {
                onLoad: 'login-required',
                redirectUri: window.location.origin + '/',
                enableLogging: true
            },
            features: [
                withAutoRefreshToken({
                    onInactivityTimeout: 'logout',
                    sessionTimeout: 60000
                })
            ],
            providers: [
                AutoRefreshTokenService,
                UserActivityService,
            ]
        }),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes)]
};
