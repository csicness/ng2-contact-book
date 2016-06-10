/// src/app/index.ts
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import { ClientService } from './components/shared/index';

import '../style/app.scss';

import {Api} from './services/api';         // ./services/api/index.ts
import routes from './routes';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS, Api, ClientService],
    directives: [...ROUTER_DIRECTIVES],
    pipes: [],
    styles: [require('./style.scss')],
    template: require('./template.html')
})

@RouteConfig(routes)

export class App {
    url: string = 'https://github.com/ocombe/ng2-webpack';

    constructor(public api: Api, public _router: Router) {
    }

    isCurrentRoute(route) {
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }
}
