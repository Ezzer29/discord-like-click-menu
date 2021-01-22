let isOnList = false;

function tryExitList() {
    if ( isOnList == false ) {
        isOnList = false;
        document.getElementById('listA').style.left = '-100px';
        document.getElementById('listA').style.display = 'none';
    }
}

function openClickMenu(event) {
    let x = event.clientX;
    let y = event.clientY;
    let h = $('#clickMenu').css('height').replace('px', '');
    let w = $('#clickMenu').css('width').replace('px', '');
    let wh = window.innerHeight;
    let ww = window.innerWidth;
    
    console.log( x + ' ' + y + ' ' + h + ' ' + w + ' ' + wh + ' ' + ww );

    let a, b;

    if ( wh - (y + 10) < h ) {
        a = wh - h - 10;
    } else {
        a = y;
    }

    if ( ww / 2 < x ) {
        b = x - w;
    } else {
        b = x;
    }

    document.getElementById("clickMenu").style.top = a + 'px';
    document.getElementById("clickMenu").style.left = b + 'px';
    document.getElementById("clickMenu").style.display = 'inline-block';
}

function listIShow(list, event) {
    let x = event.clientX / 1;
    let y = event.clientY / 1;
    let h = $(list).parent().css('height').replace('px', '') / 1;
    let w = $(list).parent().css('width').replace('px', '') / 1;
    let mt = $(list).parent().position().top / 1;
    let ml = $(list).parent().position().left / 1;
    let wh = window.innerHeight / 1;
    let ww = window.innerWidth / 1;
    let lh = $(list).css('height').replace('px', '') / 1;
    let lw = $(list).css('width').replace('px', '') / 1;
    let lt = $(list).position().top / 1;
    let ll = $(list).position().left / 1;
    let nh = $('#listA').css('height').replace('px', '') / 1;
    let nw = $('#listA').css('width').replace('px', '') / 1;

    let a, b;

    if ( mt + lt + nh + 10 > wh ) {
        a = wh - nh - 10;
    } else {
        a = mt + lt;
    }

    if ( ml + w / 2 > ww / 2 ) {
        b = ml - nw - 10;
    } else {
        b = ml + w + 10;
    }

    document.getElementById('listA').style.top = a + 'px';
    document.getElementById('listA').style.left = b + 'px';
    document.getElementById('listA').style.display = 'inline-block';

    console.log(ml + ' ' + w + ' ' + a + ' ' + b);

    isOnList = true;
}

function listILeave() {
    isOnList = false;
    setTimeout(tryExitList, 500);
}

function lAEnter(list, event) {
    isOnList = true;
}

function lALeave(list, event) {
    isOnList = false;
    setTimeout(tryExitList, 500);
}