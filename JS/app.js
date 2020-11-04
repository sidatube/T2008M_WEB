var colors= ["orange","red","green","blue","pink","violet","violet"];
var i=0;
function click1(e){
    var box=document.getElementById("box");
    i++;
   box.style.backgroundColor = colors[i%6];
}
function hover1(e){
   // var box=document.getElementById("box");
    box.style.backgroundColor = "black";
}
function hover2(e){
   // var box=document.getElementById("box");
    box.style.backgroundColor = "pink";
}
// n: Number
// e: element
// s: string
// ar: array
// obj: object
// obj son:
// t: type
function key1(e){
    var v = e.value;
  //  console.log(v);
}
function key2(e){
    var v = e.value;
 //   console.log(v);
    var k= event.keyCode;
    if(k==13){
        console.log(v);
    }
    console.log(v);

}
function key3(e){
    var v = e.value;
   // console.log(v);
}
function cop1(e){
    console.log("copy")
}
function change1(e) {
    var v = e.value;
    console.log(v);
}