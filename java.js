let casas = [];
let x = 0;
function circuito(passos){
    
    if(passos > 0){ 
        while(x <= passos){
        casas.push(x);
        console.log("Visitei a "+casas[x]+" casa");
        x++;
        }  
    }
    else{
        console.log("Eliminado!")
    }
    
}

circuito(10);