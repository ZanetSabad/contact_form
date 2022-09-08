const form = document.querySelector("form"),
statusTxt = form.querySelector(".button span");


form.onsubmit = (event)=>{
    event.preventDefault(); //zabránění v odeslání
    statusTxt.style.display = "block";
  
    let xmlObject = new XMLHttpRequest(); //vytvoření xml objectu
    xmlObject.open("POST", "message.php", true); // žádost do message.php
    xmlObject.onload = ()=>{    //po načtení ajaxu
        if(xmlObject.readyState == 4 && xmlObject.status == 200){ 
            let response = xmlObject.response;   //uložení respons ajax do proměnné
            console.log(response);
        }
    }
        xmlObject.send();
    
}
