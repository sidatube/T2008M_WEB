var data = {
    categories: [
        {
            name: "Vegetables"
        },
        {
            name: "Fresh fruit"
        },
        {
            name: "Vegetables"
        },
        {
            name: "Fresh fruit"
        },
        {
            name: "Vegetables"
        },
        {
            name: "Fresh fruit"
        }
    ],
    brands:[
        {
            name: "Green life",
            sst:"2"
        },
        {
            name: "Organic life",
            sst:"3"

        },
        {
            name: "Green life",
            sst:"4"

        },
        {
            name: "Organic life",
            sst:"5"

        },
        {
            name: "Green life",
            sst:"6"

        },
        {
            name: "Organic life",
            sst:"7"

        }
    ],
    products: [
        {
            name:"Flying Ninja",
            image:"anhbt/product.jpg",
            price: 12,
            star:3.5
        },
        {
            name:"Flying Ninja",
            image:"anhbt/product.jpg",
            price: 12,
            star:4.5
        },
        {
            name:"Flying Ninja",
            image:"anhbt/product.jpg",
            price: 12,
            star:0.5
        },
        {
            name:"Flying Ninja",
            image:"anhbt/product.jpg",
            price: 12,
            star:1.5
        },
        {
            name:"Flying Ninja",
            image:"anhbt/product.jpg",
            price: 12,
            star:3
        },
        {
            name:"Flying Ninja",
            image:"anhbt/product.jpg",
            price: 12,
            star:4
        },
        {
            name:"Flying Ninja",
            image:"anhbt/product.jpg",
            price: 12,
            star:5
        },
        {
            name:"Flying Ninja",
            image:"anhbt/product.jpg",
            price: 12,
            star:3.5
        },
        {
            name:"Flying Ninja",
            image:"anhbt/product.jpg",
            price: 12,
            star:3.5
        },
        {
            name:"Flying Ninja",
            image:"anhbt/product.jpg",
            price: 12,
            star:3.5
        }
    ]
}
function cats(){
    var cat="";
    for(var i=0;i<data.brands.length;i++){
        cat+="<li>"+data.brands[i].name+"</li>"
    }
    return cat;
}
function  brand(){
    var brand="";
    for (var i=0;i<data.brands.length;i++){
        brand+="<li><input name=\"s"+data.brands[i].sst+"\" value=\"s_"+data.brands[i].sst+"\" type=\"checkbox\"/>"+data.brands[i].name+"</li>"
    }
    return brand;
}
function item(){
    var g_html = "";
    for (var i = 0; i < data.products.length; i++) {
        g_html += "<div class=\"col-md-4\">\n" +
            "                    <div class=\"item text-center\">\n" +
            "                        <img class=\"product-image\" src=\"" + data.products[i].image + "\"/>\n" +
            "                        <h2 class=\"product-name\">" + data.products[i].name + "</h2>\n" +
            "                        <div class=\"star\">\n" +
            "                            <div class=\"star-box\">\n" +
            "                                <div class=\"star-rate\" style=\"width: " + (data.products[i].star / 5 * 100) + "%\"></div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <p class=\"price\">$" + data.products[i].price + "</p>\n" +
            "                        <a href=\"#\" class=\"add-to-cart text-uppercase\">Add To Cart</a>\n" +
            "                    </div>\n" +
            "                </div>";
    }

    return g_html;
}

document.getElementById("cats").innerHTML= cats();
document.getElementById("brands").innerHTML= brand();
document.getElementById("test").innerHTML= item();
