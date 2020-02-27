var race = "";
var subRace = "";
var chtrClass = "";
var background = "";
var level = 1;
var proficiencies = "";

function chosenAttributes(){
    background = localStorage.getItem('background');
    chtrClass = localStorage.getItem('chtrClass');
    race = localStorage.getItem('race');

    var backProf = "You already have " + getBackgroundProf() + " as proficiencies from your " + getBackgroundString() + " background. --> Choose and put in fields";
    var para = document.createElement("p");
    var node = document.createTextNode(backProf);
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
    document.getElementById("div1").innerHTML += "<br>";

    var classLang = "As a " + race + " you know " + getRaceLanguages() + ".";
    para = document.createElement("p");
    var node = document.createTextNode(classLang);
    para.appendChild(node);
    if(getBackgroundLanguages() != ""){
        var backLang = " Your " + background + " background also allows " + getBackgroundLanguages() + ". --> Choose and put in fields";
        node = document.createTextNode(backLang);
        para.appendChild(node);
    }
    var element = document.getElementById("div2");
    element.appendChild(para);

}

function getBackgroundString(){
    switch(background){
        case "acolyte": return "Acolyte";
        case "charlatan": return "Charlatan";
        case "criminal": return "Criminal";
        case "entertainer": return "Entertainer";
        case "folkHero": return "Folk Hero";
        case "artisan": return "Guild Artisan";
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

function getBackgroundProf(){
    switch(background){
        case "acolyte": return "Insight and Religion";
        case "charlatan": return "Deception and Sleight of Hand";
        case "criminal": return "Deception and Stealth";
        case "entertainer": return "Acrobatics and Performance";
        case "folkHero": return "Animal Handling and Survival";
        case "artisan": return "Insight and Persuasion";
        case "hermit": return "Medicine and Religion";
        case "noble": return "History and Persuasion";
        case "outlander": return "Athletics and Survival";
        case "sage": return "Arcana and History";
        case "sailor": return "Athletics and Perception";
        case "soldier": return "Athletics and Intimidation";
        case "urchin": return "Sleight of Hand and Stealth";
        default: break;
    }
}

function getClassProf(){
    switch(chtrClass){
        case "barbarian": return "";
        case "bard": return "";
        case "cleric": return "";
        case "druid": return "";
        case "fighter": return "";
        case "monk": return "";
        case "paladin": return "";
        case "ranger": return "";
        case "rogue": return "";
        case "sorcerer": return "";
        case "warlock": return "";
        case "wizard": return "";
        default: break;
    }
}

function getBackgroundProf(){
    switch(background){
        case "acolyte": return "Insight and Religion";
        case "charlatan": return "Deception and Sleight of Hand";
        case "criminal": return "Deception and Stealth";
        case "entertainer": return "Acrobatics and Performance";
        case "folkHero": return "Animal Handling and Survival";
        case "artisan": return "Insight and Persuasion";
        case "hermit": return "Medicine and Religion";
        case "noble": return "History and Persuasion";
        case "outlander": return "Athletics and Survival";
        case "sage": return "Arcana and History";
        case "sailor": return "Athletics and Perception";
        case "soldier": return "Athletics and Intimidation";
        case "urchin": return "Sleight of Hand and Stealth";
        default: break;
    }
}

function getBackgroundLanguages(){
    switch(background){
        case "acolyte": return "Two Additional Languages";
        case "artisan": return "One Additional Language";
        case "noble": return "One Additional Language";
        case "outlander": return "One Additional Language";
        case "sage": return "Two Additional Languages";
        default: return "";break;
    }
}

function getRaceLanguages(){
    switch(race){
        case "dwarf": return "Common and Dwarvish";
        case "elf": return "Common and Elvish";
        case "halfling": return "Common and Halfling";
        case "human": return "Common and One Additional Language";
        case "dragonborn": return "Common and Draconic";
        case "gnome": return "Common and Gnomish";
        case "halfElf": return "Common, Elvish, and One Additional Language";
        case "halfOrc": return "Common and Orc";
        case "tiefling": return "Common and Infernal";
        default: break;
    }
}

function addRaceLang(){
    switch(race){
        case "human": return 1;
        case "halfElf": return 1;
        default: return 0;
    }
}

function addBackLang(){
    switch(background){
        case "acolyte": return 2;
        case "artisan": return 1;
        case "noble": return 1;
        case "outlander": return 1;
        case "sage": return 2;
        default: return 0;
    }
}