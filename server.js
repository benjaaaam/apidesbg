const dotenv = require("dotenv"); /** module node pour la configuration des identifiants et des ports **/
const app = require("./app"); /** module node perso "app" **/

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App running // PORT: ${port}`);
});
