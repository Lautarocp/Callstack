const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    //resolve('pasaron los pibes');
    reject('No pasaron los pibes');},2000)
    
})
miPromesa.then((loquevien)=>console.log(loquevien),(razon)=>console.log(razon))