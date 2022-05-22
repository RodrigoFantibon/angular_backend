const express = require ('express')
const cors = require ('cors')
const app = express()
const bodyParser = require ('body-parser');
app.use(cors())
//req.body pode ser tratado como um objeto JSON
app.use(express.json())
app.use(bodyParser.json());
const livros = [
    {
        id: '1',
        titulo: 'José',
        autor: '12345678',
        numero_paginas: 'jose@email.com'
    },
    {
        id: '2',
        titulo: "Maria",
        autor: '98765432',
        numero_paginas: 'maria@email.com'
    }
]

//localhost:3000/api/livros
app.get('/api/livros', (req, res) => {
    res.status(200).json({
        mensagem: "Tudo OK",
        livros: livros
    })
})

//localhost:3000/api/livros
app.post('/api/livros', (req, res) => {
    console.log(req.body)
    livros.push(req.body)
    console.log(livros)
    res.status(201).json({mensagem: 'Livro inserido'})
})


module.exports = app
