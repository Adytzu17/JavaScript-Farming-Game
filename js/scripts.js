    let coin = 100;
    let coins = document.getElementById("coins");
    coins.innerText = "COINS: " + coin;

    let carot = 0;
    let carots = document.getElementById("carots");
    carots.innerText = "Carots: " + carot + " Kg";

    let id_name = "soil_";
    for(let i = 0;i < 40; i++){
        let soil = document.createElement("IMG");
        soil.setAttribute("id", id_name + i);
        soil.setAttribute("value", "undergrown");
        soil.setAttribute("onclick", 'getId(this.id);')
        soil.src = "/resources/soil.png";
        document.getElementById("soils").appendChild(soil);
    }

    let clicked_id;
    function getId(click_id){
        if (click_id !== clicked_id && document.getElementById(click_id).getAttribute("value") == "undergrown") {
            clicked_id = click_id;
            document.getElementById(click_id).setAttribute("value", "grow");
            if(coin >= 5) {
                coin -=5;
                coins.innerText = "COINS: " + coin;
                document.getElementById(click_id).src = "/resources/seed_carot.png";
                setTimeout(()=>{
                    document.getElementById(click_id).src = "/resources/grown_carot.png";
                    document.getElementById(click_id).setAttribute("value", "grown");
                }, 2000);
            } else {
                alert("You have no more coins!");
            }  
        }

        if(document.getElementById(click_id).getAttribute("value") == "grown"){
            document.getElementById(click_id).src = "/resources/soil.png";
            document.getElementById(click_id).setAttribute("value", "undergrown");
            carot +=1;
            carots.innerText = "Carots: " + carot + " Kg";
        }
    }

    function sell(){
        if(carot > 0) {
            coin += carot + Math.floor(Math.random() * 11); 
            carot = 0;
            carots.innerText = "Carots: " + carot + " Kg";
            coins.innerText = "COINS: " + coin;
        } else {
            alert("There are not enough carrots!");
        }
    }