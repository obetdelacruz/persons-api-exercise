const PORT = 8080;
const express = require("express");
const app = express();
app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Obi-Wan Kenobi",
    number: "040-135456",
  },
  {
    id: 3,
    name: "saitama baldi",
    number: "040-123456",
  },
];

app.get("/api/persons", (_request, response) => {
  response.status(200).json(persons);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
