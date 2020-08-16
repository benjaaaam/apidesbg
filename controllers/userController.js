const fs = require("fs");

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
