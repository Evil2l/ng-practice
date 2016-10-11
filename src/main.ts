import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';



if(app.environment === 'production'){
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
