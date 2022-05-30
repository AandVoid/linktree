var userLanguage = window.navigator.userLanguage || window.navigator.language;

// console.log(userLanguage);

// Start
window.onload = () => populatePage(userLanguage);


function accessLink(url) {
    window.open(url, '_blank').focus();
}

function populatePage(userLanguage){

    // console.log(userLanguage)

    if (userLanguage != 'pt-BR') {
        printData(language.english)
        return language.english
    }else {
        printData(language.portuguese)  
        return language.portuguese
    }
    
}

function printData(language){
    // console.log("printData")
    document.getElementById("email").innerHTML=language.email;
    document.getElementById("role").innerHTML=language.role;
    document.getElementById("role-description").innerHTML=language.roleDescription;
    document.getElementById("portfolio-action").innerHTML=language.portfolioAction;
    document.getElementById("commission-action").innerHTML=language.commissionAction;
    document.getElementById("website-action").innerHTML=language.websiteAction;
    document.getElementById("youtube-action").innerHTML=language.youtubeAction;
    document.getElementById("instagram-action").innerHTML=language.instagramAction;
    document.getElementById("spring-store-title").innerHTML=language.springStoreTitle;
    document.getElementById("spring-store-subtitle").innerHTML=language.springStoreSubtitle;
    document.getElementById("spring-store-description").innerHTML=language.springStoreDescription;
    document.getElementById("local-store-title").innerHTML=language.localStoreTitle;
    document.getElementById("local-store-subtitle").innerHTML=language.localStoreSubtitle;
    document.getElementById("local-store-description").innerHTML=language.localStoreDescription;
}