const express = require('express');
const app = express();
const cachorroRoute = express.Router();

// DogSchema Model
let Cachorro = require('../models/CachorroSchema');

// Addiciona um novo cachorro
cachorroRoute.route('/create').post((req, res, next) => {
  Cachorro.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Resgata todos os cachorros
cachorroRoute.route('/').get((req, res) => {
  Cachorro.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Resgata um cachorro específico
cachorroRoute.route('/read/:id').get((req, res) => {
  Cachorro.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Atualiza dados de um cachorro
cachorroRoute.route('/update/:id').put((req, res, next) => {
  Cachorro.findByIdAndUpdate({_id:req.params.id}, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Datos atualizados')
    }
  })
})

// Deleta um cachorro
cachorroRoute.route('/delete/:id').delete((req, res, next) => {
  Cachorro.findOneAndDelete({_id:req.params.id}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = cachorroRoute;
