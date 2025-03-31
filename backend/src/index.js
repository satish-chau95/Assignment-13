import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { app } from "./app.js";
import connectToDB from "./db/index.js";
import { agenda } from "./utils/emailScheduler.js";


connectToDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error while talking with database: ", error);
    });
    app.listen(process.env.PORT, () => {
      console.log("Server is listening on port: ", process.env.PORT);
    });
  })
  .catch((error) => console.log("Connection to MongoDB failed: ", error));

agenda.on("ready", () => {
  agenda.start();
});
