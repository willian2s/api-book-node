import express from "express";
import bodyParser from "body-parser";
import acl from 'express-acl';
import routes from "./routes";
import database from "./database";

const app = express();

const configureExpress = () => {
  app.use(bodyParser.json());
  app.use(acl.authorize.unless({ path:['/users/authenticate']}));
  app.use("/", routes);
  app.database = database;

  return app;
};

export default async () => {
  const app = configureExpress();
  await app.database.connect();

  return app;
};
