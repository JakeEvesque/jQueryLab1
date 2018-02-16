let body = $(document.body);
let friends = ["Britain", "Rachel", "Doug", "Ryan", "Keith", "Jason", "Joseph", "Chris", "Mikeala", "Chloe"];
let colorList = ["red", "crimson", "yellow", "blue", "brown", "black", "orange", "pink", "silver", "gold"];

$().ready(function () {
    let div1 = addDiv(1);
    $("<button id='btn1'>click me!</button>").appendTo(div1);
    $("#btn1").click(function () {
        alert("I like that button, that's a nice button...");
    });

    let div2 = addDiv(2);
    $("<input type='text' id='text2'>").appendTo(div2);
    $("<button id='btn2'>You wrote what?</button>").appendTo(div2);
    $("#btn2").click(function (){
            alert($("#text2").val());
    });


    let div3 = addDiv(3);
    $(div3).mouseover(function () {
        $(div3).addClass("mouseOver")
    });
    
    $(div3).mouseout(function () {
        $(div3).removeClass("mouseOver")
    });
   
    let div4 = addDiv(4);
    $("<p>Some text.  blah blah blah</p>").appendTo(div4);

    $(div4).click(function () {
        let colorIndex = Math.floor(Math.random() * 10);
        let color = colorList[colorIndex];
        this.style = "color: " + color +  ";";
    });

    let div5 = addDiv(5);
    $("<button id='btn5'>click me</button>").appendTo(div5);
    $("<div id='div5a'></div>").appendTo(div5);
    $(div5a).style = "min-height: 5em; margin-top: 1em;";
    

    $("#btn5").click(function () {
        $("#div5a").html($("#div5a").html() + "Jake Evesque <br />");
    });

    let div6 = addDiv(6);
    $("<button id='btn6'>click me</button>").appendTo(div6);
    $("<ul id='ul6' style='min-height; 50px;'></ul>").appendTo(div6);

    $("#btn6").click(function () {
        for(let friend of friends){
            $("#ul6").append($("<li>" + friend + "</li>"));
            // $("<li>" + friend + "</li>").appendTo($("#ul6"));
        }                
    });
})

function addDiv(i){
    let title = "Objective " + i; 
    let divContent = "<h3>" + title + "</h3><hr/>";
    divContent += "<div class='contentDiv' id='divContent" + i + "'></div>";
    $("<div class='objectiveDiv' id=div" + i + "'>" + divContent + "</div>").appendTo(body);
    return $("#divContent" + i);
}
