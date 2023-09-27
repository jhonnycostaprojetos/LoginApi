exports = function (payload) {
  const query = payload.query;
  const projection = {
    "user": 1,
  }

  const mongodb = context.services.get("mongodb-atlas");
  const mycollection = mongodb.db("LoginDb").collection("Users");
  try {
    return mycollection.findOne(query.User, projection)
      .then(result => {
        if (result) {
          return {
            "status": true,
            result

          };

        } else {
          return {
            "status": false,
            "message": "User not found",
            result
          }
        }
      })

  } catch (error) {
    return { msg: "Erro: " + error.message };
  }
}