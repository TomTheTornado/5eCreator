let race = "";
let subRace = "";
let chtrClass = "";
let background = "";
let level = 1;

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
    if(race == "dwarf"){ subrace = document.getElementById("subDwarf").value;}
    else if(race == "elf"){ subrace = document.getElementById("subElf").value;}
    else if(race == "halfling"){ subrace = document.getElementById("subHalfling").value;}
    else if(race == "gnome"){ subrace = document.getElementById("subGnome").value;}
    else{
        subRace = "none";
    }
    if(race == "" || chtrClass == "" || background == "" || subRace == ""){
        alert("Not all fields are filled out!");
    }
    else{
        window.location.href="html/proficiencies.html";
    }
}