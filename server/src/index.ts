import "reflect-metadata";
import {createConnection} from "typeorm";
import createError from 'http-errors';
import express, { NextFunction, Response, Request } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { Routes } from "./routes";
import {User} from './entity/User'
import { Note } from "./entity/Note";

createConnection().then(async connection => {

    require('dotenv').config()
    const apiKey = process.env.API_KEY

    const app = express();
    const port = 8080

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.set('view engine', 'html');

    Routes.forEach(r => {
      app[r.method](r.route, (req: Request, res: Response, next: NextFunction) => {
          const data = (new (r.controller as any))[r.action](req, res, next)
          if (data instanceof Promise){
              data.then((d) => res.send(d))
          } else if (data !== null && data !== undefined){
              data.json()
          }
      })
    })

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
      next(createError(404));
    });
  
    // error handler
    interface Error {
      status: number;
      message: string;
    }
  
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};
  
      res.status(err.status || 500);
      res.json({
        message: err.message,
        error: err,
      });
    });
  
    // User Seeds
    await connection.manager.save(connection.manager.create(User, {
      name:'Aang'
    }))
    await connection.manager.save(connection.manager.create(User, {
      name:'Katara'
    }))
    await connection.manager.save(connection.manager.create(User, {
      name:'Momo'
    }))
    await connection.manager.save(connection.manager.create(User, {
      name:'Sokka'
    }))
    await connection.manager.save(connection.manager.create(User, {
      name:'Appa'
    }))

    //Note Seeds
    await connection.manager.save(connection.manager.create(Note, {
      text: "Interesting read! Don't think I can part ways with my iPhone though!",
      articleTitle: "Notes from Steve Jobs",
      user: await User.findOne({id: 5})
    }))
    await connection.manager.save(connection.manager.create(Note, {
      text: "Amazing what science can do!",
      articleTitle: "Covid Testing",
      user: await User.findOne({id: 2})
    }))
    await connection.manager.save(connection.manager.create(Note, {
      text: "Are we supposed to find this funny?",
      articleTitle: "Forever and Never",
      user: await User.findOne({id: 1})
    }))
    await connection.manager.save(connection.manager.create(Note, {
      text: "Why would I read this?",
      articleTitle: "Are Horoscopes Real or Fake?",
      user: await User.findOne({id: 4})
    }))
    await connection.manager.save(connection.manager.create(Note, {
      text: "great read!",
      articleTitle: "A Lesson in Perseverance",
      user: await User.findOne({id: 3})
    }))


    
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
     });
  

}).catch(error => console.log(error));
