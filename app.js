const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
