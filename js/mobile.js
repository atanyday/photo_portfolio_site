var isCollapsed = true;

$(document).ready(function(){
    $("#portfolio_link").click(function(){

        if (isCollapsed){
            $(".dropdown-portfolio").css('display', 'block');
            $(".dropdown-portfolio").animate( {height: '280px'}, 1000);
            isCollapsed = false;
        } else {
            $(".dropdown-portfolio").animate( {height: '0px'}, 1000, null, function(){
                $(".dropdown-portfolio").css('display', 'none');
            });
            isCollapsed = true;
        }
    });
});