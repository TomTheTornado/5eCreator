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

    document.getElementById("div2").innerHTML = getHPPrompt();
}

function updateScoreMod(){
    document.getElementById("strMod").innerHTML = getAbilityScores("str");
    document.getElementById("dexMod").innerHTML = getAbilityScores("dex");
    document.getElementById("conMod").innerHTML = getAbilityScores("con");
    document.getElementById("intMod").innerHTML = getAbilityScores("int");
    document.getElementById("wisMod").innerHTML = getAbilityScores("wis");
    document.getElementById("chaMod").innerHTML = getAbilityScores("cha");
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
        case "rockGnome": return "Rock Gnome you also gain +1 to Constitution.";
        default: break;
    }
}

function getAbilityScores(ability){
    switch(ability){
        case "str": return getScoreModifier(document.getElementById("strScore").value);
        case "dex": return getScoreModifier(document.getElementById("dexScore").value);
        case "con": return getScoreModifier(document.getElementById("conScore").value);
        case "int": return getScoreModifier(document.getElementById("intScore").value);
        case "wis": return getScoreModifier(document.getElementById("wisScore").value);
        case "cha": return getScoreModifier(document.getElementById("chaScore").value);
        default: break;
    }
}

function getScoreModifier(score){
    switch(score){
        case "1": return "-5";
        case "2": case "3": return "-4";
        case "4": case "5": return "-3";
        case "6": case "7": return "-2";
        case "8": case "9": return "-1";
        case "10": case "11": return "+0";
        case "12": case "13": return "+1";
        case "14": case "15": return "+2";
        case "16": case "17": return "+3";
        case "18": case "19": return "+4";
        case "20": case "21": return "+5";
        case "22": case "23": return "+6";
        case "24": case "25": return "+7";
        case "26": case "27": return "+8";
        case "28": case "29": return "+9";
        case "30": return "+10";
        default: return "";
    }
}

function getHPPrompt(){
    switch(chtrClass){
        case "barbarian": return "As a barbarian, your level 1 HP is 12 + your constitution modifier.";
        case "bard": return "As a bard, your level 1 HP is 8 + your constitution modifier.";
        case "cleric": return "As a cleric, your level 1 HP is 8 + your constitution modifier.";
        case "druid": return "As a druid, your level 1 HP is 8 + your constitution modifier.";
        case "fighter": return "As a fighter, your level 1 HP is 10 + your constitution modifier.";
        case "monk": return "As a monk, your level 1 HP is 8 + your constitution modifier.";
        case "paladin": return "As a paladin, your level 1 HP is 10 + your constitution modifier.";
        case "ranger": return "As a ranger, your level 1 HP is 10 + your constitution modifier.";
        case "rogue": return "As a rogue, your level 1 HP is 8 + your constitution modifier.";
        case "sorcerer": return "As a sorcerer, your level 1 HP is 6 + your constitution modifier.";
        case "warlock": return "As a warlock, your level 1 HP is 8 + your constitution modifier.";
        case "wizard": return "As a wizard, your level 1 HP is 6 + your constitution modifier.";
        default: break;
    }
}

function getBaseHP(){
    switch(chtrClass){
        case "barbarian": return 12;
        case "bard": return 8;
        case "cleric": return 8;
        case "druid": return 8;
        case "fighter": return 10;
        case "monk": return 8;
        case "paladin": return 10;
        case "ranger": return 10;
        case "rogue": return 8;
        case "sorcerer": return 6;
        case "warlock": return 8;
        case "wizard": return 6;
        default: break;
    }
}

function getLvl1HP(){
    var conScore = document.getElementById("conScore").value;
    var conMod = getScoreModifier(conScore);
    var numMod = parseInt(conMod, 10);
    var HP = getBaseHP() + numMod;
    if(numMod >= -5 && numMod <= 10){
        document.getElementById("baseHP").innerHTML = HP;
    }
    else{
        document.getElementById("baseHP").innerHTML = "";
    }
}