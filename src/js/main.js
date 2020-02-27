var race = "";
var subRace = "";
var chtrClass = "";
var background = "";
var level = 1;
var proficiencies = "";

function chooseSubrace() {
    race = document.getElementById("race").value;

    if(race !="dwarf"){document.getElementById("dwarfSub").style = "display:none";}
    if(race !="elf"){document.getElementById("elfSub").style = "display:none";}
    if(race !="halfling"){document.getElementById("halflingSub").style = "display:none";} //makes elements visible or hidden
    if(race !="gnome"){document.getElementById("gnomeSub").style = "display:none";}
    if(race == "dwarf"){ document.getElementById("dwarfSub").style = "display:visible";}
    if(race == "elf"){ document.getElementById("elfSub").style = "display:visible";}
    if(race == "halfling"){ document.getElementById("halflingSub").style = "display:visible";}
    if(race == "gnome"){ document.getElementById("gnomeSub").style = "display:visible";}
}

function checkAttributes(){
    race = document.getElementById("race").value;
    chtrClass = document.getElementById("chtrClass").value;
    background = document.getElementById("background").value;

    subRace = "";
    if(race == "dwarf"){ subRace = document.getElementById("subDwarf").value;}
    else if(race == "elf"){ subRace = document.getElementById("subElf").value;}
    else if(race == "halfling"){ subRace = document.getElementById("subHalfling").value;}
    else if(race == "gnome"){ subRace = document.getElementById("subGnome").value;}
    else{
        subRace = "none";
    }

    if(race == "" || chtrClass == "" || background == "" || subRace == ""){
        alert("Not all fields are filled out!");
    }
    else{
        localStorage.setItem('race', race);
        localStorage.setItem('subRace', subRace);
        localStorage.setItem('chtrClass', chtrClass);
        localStorage.setItem('background', background);
        localStorage.setItem('level', level);
        window.location.href="html/proficiencies.html";
    }
}

function chosenAttributes(){
    var backProf = "You already have # as proficiencies from your " + getBackgroundString() + " background.";
    var para = document.createElement("p");
    var node = document.createTextNode(backProf);
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
}

function getBackgroundString(){
    background = localStorage.getItem('background');
    switch(background){
        case "acolyte": return "Acolyte";
        case "charlatan": return "Charlatan";
        case "criminal": return "Criminal";
        case "entertainer": return "Entertainer";
        case "folkHero": return "Folk Hero";
        case "artisan": return "Artisan";
        case "hermit": return "Hermit";
        case "noble": return "Noble";
        case "outlander": return "Outlander";
        case "sage": return "Sage";
        case "sailor": return "Sailor";
        case "soldier": return "Soldier";
        case "urchin": return "Urchin";
        default: break;
    }
}

function getBackgroundProficiencies(){
    background = localStorage.getItem('background');
    switch(background){
        case "acolyte": return "Acolyte";
        case "charlatan": return "Charlatan";
        case "criminal": return "Criminal";
        case "entertainer": return "Entertainer";
        case "folkHero": return "Folk Hero";
        case "artisan": return "Artisan";
        case "hermit": return "Hermit";
        case "noble": return "Noble";
        case "outlander": return "Outlander";
        case "sage": return "Sage";
        case "sailor": return "Sailor";
        case "soldier": return "Soldier";
        case "urchin": return "Urchin";
        default: break;
    }
}