import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './Core/interceptor/loading.interceptor';
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: 
  [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes,inMemoryScrollingFeature),
      { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
};
