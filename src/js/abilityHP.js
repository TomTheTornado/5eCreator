var race = "";
var subRace = "";
var chtrClass = "";

function chosenScores(){
    document.getElementById("div1").innerHTML = "To calculate your basic ability scores either roll 4d6, \
        subtract the lowest die value, and do that for each score. On the other hand, you can use the \"standard array\" \
        which use the numbers 15, 14, 13, 12, 10, and 8.";

    background = localStorage.getItem('background');
    chtrClass = localStorage.getItem('chtrClass');
    race = localStorage.getItem('race');
    subRace = localStorage.getItem('subRace');

    var raceIncr = "You gain an additional " + raceScoreIncrease();
    var para = document.createElement("p");
    var node = document.createTextNode(raceIncr);
    para.appendChild(node);
    if(subRace != ""){
        var subRaceIncr = " Being a " + subRaceScoreIncrease();
        node = document.createTextNode(subRaceIncr);
        para.appendChild(node);
    }
    var element = document.getElementById("div1");
    element.appendChild(para);
    
}

function raceScoreIncrease(){
    switch(race){
        case "dwarf": return "+2 to Constitution as a Dwarf.";
        case "elf": return "+2 to Dexterity as an Elf.";
        case "halfling": return "+2 to Dexterity as a Halfling.";
        case "human": return "+1 to all ability scores as a Human.";
        case "dragonborn": return "+2 to Strength and +1 to Charisma as a Dragonborn.";
        case "gnome": return "+2 to Intelligence as a Gnome.";
        case "halfElf": return "+2 to Charisma and +1 to any 2 ability scores as a Half-Elf.";
        case "halfOrc": return "+2 to Strength and +1 to Constitution as a Half-Orc.";
        case "tiefling": return "+1 to Intelligence and +2 to Charisma as a Tiefling.";
        default: break;
    }
}

function subRaceScoreIncrease(){
    switch(subRace){
        case "hillDwarf": return "Hill Dwarf you also gain +1 to Wisdom.";
        case "mountainDwarf": return "Mountain Dwarf you also gain +2 to Strength.";
        case "highElf": return "High Elf you also gain +1 to Intelligence.";
        case "woodElf": return "Wood Elf you also gain +1 to Wisdom.";
        case "darkElf": return "Dark Elf (Drow) you also gain +1 to Charisma.";
        case "lightHalfling": return "Lightfoot Halfling you also gain +1 to Charisma.";
        case "stoutHalfling": return "Stout Halfling you also gain +1 to Constitution.";
        case "forestGnome": return "Forest Gnome you also gain +1 to Dexterity.";
        case "rockGnome": return "Rock Gnome toy also gain +1 to Constitution.";
        default: break;
    }
}