const express = require("express");
const app = express();

app.get("/fibo/:max", function(req, res) {
  var max = Number(req.params.max);
  var arr = [0, 1];
  for (var i = 2; i < max; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  res.send("Fibonacci series: " + arr);
});
