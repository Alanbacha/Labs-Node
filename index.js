const express = require("express");
const app = express();

const _PORT = 3000;

app.get("/", (req, res) => {
	res.status(200).send({ message: "Hello World!" });
});

app.listen(_PORT, () => {
	console.log("API inicializada na porta " + _PORT);
});
