const llamarexpress = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = llamarexpress();
const port = process.env.PORT;

//utilizacion de hbs para el renderizado de la pagina web

app.set("view engine", "hbs");

/* app.use(llamarexpress.static('./public3/viwes')) */
//app.use(llamarexpress.static('public'))
/* Express da soporte a los siguientes métodos de direccionamiento que se corresponden con los métodos HTTP: get, post, put, head,
delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, 
 m-search, notify, subscribe, unsubscribe, patch, search y connect. */

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerPartial("footer", "{{footer}}");
hbs.registerPartial("header", "{{header}}");

app.use(llamarexpress.static("./public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Adolfo Damian",
  });
});

app.get("/acerca", (req, res) => {
  res.render("acerca", {
    nombre: "Adolfo Damian",
    title: "Portafolio",
  });
});

app.get("/habilidades", (req, res) => {
  res.render("habilidades", {
    nombre: "Adolfo Damian",
    title: "Portafolio",
  });
});

/* experiencias */

app.get("/experiencias", (req, res) => {
  res.render("experiencias", {
    nombre: "Adolfo Damian",
    title: "Portafolio",
  });
});

/* educacion */

app.get("/educacion", (req, res) => {
  res.render("educacion", {
    nombre: "Adolfo Damian",
    title: "Portafolio",
  });
});

app.get("/portafolio", (req, res) => {
  res.render("portafolio", {
    nombre: "Adolfo Damian",
    title: "Portafolio",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

// Le indicamos a nuestro servidor que escuche el puerto 8080
app.listen(port, () => {
  console.log(`Escuchando en el puerto http:/localhost:${port}`);
});
