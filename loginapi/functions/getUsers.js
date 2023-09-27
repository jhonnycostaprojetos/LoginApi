exports = function (payload) {
  const body = payload.query;

  //const query = { "user": "admin", "password": "123" };
  const projection = {
    "user": 1,
  }
  
  const mongodb = context.services.get("mongodb-atlas");
  const mycollection = mongodb.db("LoginDb").collection("Users");

 try {
  return
  mycollection.findOne(body, projection)
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
 return { msg: "Erro ao atualizar campo: " + error.message };
  }
};