const phoneBook = require("./models/phoneBook");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

/*
  Routes :
    1. / :
    2. /info :
    3. /api/persons :
    4. /api/persons/:id :
*/

app.use(cors());

app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  }),
);
app.use(express.json());

// app.use(morgan("tiny"));
// app.use(express.json());

let directory = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

let directory_copy = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

// error handling function
const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  if (err.name === "CastError") {
    return res.status(400).send({
      Error: "malformattd id",
    });
  }

  next(err);
};

const unknownEndpoint = (req, res) => {
  res.status(404).send({
    Error: "unknown endpoint",
  });
};

app.get("/", (req, res) => {
  res.send("This is phonebook backend!!!");
});

app.get("/info", (req, res) => {
  const date = new Date();
  console.log(date.toGMTString());
  res.send(`
    <p>Phonebook has info for ${directory.length} people</p>
    <p>${date}</p>
    `);
});

app.get("/api/persons", (req, res) => {
  // res.json(directory, null, 4);
  // fetching notes from mongodb

  phoneBook.find({}).then((persons) => {
    console.log(persons);
    res.json(persons);
  });
});

app.get("/api/persons/:id", (req, res, next) => {
  // const person = directory.find((person) => person.id === id);

  // if (person) {
  //   res.json(person);
  // } else {
  //   res.status(404).end();
  // }
  //
  phoneBook
    .findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      console.log(err);
      // err code 400 : bad request , server will not process the request due to something that is perceived to be a client error
      // res.status(400).send({
      //   Error: "mafomatted id",
      // });
      next(err);
    });
});

// generating id through random module
const generateID = (max) => {
  const id = Math.random() * max;
  return Number.parseInt(id);
};

const doesExists = (checkName) => {
  const data = directory.filter((person) => person.name === checkName);
  if (data.length === 0) return false;
  return data[0];
};

//adding phonebook entries
app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (body.name === undefined) {
    return res.status(400).json({
      Error: "Name missing",
    });
  }

  if (!body.name || !body.number) {
    if (!body.name)
      return res.status(400).json({
        Error: "Name is missing",
      });

    if (!body.number)
      return res.status(400).json({
        Error: "Number is missing",
      });
  }
  // if (doesExists(body.name))
  //   return res.status(400).json({
  //     Error: "name must be unique",
  //   });

  const person = new phoneBook({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedNote) => {
    res.json(savedNote);
  });
  // res.json(directory, null, 4);
});

// deleting individual entry
app.delete("/api/persons/:id", (req, res, next) => {
  // const id = Number(req.params.id);
  // directory = directory.filter((entry) => entry.id !== id);
  // res.status(204).end();

  phoneBook
    .findByIdAndDelete(req.param.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((err) => next(err));
});

// update existing phonebook record
app.put("/api/persons/:id", (req, res, next) => {
  const body = req.body;
  const person = {
    name: body.name,
    number: body.number,
  };

  /*
    By default the upadtedPerson parameter of the event handler receives the original document
    without the modifications
    {new : true} => cause event handler to be called with new modified document instead of the original
  */

  phoneBook
    .findByIdAndUpdate(req.params.id, person, { new: true })
    .then((updatedPerson) => {
      res.json(updatedPerson);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});
// app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.use(errorHandler);
