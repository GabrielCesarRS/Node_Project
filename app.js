import express from 'express';

const app = express();

app.get("/app", function(req, res){
    res.send("Olá, ta ok");
})
app.get("/produtos/:nome/categoria/:categoria/valor/:valor", (req, res) => {
    res.send(
    {
        nome: req.params.nome,
        categoria: req.params.categoria,
        valor: req.params.valor
    })
});

app.delete("/produtos/camisa", (req, res) =>{
    res.send("Camisa cabo po kkkk <br> ENDPOINT da camisa via postman");
})
app.listen(3333, function(){
    console.log("TA TUDO OK NA PORTA 3333");
});