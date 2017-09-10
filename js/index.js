// ------------------------------------------------------------------------------------------------ FOLLOW LOCATION HASH
var currentUrl = null;
function gotoPage(param) {

    var newUrl = window.location.hash;

    //// hiding old
    //var sections = {
    //    "#plener":plener,
    //    "#studio":studio,
    //    "#report": report,
    //    "#world": world,
    //    "#things": things
    //};
    //
    //if (currentUrl == "#plener") {
    //    $(plener).slideUp(400);
    //} if (currentUrl == "#studio") {
    //    $(studio).slideUp();
    //} if (currentUrl == "#report") {
    //    $(report).slideUp();
    //} if (currentUrl == "#world") {
    //    $(world).slideUp();
    //} if (currentUrl == "#things") {
    //    $(things).slideUp();
    //}
    //

    // showing new
    if (newUrl == "#plener") {
        showOnly(portfolio_container, side_bar_elements);
        showOnlySlide(plener, portfolio_elements);
    } if (newUrl == "#studio") {
        showOnly(portfolio_container, side_bar_elements);
        showOnlySlide(studio, portfolio_elements);
    } if (newUrl == "#report") {
        showOnly(portfolio_container, side_bar_elements);
        showOnlySlide(report, portfolio_elements);
    } if (newUrl == "#world") {
        showOnly(portfolio_container, side_bar_elements);
        showOnlySlide(world, portfolio_elements);
    } if (newUrl == "#things") {
        showOnly(portfolio_container, side_bar_elements);
        showOnlySlide(things, portfolio_elements);
    }

    //currentUrl = newUrl;
    console.log(window.location.hash);

    //// hiding old
    //var sections = {
    //    "#plener": plener,
    //    "#studio": studio,
    //    "#report": report,
    //    "#world":  world,
    //    "#things": things
    //};
    ////
    ////$( sections[currentUrl] ).slideUp(400, null, function(){
    ////
    ////
    ////    // showing new
    ////    if (newUrl == "#plener") {
    ////        showOnly(portfolio_container, side_bar_elements);
    ////        showOnlySlide(plener, portfolio_elements);
    ////    } if (newUrl == "#studio") {
    ////        showOnly(portfolio_container, side_bar_elements);
    ////        showOnlySlide(studio, portfolio_elements);
    ////    } if (newUrl == "#report") {
    ////        showOnly(portfolio_container, side_bar_elements);
    ////        showOnlySlide(report, portfolio_elements);
    ////    } if (newUrl == "#world") {
    ////        showOnly(portfolio_container, side_bar_elements);
    ////        showOnlySlide(world, portfolio_elements);
    ////    } if (newUrl == "#things") {
    ////        showOnly(portfolio_container, side_bar_elements);
    ////        showOnlySlide(things, portfolio_elements);
    ////    }
    ////
    ////    console.log(window.location.hash);
    ////});
    //
    //
    //
    //$( portfolio_container ).slideUp(400, null, function() {
    //
    //    $ ( sections[currentUrl] ).hide();
    //    $ ( sections[newUrl] ).show();
    //
    //    $( portfolio_container ).slideDown();//, function() {
    //});
    //
}
// ---------------------------------------------------------------------------------------------- HIGHTLIGHT ACTIVE LINK
$(document).ready(function(){
    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});
// ---------------------------------------------------------------------------------------------------------- CONTAINERS
var portfolio_container = document.getElementById("portfolio_container");
var price_container = document.getElementById("price_container");
var contacts_container = document.getElementById("contacts_container");
var address_container = document.getElementById("address_container");

var side_bar_elements = [portfolio_container, price_container, contacts_container, address_container];

function showOnly(element_to_show, group){

    group.forEach(function(element_to_hide){
        if (element_to_hide != element_to_show){
            $(element_to_hide).hide();
        }
    });


    $(element_to_show).fadeIn(700);
}
function showOnlySlide(element_to_show, group){

    group.forEach(function(element_to_hide){
        if (element_to_hide != element_to_show){
            $(element_to_hide).hide();
        }
    });


    $(element_to_show).slideDown(400);
}

$("#portfolio_link").click(function(){
    showOnly(portfolio_container, side_bar_elements);
});
$("#price_link").click(function(){
    showOnly(price_container, side_bar_elements);
});
$("#contacts_link").click(function(){
    showOnly(contacts_container, side_bar_elements);
});
$("#address_link").click(function(){
    showOnly(address_container, side_bar_elements);
});

// ------------------------------------------------------------------------------------------------- PORTFOLIO ANIMATION
var plener = document.getElementById("plener");
var studio = document.getElementById("studio");
var report = document.getElementById("report");
var world = document.getElementById("world");
var things = document.getElementById("things");

var portfolio_elements = [plener, studio, report, world, things];

//$("#plener_link").click(function(){
//    showOnly(plener, portfolio_elements);
//});
//
//$("#studio_link").click(function(){
//    showOnly(studio, portfolio_elements);
//});
//$("#report_link").click(function(){
//    showOnly(report, portfolio_elements);
//});
//$("#world_link").click(function(){
//    showOnly(world, portfolio_elements);
//});
//$("#things_link").click(function(){
//  showOnly(things, portfolio_elements);
//});


// ------------------------------------------------------------------------------------------------ USE HASH OF THE PAGE

window.onhashchange = gotoPage;

$( document ).ready(function() {
    gotoPage(window.location.hash);
});
// ------------------------------------------------------------------------------------------------------------- GALLERY