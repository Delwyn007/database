function openForm() {
  if (document.getElementById("myForm").style.display === "none") {
    document.getElementById("myForm").style.display = "block";
  } else {
    document.getElementById("myForm").style.display = "none";
  }

}

function hideMyForm() {
  document.getElementById("myForm").style.display = "none";
}

function val() {
  if (a == "") {
    if (b == "") {
      alert("please enter a valid subject and a message " + a);
    }
  } else {
    alert("your subject is entered ");
  }
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  console.log(a);
  var user = JSON.parse(sessionStorage.getItem("user") || "[]");
  var mail = {
    sub: a,
    comp: b,
    read: false,
  };
  user.push(mail);
  sessionStorage.setItem("user", JSON.stringify(user));
var div1 = document.createElement("div");
div1.className+='wrapper'
var sub = document.createElement("p");
sub.className+="text"
var com = document.createElement("p");
var del = document.createElement("button");
var star = document.createElement("input");
star.type='checkbox';
star.className+="box1"
del.innerHTML='delete'
//var st = document.createElement("div");
// st.className+='side-bar'
// var butt1=document.createElement("button")
// butt1.className+='sidebar-Bin'
// st.appendChild(butt1)
div1.onmouseover= function(){
  var sub = div1.firstElementChild
  var butt= div1.childNodes[1];
  var box= div1.childNodes[2];
    butt.onclick=function(){
    sub.textContent="";
    butt.style.display="none";
    box.style.display="none";
    }
    box.onclick=function(){
      var on= document.querySelector(".sidebar-Bin");
     
    // var a=[];
     document.getElementById("sample").innerHTML=sub.textContent
     //a.push(sub.textContent);
      // sub.textContent;
           
    }
 // document.querySelector(".wrapper").style.display="none";
}
//var div2 = document.createElement("div");
var table=document.querySelector(".table");
sub.innerHTML = "Subject: " + a +  "   compose: "+b;
//com.innerHTML = "Compose: " + b;
div1.append(sub,del,star)
table.appendChild(div1)
document.getElementById("myForm").style.display="none";
//table.style.display=user.length===0?"none":"flex"
}
