import createError from 'http-errors';
import express, { NextFunction, Response, Request } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import * as bodyParser from 'body-parser'


const app = express();
const port = 8080
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'html');

app.get('/api', (req, res) => {
  res.send(`${new Date()}`);
});

app.get('/api/users', (req, res) => {
  res.send(['Aang', 'Katara', 'Momo', 'Sokka', 'Appa']);
});


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
  
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });