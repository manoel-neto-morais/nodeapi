//importação do express (micro framework que nos auxiliará no controle das rotas (e views)) 
const express = require('express')

// a dependência cors irá controlar o acesso externo à api
const cors = require('cors')

//importação do mongose (dependência que atua como ORM - Object Relational Map ou, nesse caso, ODM - Object Data Map). Utilizando essa técnica nós poderemos atuar apenas com códigos js para manipulação do banco.
const mongoose = require('mongoose')

// importação da dependência require-dir (ela é responsável por monitorar todos os arquivos  de um diretório e aplicar o require em todos eles automaticamente)
const requireDir = require('require-dir')


//iniciando o App (utilizando o microframework express)
const app = express()

//permite o envio de dados para a aplicação no formato de json
app.use(express.json())

//dessa maneira o cors irá permitir que qualquer cliente externo acesso a api
app.use(cors())

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true } )

//monitorando as mudanças nos models
requireDir('./src/models')

//rotas: estamos definindo uma rota primaria chamada /api a partir daí ele redireciona para o arquivo routes onde estarão as outras rotas
app.use('/api', require('./src/routes'))


//ouvir a porta 3001 que será a porta de saida da aplicação
app.listen(3001)