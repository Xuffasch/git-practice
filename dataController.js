const data = [{ "a": 1, "b": 2 }, { "a": 4, "b": 5 }]

exports.data_all = function(req, res, next) {
  console.log("GET all data");
  res.status(200)
     .send({ "result": data })
}

exports.data_first = function(res, res, next) {
  console.log("GET first data")
  res.status(200)
     .send({ "result": data[0] })
}