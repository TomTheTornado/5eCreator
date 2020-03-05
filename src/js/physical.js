function physicalLink(){
    var race = localStorage.getItem('race');
    var link = "http://dnd5e.wikidot.com/";
    switch(race){
        case "dwarf": link += "dwarf"; break;
        case "elf": link += "elf"; break;
        case "halfling": link += "halfling"; break;
        case "human": link += "human"; break;
        case "dragonborn": link += "dragonborn"; break;
        case "gnome": link += "gnome"; break;
        case "halfElf": link += "half-elf"; break;
        case "halfOrc": link += "half-orc"; break;
        case "tiefling": link += "tiefling"; break;
        default: return ""; break;
    }
    link += "#toc0";
    document.getElementById("raceLink").href = link;
}

function savePhysical(){
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("age", document.getElementById("age").value);
    localStorage.setItem("height", document.getElementById("height").value);
    localStorage.setItem("weight", document.getElementById("weight").value);
    //window.location.href = ""
}
