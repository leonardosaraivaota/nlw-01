import express from "express";
//import knex from "./database/connection";
import { celebrate, Joi } from "celebrate";
import multer from "multer";
import multerConfig from "./config/multer";

import PoinstController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

//index(vários), show(único), create(ou store), update, delete
const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PoinstController();
const itemsController = new ItemsController();

/*
routes.get("/items", async (request, response) => {
  const items = await knex("items").select("*");

  const serializedItems = items.map((item) => {
    //return 1;
    return {
      id: item.id,
      title: item.name,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });

  return response.json(serializedItems);
});

routes.post("/points", async (request, response) => {
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,
  } = request.body;

  const trx = await knex.transaction();

  const insertedIds = await trx("points").insert({
    image: "image-fake",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  });

  const point_id = insertedIds[0];

  const pointItems = items.map((item_id: number) => {
    return {
      item_id,
      point_id,
    };
  });

  await trx("point_items").insert(pointItems);

  return response.json({ success: true });
});
*/

routes.get("/items", itemsController.index);

//routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

//routes.post("/points", upload.array('fotos'), pointsController.create);
routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  pointsController.create
);

export default routes;
