import "dotenv/config";
import express from "express";

import bodyParser from "body-parser";
const app = express();

//import { connect } from "./db";
import { register } from "./register";
// import { Member } from "./models/member.ts";

 //connect().then(() => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/", (req: express.Request, res: express.Response) => {
    return res.send(`Loading v4 of ${Math.random()}`);
  });

  // app.get("/members", async (req: Request, res: Response) => {
  //   const members = { "pippo":"è tornato" }; //await Member.find().select("firstName lastName");
  //   return res.send(members);
  // });

  // app.post("/register", register);
  
  console.log("===APPLICATION RUNNING===")
  app.listen(80);
//});
