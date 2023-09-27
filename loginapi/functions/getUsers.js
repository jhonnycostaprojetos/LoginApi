// // This function is the endpoint's request handler.
// exports = function({ query, headers, body}, response) {
//     // Data can be extracted from the request as follows:

//     // Query params, e.g. '?arg1=hello&arg2=world' => {arg1: "hello", arg2: "world"}
//     const {arg1, arg2} = query;

//     // Headers, e.g. {"Content-Type": ["application/json"]}
//     const contentTypes = headers["Content-Type"];

//     // Raw request body (if the client sent one).
//     // This is a binary object that can be accessed as a string using .text()
//     const reqBody = body;

//     console.log("arg1, arg2: ", arg1, arg2);
//     console.log("Content-Type:", JSON.stringify(contentTypes));
//     console.log("Request body:", reqBody);

//     // You can use 'context' to interact with other application features.
//     // Accessing a value:
//     // var x = context.values.get("value_name");

//     // Querying a mongodb service:
//     // const doc = context.services.get("mongodb-atlas").db("dbname").collection("coll_name").findOne();

//     // Calling a function:
//     // const result = context.functions.execute("function_name", arg1, arg2);

//     // The return value of the function is sent as the response back to the client
//     // when the "Respond with Result" setting is set.
//     return  "Hello World!";
// };

// exports = function() {
//     // Criando um objeto JavaScript
  
//     const valorDecimal = 1.55621;
  
//     const data = {
//       message: valorDecimal
//     };
  
  
  
//     // Convertendo o objeto em formato JSON
//     const jsonString = JSON.stringify(data);
//     return jsonString;
//   };


// exports = function (payload) {
//     const body = payload.query;
//     const mongodb = context.services.get("mongodb-atlas");
//     const mycollection = mongodb.db("LoginDb").collection("Users");
//     return mycollection.find().toArray();
//   };

// const query = { "reviews.0": { "$exists": true } };
// const projection = { "_id": 0 };

// return itemsCollection.find(query, projection)
//   .sort({ name: 1 })
//   .toArray()
//   .then(items => {
//     console.log(`Successfully found ${items.length} documents.`)
//     items.forEach(console.log)
//     return items
//   })
//   .catch(err => console.error(`Failed to find documents: ${err}`))


exports = function (payload) {
  const body = payload.query;
    
  const query = { "user": "admin", "password":"123" };
  
const projection = {
 "user": 1,
}
  const mongodb = context.services.get("mongodb-atlas");
  const mycollection = mongodb.db("LoginDb").collection("Users");
  
  return mycollection.findOne(body,projection)
  
  .then(result => {
    console.log(result)
    if(result) {
      return {
        "status": true,
        result
        
      };
    
    } else {
      console.log("No document matches the provided query.");
      return {
        "status": false,
        "msg": "nao encontrado"
      }
         }
    
  })
    
    // console.log("logs"+payload.query);
    //   const body = payload.query;
    //   const query = { "quantity": { "$gte": 25 } };
    //   console.log("body" + body)
    //   const mongodb = context.services.get("mongodb-atlas");
    //   const mycollection = mongodb.db("LoginDb").collection("Users");
    //   return mycollection.find().toArray();
    };