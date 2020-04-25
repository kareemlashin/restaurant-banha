$("#menu-Pop2").mouseup(function(e) {
    var container = $(".box-menu2");
    var container1 = $("#prev2");
    var container3 = $("#next2");

    if (!container.is(e.target) && container.has(e.target).length === 0 && 
    !container1.is(e.target) && container1.has(e.target).length === 0 && 
    !container3.is(e.target) && container3.has(e.target).length === 0) {
$("#menu-Pop2").hide();
    }
});

let next2 = document.getElementById("next2");
let prev2 = document.getElementById("prev2");
let myItems2 = Array.from(document.getElementsByClassName("resturant-img"));
let myBigBox2 = document.getElementById("menu-Pop2");
let close2 = document.getElementById("close2");
let myCurrent2 = 0;
for (let i = 0; i < myItems2.length; i++) {
    myItems2[i].addEventListener("click", function (e) {
        myBigBox2.style.display = "flex";
        let mySrc2 = e.target.src;
        myBigBox2.firstElementChild.style.backgroundImage = "url(" + mySrc2 + ")"
        myCurrent2 = myItems2.indexOf(e.target);
    })
}
function nextItem2() {
    myCurrent2++;
    if (myCurrent2 == myItems2.length) {
        myCurrent2 = 0;
    }
    myBigBox2.firstElementChild.style.backgroundImage = "url(" + myItems2[myCurrent2].src + ")"
}
document.addEventListener("keyup", function (e) {
    if (e.keyCode == 39) {
        nextItem2();
    } else if (e.keyCode == 37) {
        prevItem2();
    } else if (e.keyCode == 27) {
        closeItem2();
    }
});
function prevItem2() {
    myCurrent2--;
    if (myCurrent2 < 0) {
        myCurrent2 = myItems2.length - 1;
    }
    myBigBox2.firstElementChild.style.backgroundImage = "url(" + myItems2[myCurrent2].src + ")"
}
function closeItem2() {
    myBigBox2.style.display = "none"
}
next2.addEventListener("click", nextItem2);
prev2.addEventListener("click", prevItem2);
close2.addEventListener("click", closeItem2);