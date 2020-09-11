// ! NODE MODULES
const express = require("express"); /** module node utile  pour les routes **/

// ! MODULES PERSO
const {
  getAllUsers,
  getUserById,
  getSortedUsersByAge,
  createUser,
  deleteUser,
} = require("./../controllers/userController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/sort").get(getSortedUsersByAge);
router.route("/:id").get(getUserById);
// route qui prend id en params

// ! suppr user en fct de l'id / .delete(deleteUser);
// ! + réindexé l'objet

module.exports = router;
