import app from "./app";
import { sequelize } from "./database";
import "./models/User";

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync()
    console.log("Connection has been established successfully.");
    app.listen(process.env.PORT || 3000, () => console.log("Server running!"));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
