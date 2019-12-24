
function checkLogin(){

    var username = $(".email").val();
    var password = $(".password").val();


    if (username == "comp" && password == "comp" || username == "user" && password == "user" || username == "rep" && password == "rep") {
        
        if (username == "comp") {
            $(location).attr('href', 'dashboard/comp/landing/index.html')
        }
        if (username == "rep") {
            // $(location).attr('href', 'dashboard/rep/index.html')
            alert("please log on with 'comp' account");
        }
        if (username == "user") {
            // $(location).attr('href', 'dashboard/user/index.html')
            alert("please log on with 'comp' account");
        }

    }else{
        alert("incorrect password");
    }

}