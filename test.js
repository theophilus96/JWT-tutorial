var request = require("request");
var options = {
  method: "GET",
  url: "http://localhost:3000/posts",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDczNjE4MDl9.qAEVN_d7tX-XH6Dhmo2rPwpmBKoz2Rb_6XayuN3UuqY",
  },
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
