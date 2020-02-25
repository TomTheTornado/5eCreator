let race = "";
let subRace = "";
let chtrClass = "";
let background = "";

function chooseProficiencies() {
    race = document.getElementById("race").value;
    chtrClass = document.getElementById("chtrClass").value;
    background = document.getElementById("background").value;

    if(race !="dwarf"){document.getElementById("dwarfSub").style = "display:none";}
    if(race !="elf"){document.getElementById("elfSub").style = "display:none";}
    if(race !="halfling"){document.getElementById("halflingSub").style = "display:none";}
    if(race !="gnome"){document.getElementById("gnomeSub").style = "display:none";}
    if(race == "dwarf"){ document.getElementById("dwarfSub").style = "display:visible";}
    if(race == "elf"){ document.getElementById("elfSub").style = "display:visible";}
    if(race == "halfling"){ document.getElementById("halflingSub").style = "display:visible";}
    if(race == "gnome"){ document.getElementById("gnomeSub").style = "display:visible";}
}