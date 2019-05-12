import express from 'express';
import propertyController from '../controllers/propertyController';

const router = express.Router();

// GET property home page.
router.get('/', propertyController.index);

// GET request for one property.
router.get('/property/:id', propertyController.property_detail);

// GET request for all propertys.
router.get('/propertys', propertyController.property_list);

// POST request create property
router.post('/property/create', propertyController.property_create_post); //controlller.method

// POST request to delete property.
router.post('/property/:id/delete', propertyController.property_delete_post);

// POST request to update property.
router.get('/property/:id/update', propertyController.property_delete_post);


module.exports = router;