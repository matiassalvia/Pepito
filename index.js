import { express } from 'express';
import {router} from 'express'
const express = require ('express');
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Bienvenido a mi aplicacion'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use('/', router)