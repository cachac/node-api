import express from "express";

const router = express.Router();
const sticky = (Math.random() + 1).toString(36).substring(10);

router.get("/", function (request, response) {
  console.log("GET /", sticky);

  response.send({ sticky });
});

router.get("/secret", function (request, response) {
  const mySecret = process.env.TOKEN;
  console.log("My Token: ", mySecret);

  response.send({ mySecret });
});

router.post("/auth", function (request, response) {
  const input = request.body;
  console.log("input", input);

  if (!input?.username) {
    return response.status(400).send("Invalid username");
  }

  if (!input?.password) {
    return response.status(400).send("Invalid password");
  }

  if (input.password === process.env.TOKEN) return response.send("ok");
  else return response.status(400).send("Unauthorized");
});

router.get("/error", function (request, response) {
  const num = Math.floor(Math.random() * 5);
  console.log("Random Crash: ", num);

  if (num === 0) {
    console.error("Error de sistema");
    process.exit(1);
  }

  response.send({ num });
});

export default router;
