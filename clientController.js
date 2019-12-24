const client = [{ id: 1, lastName: "Morris"}, 
                { id: 2, lastName: "Graham"}]

exports.client_all = function(req, res, next) {
  console.log("GET all clients")
  res.status(200)
     .send({ result: client })

};

exports.client_first = function(req, res, next) {
  console.log("GET first client")
  res.status(200)
     .send({ result: client })

}