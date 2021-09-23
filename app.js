var app = document.getElementById("type");

var typewriter = new Typewriter(app, {
  loop: true,
  cursor: "",
});

typewriter
  .typeString("<h1>COMING</h1><h1>SOON</h1>")
  .pauseFor(1000)
  .deleteAll()
  .start();
