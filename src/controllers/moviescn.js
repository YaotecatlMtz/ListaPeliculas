const movieSquema = require('../models/movies');

class MoviesControllers{

  list(req, res){
    movieSquema.find().then(response => {
      res.send(response);
    }).catch(e => {
      res.sendStatus(500);
    });
  }
  create(req, res){
    // res.json({ mensaje: 'Datos recibidos correctamente.'});
    res.status(201).json({ message: 'Película creada correctamente' });
  }

  edit(req, res){}

  delete(req, res){}
  show(req, res){
    // const id = req.params.id;
    // const posicion = ids[id];
    // if(usuarios){
    //     // res.send("");
    //     res.send(posicion);
    // }else{
    //     res.sendStatus(404);
    // }
  }
}

module.exports = new MoviesControllers();
