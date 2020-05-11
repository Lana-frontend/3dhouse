function swipeColorRoof(number) {
    console.log(number);
    let roof = document.getElementById("roof");
    if(number === 0){
        roof.src = "img/roof/shokoladniy.png"
    } else if( number ===1){
        roof.src = "img/roof/sprucegreen.png"
    } else if(number === 2){
        roof.src = "img/roof/classic-vishnya.png"
    } else if(number === 3){
        roof.src = "img/roof/classic-red.png"
    } else if(number === 4){
        roof.src = "img/roof/blue.png"
    } else if(number === 5){
        roof.src = "img/roof/classic-sprucegreen.png"
    } else if(number === 6){
        roof.src = "img/roof/classic-tilered.png"
    } else if(number === 7){
        roof.src = "img/roof/darkgrey.png"
    } else if(number === 8){
        roof.src = "img/roof/vishnya.png"
    } else if(number === 9){
        roof.src = "img/roof/black.png"
    } else if(number === 10){
        roof.src = "img/roof/classic-blue.png"
    }
}

function swipeColorFasade(number) {
    console.log(number);
    let facade = document.getElementById("facade");
    if(number === 0){
        facade.src = "img/facede/shtukaturka01.png"
    } else if( number ===1){
        facade.src = "img/facede/shtukaturka02.png"
    } else if(number === 2){
        facade.src = "img/facede/shtukaturka03.png"
    } else if(number === 3){
        facade.src = "img/facede/shtukaturka04.png"
    } else if(number === 4){
        facade.src = "img/facede/shtukaturka05.png"
    } else if(number === 5){
        facade.src = "img/facede/shtukaturka08.png"
    } else if(number === 6){
        facade.src = "img/facede/shtukaturka09.png"
    } else if(number === 7){
        facade.src = "img/facede/shtukaturka13.png"
    } else if(number === 8){
        facade.src = "img/facede/shtukaturka14.png"
    } else if(number === 9){
        facade.src = "img/facede/shtukaturka15.png"
    } else if(number === 10){
        facade.src = "img/facede/shtukaturka18.png"
    }
}

function swipeColorGutter(number) {
    console.log(number);
    let gutter = document.getElementById("gutter");
    if(number === 0){
        gutter.src = "img/gutter/bezheviy.png"
    } else if( number ===1){
        gutter.src = "img/gutter/cherniy.png"
    } else if(number === 2){
        gutter.src = "img/gutter/krasniy.png"
    } else if(number === 3){
        gutter.src = "img/gutter/rizhiy.png"
    } else if(number === 4){
        gutter.src = "img/gutter/seriy.png"
    }
}