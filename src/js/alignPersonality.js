var background = "";

function chosenBackground(){
    background = localStorage.getItem("background");
    var link = "http://dnd5e.wikidot.com/background:";
    switch(background){
        case "acolyte": link += "acolyte"; break;
        case "charlatan": link += "charlatan"; break;
        case "criminal": link += "criminal"; break;
        case "entertainer": link += "entertainer"; break;
        case "folkHero": link += "folk-hero"; break;
        case "artisan": link += "guild-artisan"; break;
        case "hermit": link += "hermit"; break;
        case "noble": link += "noble"; break;
        case "outlander": link += "outlander"; break;
        case "sage": link += "sage"; break;
        case "sailor": link += "sailor"; break;
        case "soldier": link += "soldier"; break;
        case "urchin": link += "urchin"; break;
        default: break;
    }
    document.getElementById("charLinks").href = link;
    removeRenameExRoll();
}

function removeRenameExRoll(){
    var div = document.getElementById('exRollName');
    switch(background){
        case "charlatan": link += "charlatan"; break;
        case "criminal": link += "criminal"; break;
        case "entertainer": link += "entertainer"; break;
        case "folkHero": link += "folk-hero"; break;
        case "artisan": link += "guild-artisan"; break;
        case "hermit": link += "hermit"; break;
        case "outlander": link += "outlander"; break;
        case "sage": link += "sage"; break;
        case "urchin": link += "urchin"; break;
        case "acolyte":
        case "noble":
        case "sailor": 
        case "soldier": 
            div.parentNode.removeChild(div); 
            var div2 = document.getElementById('exRoll');
            div2.parentNode.removeChild(div2);
            break;
        default: break;
    }
}

function saveCharacteristics(){
    var alignment =  document.getElementById("alignment").value;
    var trait =  document.getElementById("trait").value;
    var ideal =  document.getElementById("ideal").value;
    var bond =  document.getElementById("bond").value;
    var flaw =  document.getElementById("flaw").value;
    var temp = true;
    
    if(background != "soldier" && background != "sailor" && background != "noble" && background != "acolyte"){
        var exRoll =  document.getElementById("exRoll").value;
        if(exRoll == ""){
            temp = false;
        }
        else{
            //local storage
        }
    }
    if(trait != "" && ideal != "" && bond != "" && flaw != "" && temp && alignment != ""){
        //save and '
        //localStorage.setItem('exRoll', exRoll);
        //localStorage.setItem('', intS);
        // localStorage.setItem('wis', wis);
        // localStorage.setItem('cha', cha);
        // localStorage.setItem('HP', HP);
        window.location.href="./weaponArmor.html"; 
    }
    else{
        alert("Not all fields are filled out.");
    }
}