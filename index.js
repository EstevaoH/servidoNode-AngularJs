const express = require('express');
const con = require ('./db'); 
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3000, () =>{
    con.connect((erro)=>{
        if(!erro){
            console.log('Servidor Okay');
        }else{
            console.log('Erro: ' + erro.sqlMessage)
        }
    })
});

app.get('/bandas', (req, res) =>{
    const sql ='SELECT * FROM tbbanda';
    con.query(sql,(erro,resultado)=>{
        if(!erro){
            res.send(resultado);
        }else{
            res.send(erro.sqlMessage)
        }
    })
})

app.get('/bandas/:id', (req, res)=>{
    const id = req.params.id;
    const sql = 'SELECT b.CoBanda, NoBanda, NoIntegrante FROM TbBanda AS b INNER JOIN TbIntegrante AS i ON b.CoBanda = i.CoBanda AND b.NoBanda = ?';
    con.query(sql, [id], (erro, resultado)=>{
        if(!erro){
            res.send(resultado);
        }else{
            res.send(erro.sqlMessage);
        }
    })
})    


app.get('/integrantes', (req, res)=>{
    const sql = 'SELECT  NoBanda AS "Banda", NoIntegrante, i.CoIntegrante FROM TbBanda AS b RIGHT JOIN TbIntegrante AS i ON b.CoBanda = i.CoBanda';
    con.query(sql, (erro, resultado)=>{
        if(!erro){
            res.send(resultado);
        }else{
            res.send(erro.sqlMessage);
        }
    })
})

app.get('/integrantes/:id', (req, res)=>{
    const sql = 'SELECT b.CoBanda, NoBanda, NoIntegrante FROM TbBanda AS b INNER JOIN TbIntegrante AS i ON b.CoBanda = i.CoBanda AND i.NoIntegrante = ?';
    const id = req.params.id;
    con.query(sql, [id], (erro, resultado)=>{
        if(!erro){
            res.send(resultado);
        }else{
            res.send(erro.sqlMessage);
        }
    })
})