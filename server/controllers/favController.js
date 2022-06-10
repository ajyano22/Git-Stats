const fetch = require('node-fetch');
const { DllPlugin } = require('webpack');
const db = require('../models/favoriteModel.js')

// CREATE TABLE favs (
//     _id     SERIAL PRIMARY KEY,
//     reponame     VARCHAR(50),
//     owner      VARCHAR(50),
//     datecreated     DATE
//      descrip        VARCHAR(50)
//   );

const favController ={};


favController.saveRepo = (req,res,next) => {
console.log(req.body,'req body from fav')

const {reponame, owner, datecreated, descrip} = req.body
const text = 'INSERT INTO favs(reponame, owner, datecreated, descrip) VALUES($1,$2,$3,$4) RETURNING *';
const values = [reponame,owner,datecreated, descrip];
console.log(values)

db.query(text,values, (err,data) => {
    if (err) {
        next({
          log: 'Express error handler caught error in starWarsController.addCharacter',
          message: { err: 'An error occurred' },
        });
      }
      //console.log(data,'from push');
      return next();
})
}

favController.getFav =  (req,res,next) => {
    //console.log('from get Fav')
    const text = 'SELECT * FROM public.favs ORDER BY datecreated DESC'
    db.query(text, (err,data) => {
        if (err) {
            next({
              log: 'Express error handler caught error in starWarsController.addCharacter',
              message: { err: 'An error occurred' },
            });
          }
          //console.log(data,'from push');
          //console.log(data.rows,"from get faves")
          res.locals.favRepos = data.rows;
          //console.log(data.rows[1].descrip)
          return next();

    })

}


favController.deleteFav =  (req,res,next) => {
    //console.log('from get Fav')
    const { favId } = req.body
    console.log(req.body.favId,"Delete this")
    const text = `DELETE FROM public.favs WHERE _id=${favId}`
    db.query(text, (err,data) => {
        if (err) {
            next({
              log: 'Express error handler caught error in starWarsController.addCharacter',
              message: { err: 'An error occurred' },
            });
          }
          //console.log(data,'from push');
          //console.log(data.rows,"from get faves")
          res.locals.favRepos = data;
          return next();

    })

    
}
//UPDATE favorites SET owner = 'test' WHERE _id=4
favController.updateFav =  (req,res,next) => {
    //console.log('from get Fav')
    const { favId, about } = req.body
    console.log(req.body)
    const text = `UPDATE favs SET descrip = '${about}' WHERE _id=${favId}`
    db.query(text, (err,data) => {
        if (err) {
            next({
              log: 'Express error handler caught error in starWarsController.addCharacter',
              message: { err: 'An error occurred' },
            });
          }
          //console.log(data,'from push');
          //console.log(data.rows,"from get faves")
          res.locals.favRepos = data;
          return next();

    })
}


module.exports = favController;