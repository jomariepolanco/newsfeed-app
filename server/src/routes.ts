import { UserController } from "./controller/UserController";
import {NoteController} from './controller/NoteController'
import { NewsController } from "./controller/NewsController";


export const Routes = [
    // Users
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
    // Notes
    {
        method: 'get',
        route: '/api/notes',
        controller: NoteController, action: 'all' 
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
    },
    // News
    {
        method: 'get',
        route: '/api/news/business',
        controller: NewsController, action: 'business'
    },
    {
        method: 'get',
        route: '/api/news/entertainment',
        controller: NewsController, action: 'entertainment'
    },
    {
        method: 'get',
        route: '/api/news/general',
        controller: NewsController, action: 'general'
    },
    {
        method: 'get',
        route: '/api/news/health',
        controller: NewsController, action: 'health'
    },
    {
        method: 'get',
        route: '/api/news/science',
        controller: NewsController, action: 'science'
    },
    {
        method: 'get',
        route: '/api/news/sports',
        controller: NewsController, action: 'sports'
    },
    {
        method: 'get',
        route: '/api/news/technology',
        controller: NewsController, action: 'technology'
    }
]