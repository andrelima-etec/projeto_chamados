const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send("Olá, mundo!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});