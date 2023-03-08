let grootteruit = parseInt(prompt("Vul hier in tot hoe groot de ruit moet zijn"))
uitkomst = ""

for(regel = 1; regel <= grootteruit; regel++){ //Blijft hier doorgaan tot de hoeveelheid regels zijn behaald
    for(teller = 1; teller <= regel; teller++){ //Deze for loop is voor de regel opbouw
        if (teller == 1){
            uitkomst += teller;
        }else{
            uitkomst += "-"+teller;  
        }

    }
    uitkomst += "<br>\n"
}
for(regel = grootteruit -1; regel >= 1; regel--){
    for(teller = 1; teller <= regel; teller++){
        if (teller == 1){
            uitkomst += teller;
        }else{
            uitkomst += "-"+teller;  
        }
    }
    uitkomst += "<br>\n"
}

console.log(uitkomst)
document.getElementById("demo").innerHTML = uitkomst;
