var background = "";
var chtrClass = "";

function loadLinks(){
    background = localStorage.getItem("background");
    chtrClass = localStorage.getItem("chtrClass");
    document.getElementById("goldText").innerHTML = "Calculate your gold by rolling " + goldClassInfo() + " from your class \
        and then adding " + goldBackInfo() + " GP from your background."
    document.getElementById("equipClass").href = equipmentLinks();
}


function equipmentLinks(){
    var equipLink = "http://dnd5e.wikidot.com/";
    switch(chtrClass){
        case "barbarian": equipLink += "barbarian"; break;
        case "bard": equipLink += "bard"; break;
        case "cleric": equipLink += "cleric"; break;
        case "druid":  equipLink += "druid";  break;
        case "fighter":  equipLink += "fighter"; break;
        case "monk":  equipLink += "monk"; break;
        case "paladin":  equipLink += "paladin"; break;
        case "ranger":  equipLink += "ranger"; break;
        case "rogue":  equipLink += "rogue"; break;
        case "sorcerer":  equipLink += "sorcerer"; break;
        case "warlock":  equipLink += "warlock"; break;
        case "wizard": equipLink += "wizard"; break;
        default: return equipLink;
    }
    return equipLink += "#toc3";
}
function goldBackInfo(){
    switch(background){
        case "acolyte":
        case "charlatan":
        case "criminal":
        case "entertainer": 
        case "artisan": 
            return 15;
        case "outlander":
        case "folkHero": 
        case "sage": 
        case "sailor": 
        case "soldier": 
        case "urchin":
            return 10;
        case "hermit": return 5;
        case "noble": return 25;
        default: return 0;
    }
}

function goldClassInfo(){
    switch(chtrClass){
        case "barbarian": return "2d4 × 10 GP";
        case "bard": return "5d4 × 10 GP";
        case "cleric": return "5d4 × 10 GP";
        case "druid": return "2d4 × 10 GP";
        case "fighter": return "5d4 × 10 GP";
        case "monk": return "5d4 GP";
        case "paladin": return "5d4 × 10 GP";
        case "ranger": return "5d4 × 10 GP";
        case "rogue": return "4d4 × 10 GP";
        case "sorcerer": return "3d4 × 10 GP";
        case "warlock": return "4d4 × 10 GP";
        case "wizard": return "4d4 × 10 GP";
        default: return "";
    }
}

function saveEquipGold(){
    var equipment = document.getElementById('clEquip');
    var gold = document.getElementById('gold');
    localStorage.setItem('equipment', equipment);
    localStorage.setItem('gold', gold);
    var level = localStorage.getItem('level');
    if(level == 1){
        window.href = location.href="./personality.html";
    }
    else{
        //go to beyond level 2 page
    }
}
