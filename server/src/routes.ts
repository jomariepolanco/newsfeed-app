import { UserController } from "./controller/UserController";
import {NoteController} from './controller/NoteController'


export const Routes = [
    {
        method: 'get',
        route: '/api/users',
        controller: UserController, action: 'all'
    },
    {
        method: 'get',
        route: '/api/users/:id',
        controller: UserController, action: 'one'
    },
    {
        method: 'post',
        route: '/api/users/',
        controller: UserController, action: 'save'
    },
    {
        method: 'get',
        route: '/api/notes',
        controller: NoteController, action: 'all' 
    }, 
    {
        method: 'get',
        route: '/api/notes/:id',
        controller: NoteController, action: 'one'
    },
    {
        method: 'post',
        route: '/api/notes',
        controller: NoteController, action: 'save'
    },
    {
        method: 'delete',
        route: '/api/notes/:id',
        controller: NoteController, action: 'remove'
    }
]