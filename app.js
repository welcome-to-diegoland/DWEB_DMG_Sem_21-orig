// app.js
const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware para usar rutas
app.use('/', bookRoutes);

// Servidor escuchando
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
