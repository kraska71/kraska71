var express = require('express');
const SERVER = express();
const PORT = process.env.PORT || 3000;

SERVER.use(express.static('public', { maxAge: '4h' }));
SERVER.listen(PORT);
