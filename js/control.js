console.log("pitp")

function header(){
    console.log("hogepiyo")
    $.ajax({
        url: "../header.html",
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            document.write(html);
        }
    });
}