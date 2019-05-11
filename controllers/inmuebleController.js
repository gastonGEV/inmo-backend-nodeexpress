import inmuebleModel from './models/Inmueble';

//info de todos los inmuebles
exports.inmueble_list = function (req, res) {
  try {
    //recupero el id pasado por param
    const idUser = req.params.id;

    inmuebleModel.find({}).then(eachOne => {
      res.json(eachOne);
    })

  } catch (error) {
    console.log(error);
  }
}

//info de un inmueble especifico
exports.inmueble_list = function (req, res) {
  try {
    //recupero el id pasado por param
    const idUser = req.params.id;

    inmuebleModel.findById(idUser, function (err, item) {
      res.status(200).send({ data: item })
      res.status(400).send({ message: 'error' });
    });

  } catch (error) {
    console.log(error);
  }
}

//crear un inmueble
exports.inmueble_create_post = function (req, res) { 
  try {
    const Inmueble = new inmuebleModel({
      antiguedad: '1',
      descripcion: 'nuevomodel',
      disposicion: 'test',
      estado: 'test',
      garage: 'test',
      localidad: 'test',
      direccion: 'test',
      patio: false,
      precio: 123,
      supCubierta: 'test',
      barrio: 'test',
      cantBanos: 1,
      cantHab: 1,
    })

    Inmueble.save()
      .then((inmueble) => console.log(inmueble))
      .catch(error => console.log(error))

    res.json(Inmueble);

  } catch (error) {
    console.log(error);
  }
}

//borrar un inmueble
exports.inmueble_delete_post = function (req, res) { 
  try {
    //recupero el id pasado por param
    const idInmueble = req.params.id;

    inmuebleModel.findOneAndRemove({ _id: idInmueble }, function (err) {
      res.json('ok');
    });

  } catch (error) {
    console.log(error);
  }
}

//actualizar un inmueble
exports.inmueble_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: inmueble update POST');
}