const form = document.querySelector("form"),
statusTxt = form.querySelector(".button span");


form.onsubmit = (event)=>{
    event.preventDefault(); //zabránění v odeslání
    statusTxt.style.color = "#044c1c";
    statusTxt.style.display = "block";
    statusTxt.style.fontWeight = 700;
  
    let xmlObject = new XMLHttpRequest(); //vytvoření xml objectu
    xmlObject.open("POST", "message.php", true); // žádost do message.php
    xmlObject.onload = ()=>{    //po načtení ajaxu
        if(xmlObject.readyState == 4 && xmlObject.status ==200){ 
            let response = xmlObject.response;   //uložení respons ajax do proměnné
            
            //pokud bude chyba v mailové adrese status(span) změní text barvu na červenou, resetuje form
            if(response.indexOf("Je potřeba vypnit zprávu a mail") != -1 || response.indexOf("Mailová adresa je zapsána ve špatném tvaru") ||response.indexOf("Pardon, email se nepodařilo odeslat")){
                statusTxt.style.color = "black";
                statusTxt.style.fontWeight = 700;
            } else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                }, 3000); //skrýt statusTxt po 3sek pokud bude zpráva poslána
            }            
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form); //vytvoření FormData, používáno na posílání z formData  
    xmlObject.send(formData);
   
}