var portfolio_container = document.getElementById("portfolio_container");
var price_container = document.getElementById("price_container");
var contacts_container = document.getElementById("contacts_container");
var address_container = document.getElementById("address_container");


$("#portfolio_link").click(function(){
    $(portfolio_container).show(500);
    $(price_container).hide();
    $(contacts_container).hide();
    $(address_container).hide();
});
$("#price_link").click(function(){
    $(portfolio_container).hide();
    $(price_container).show(500);
    $(contacts_container).hide();
    $(address_container).hide();
});
$("#contacts_link").click(function(){
    $(portfolio_container).hide();
    $(price_container).hide();
    $(contacts_container).show(500);
    $(address_container).hide();
});
$("#address_link").click(function(){
    $(portfolio_container).hide();
    $(price_container).hide();
    $(contacts_container).hide();
    $(address_container).show(500);
});



// ------------------------------------------------------------------------------------------------- PORTFOLIO ANIMATION
var plener = document.getElementById("plener");
var studio = document.getElementById("studio");
var report = document.getElementById("report");
var world = document.getElementById("world");
var things = document.getElementById("things");

$("#plener_link").click(function(){
    $(plener).show(500);
    $(studio).hide();
    $(report).hide();
    $(world).hide();
    $(things).hide();

    //$(studio).animate({opacity: 0}, 1000, ease, null);
    //$(plener).animate({opacity: 1}, 1000, ease, null);
});

$("#studio_link").click(function(){
    $(plener).hide();
    $(studio).show(500);
    $(report).hide();
    $(world).hide();
    $(things).hide();

    //$(plener).animate({opacity: 0}, 1000, ease, function(){
    //    $(plener).hide();
    //});
    //$(studio).animate({opacity: 1}, 1000, ease, null);
});
$("#report_link").click(function(){
    $(studio).hide();
    $(plener).hide();
    $(report).show(500);
    $(world).hide();
    $(things).hide();
});
$("#world_link").click(function(){
    $(studio).hide();
    $(plener).hide();
    $(report).hide();
    $(world).show(500);
    $(things).hide();
});
$("#things_link").click(function(){
    $(studio).hide();
    $(plener).hide();
    $(report).hide();
    $(world).hide();
    $(things).show(500);
});

// ---------------------------------------------------------------------------------------------------------------------


