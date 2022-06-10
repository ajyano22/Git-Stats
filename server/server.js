const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//declare routers
const apiRouter = require('./routes/api.js')//server/routes/api.js
const favRouter = require('./routes/favorites.js')//server/routes/api.js


//static send build file to server
app.use(express.static(path.join(__dirname, '../build')));
 //app.use(express.static(path.resolve(__dirname, '../client')));
//call routers for urls

app.use('/api', apiRouter);
app.use('/favorites', favRouter);

//mount html on server
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));//'./index.html'
  });
  
  
  app.use((req, res) => {
    console.log('Page not found error caught in server');
    return res.status(404).send('Page not found.')
  });

  app.use(defaultErrorHandler);
  function defaultErrorHandler(err, req, res, next){
    const defaultErr = 
    {
      log : 'Express error handler caught unknown middleware error',
      status : 400,
      message : { err: 'An error occured'}
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
  };


  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });