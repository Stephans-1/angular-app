import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Todos } from './todos/todos';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        title: "Home Page",
        component: Home
        },
    {
        path:'./todos',
        component: Todos
    }
];
