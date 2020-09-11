// ! NODE MODULES
const fs = require("fs"); /** module node pour les fichiers **/

// ! NODE PERSO
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../utils/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  console.log(req.body);

  res.status(200).json({
    status: "Success",
    message: "Voici les résultats",
    resultNumber: users.length,
    data: {
      users,
    },
  });
};

// trouve l'utilisateur avec cet ID ou alors dis qu'il n'y en a pas
exports.getUserById = (req, res) => {
  //Transform string to number
  const id = req.params.id * 1;

  //Find by id
  const user = users.find((el) => el.id === id);

  if (!user) {
    return res.status(404).json({
      status: "fail",
      data: {},
    });
  }

  return res.status(200).json({
    status: "succes",
    data: {
      user,
    },
  });
};

exports.getSortedUsersByAge = (req, res) => {
  const ageUsers = users.sort((a, b) => a.age - b.age);

  res.status(200).json({
    status: "success",
    data: {
      ageUsers,
    },
  });
};

exports.createUser = (req, res) => {
  // get highest id to add a new one
  const newId = users[users.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);

  users.push(newUser);

  fs.writeFile(
    `${__dirname}/../utils/data/users.json`,
    JSON.stringify(users),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          user: newUser,
        },
      });
    }
  );
};
