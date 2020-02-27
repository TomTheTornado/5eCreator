var race = "";
var subRace = "";
var chtrClass = "";
var background = "";
var level = 1;
var proficiencies = "";
var languages = "";

function chosenAttributes(){
    background = localStorage.getItem('background');
    chtrClass = localStorage.getItem('chtrClass');
    race = localStorage.getItem('race');

    var backProf = "You already have " + getBackgroundProf() + " as proficiencies from your " + getBackgroundString() + " background.";
    var para = document.createElement("p");
    var node = document.createTextNode(backProf);
    para.appendChild(node);
    var classProf = " Your class also allows you to " + getClassProf();
    node = document.createTextNode(classProf);
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
    classProfFields();
    document.getElementById("div1").innerHTML += "<br><br>";

    var classLang = "As a " + race + " you know " + getRaceLanguages() + ".";
    para = document.createElement("p");
    var node = document.createTextNode(classLang);
    para.appendChild(node);
    if(getBackgroundLanguages() != ""){
        var backLang = " Your " + background + " background also allows " + getBackgroundLanguages() + ".";
        node = document.createTextNode(backLang);
        para.appendChild(node);
    }
    var element = document.getElementById("div2");
    element.appendChild(para);
    if(exRaceLang() + exBackLang() > 0){
        exLangFields();
    }

}

function exLangFields(){
    for(var i = 0; i < (exRaceLang() + exBackLang()); i++){
        var para = document.createElement("p");
        var node = document.createTextNode("Additional Language " + (i+1) + ": ");
        para.appendChild(node);
        var element = document.getElementById("div2");
        element.appendChild(para);
        document.getElementById("div2").innerHTML += "<input type=\"text\"" + " id=exLang" + (i+1) +" value=\"\">";
        document.getElementById("div2").innerHTML += "<br>";
    }
}

function classProfFields(){
    for(var i = 0; i < numClassProf(); i++){
        var para = document.createElement("p");
        var node = document.createTextNode("Proficiency " + (i+1) + ": ");
        para.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(para);
        document.getElementById("div1").innerHTML += "<input type=\"text\"" + " id=cProf" + (i+1) +" value=\"\">";
        document.getElementById("div1").innerHTML += "<br>";
    }
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
        case "barbarian": return "choose 2 skills from animal handling, athletics, intimidation, nature, perception, and survival.";
        case "bard": return "choose 3 skills from all skills in the game.";
        case "cleric": return "choose 2 skills from history, insight, medicine, persuasion, and religion.";
        case "druid": return "choose 2 skills from arcana, animal handling, insight, medicine, nature, perception, religion, and survival.";
        case "fighter": return "choose 2 skills from acrobatics, animal handling, athletics, history, insight, intimidation, perception, and survival.";
        case "monk": return "choose 2 skills from acrobatics, athletic, history, insight, religion, and stealth.";
        case "paladin": return "choose 2 from athletics, insight, intimidation, medicine, persuasion, and religion.";
        case "ranger": return "choose 3 from animal handling, athletics, insight, investigation, nature, perception, stealth, and survival.";
        case "rogue": return "choose 4 from acrobatics, athletics, deception, insight, intimidation, investigation, perception, performance, persuasion, sleight of hand, and stealth.";
        case "sorcerer": return "choose 2 from arcana, deception, insight, intimidation, persuaion, and religion.";
        case "warlock": return "choose 2 skills from arcana, deception, history, intimidation, investigation, nature, and religion.";
        case "wizard": return "choose 2 from arcana, history, insight, investigation, medicine, and religion.";
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
        case "acolyte": return "2 Additional Languages";
        case "artisan": return "1 Additional Language";
        case "noble": return "1 Additional Language";
        case "outlander": return "1 Additional Language";
        case "sage": return "2 Additional Languages";
        default: return "";break;
    }
}

function getRaceLanguages(){
    switch(race){
        case "dwarf": return "Common and Dwarvish";
        case "elf": return "Common and Elvish";
        case "halfling": return "Common and Halfling";
        case "human": return "Common and 1 Additional Language";
        case "dragonborn": return "Common and Draconic";
        case "gnome": return "Common and Gnomish";
        case "halfElf": return "Common, Elvish, and 1 Additional Language";
        case "halfOrc": return "Common and Orc";
        case "tiefling": return "Common and Infernal";
        default: break;
    }
}

function exRaceLang(){
    switch(race){
        case "human": return 1;
        case "halfElf": return 1;
        default: return 0;
    }
}

function exBackLang(){
    switch(background){
        case "acolyte": return 2;
        case "artisan": return 1;
        case "noble": return 1;
        case "outlander": return 1;
        case "sage": return 2;
        default: return 0;
    }
}

function numClassProf(){
    switch(chtrClass){
        case "barbarian": return 2;
        case "bard": return 3;
        case "cleric": return 2;
        case "druid": return 2;
        case "fighter": return 2;
        case "monk": return 2;
        case "paladin": return 2;
        case "ranger": return 3;
        case "rogue": return 4;
        case "sorcerer": return 2;
        case "warlock": return 2;
        case "wizard": return 2;
        default: break;
    }
}

function saveProfLang(){
    //get number of proficiencies
    //loop through to get elements from html
    //add elements to proficiencies


    //do the same thing above but now with languages
}