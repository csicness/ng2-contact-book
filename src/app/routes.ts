// src/app/routes.ts
import {Home} from './components/home';     // ./components/home/index.ts
import { AddClientComponent } from './components/clients/add-client.component';
import { EditClientComponent } from './components/clients/edit-client.component';

export default [
    {path: '/', component: Home, name: 'Home'},
    {path: '/add-contact', component: AddClientComponent, name: 'AddClient'},
    {path: '/edit-contact', component: EditClientComponent, name: 'EditClient'},
    // Async load a component using Webpack's require with es6-promise-loader
    {path: '/about', loader: () => require('./components/about')('About'), name: 'About'}
];
