
function copys(copy){
    var cpy="";

    for (var i = 0; i < copy.length; i++) {
        cpy += "<div class=\"col-md-4\">\n" +
            "                    <p class=\"p1\"><b>"+copy[i].name+"</b></p>\n" +
            "                       <img src=\"" + copy[i].image + "\"/>\n" +
            "                    <p>$"+copy[i].price+"</p>\n" +
            "                </div>";
    }
    return cpy;
}

function lostdata(){
    var httpi = new XMLHttpRequest();
    httpi.onreadystatechange =function (){
        if( this.readyState ==4 && this.status ==200){
            var rs = this.responseText;
            rs= JSON.parse(rs);
            var ppppp=rs.data.foods;
            var co =document.getElementById("ban");
            co.innerHTML = copys(ppppp);
        }
    }
    httpi.open("GET","https://foodgroup.herokuapp.com/api/category/3");
    httpi.send();
}
lostdata();

