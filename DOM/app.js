let body = document.getElementsByTagName("body")[0];
let friends = ["Britain", "Rachel", "Doug", "Ryan", "Keith", "Jason", "Joseph", "Chris", "Mikeala", "Chloe"];
let colorList = ["red", "crimson", "yellow", "blue", "brown", "black", "orange", "pink", "silver", "gold"];

document.addEventListener("DOMContentLoaded", function () {
    let div1 = addDiv(1);
    let btn1 = document.createElement('button');
    btn1.innerText = "click me!";
    div1.appendChild(btn1);
    btn1.addEventListener("click", function (){
        alert("I like that button, that's a nice button...");
    });

    let div2 = addDiv(2);
    let btn2 = document.createElement('button');
    let text2 = document.createElement('input');
    text2.id = "text2";
    div2.appendChild(text2);
    btn2.innerText = "You wrote what?";    
    div2.appendChild(btn2);
    btn2.addEventListener("click", function () {
        let input = document.getElementById("text2");
        alert(input.value);
    });

    let div3 = addDiv(3);
    div3.addEventListener("mouseover", function () {
        this.className = "mouseOver";
    });

    div3.addEventListener("mouseout", function () {
        this.className = "";
    });

    let div4 = addDiv(4);
    let p4 = document.createElement('p');
    p4.textContent = "text4";
    div4.appendChild(p4);    

    p4.addEventListener("click", function () {
        let colorIndex = Math.floor(Math.random() * 10);
        let color = colorList[colorIndex];
        this.style = "color: " + color +  ";";
    });

    let div5 = addDiv(5);
    let btn5 = document.createElement('button');
    btn5.innerText = "click me";    
    div5.appendChild(btn5);
    let div5a = document.createElement('div');
    div5a.id = "div5a";
    div5a.style = "min-height: 5em; margin-top: 1em;";
    div5.appendChild(div5a);

    btn5.addEventListener("click", function () {
        let div = document.getElementById("div5a");
        div.innerHTML += "Jake Evesque <br/>";
    });


    let div6 = addDiv(6);
    let btn6 = document.createElement('button');
    btn6.innerText = "click me";    
    div6.appendChild(btn6);

    var ul6 = document.createElement("ul");
    ul6.style = "border-style: solid; min-height: 50px;";
    ul6.id = "ul6";

    div6.appendChild(ul6);     

    btn6.addEventListener("click", function () {
        let ul = document.getElementById("ul6");
        for(let friend of friends){
            let li = document.createElement("li");
            let tn = document.createTextNode(friend);
            li.appendChild(tn);
            ul.appendChild(li);
        }                
    });
})

function addDiv(i){
    let div = document.createElement("div");
    div.id="div" + i;
    let title = "Objective " + i; 
    div.innerHTML = "<h3>" + title + "</h3><hr/>";
    div.style = "border-style: solid; padding-bottom: 1em; margin-bottom: 1em;";
    let divName = "divContent" + i;
    let div2 = document.createElement("div");
    div2.id = "divName" + i;
    div.appendChild(div2);
    body.appendChild(div)    
    return div;
}
