
document.getElementsByTagName("insertBar")[0].innerHTML='<div id="bar" class="ba" onmouseenter="hideItems(false)" onmouseleave="hideItems(true)"><div class="fog"><div id="imgCon"><img class="imglogo" src="https://www.freeiconspng.com/uploads/3d-cube-logo-15.png"></div><div class="line home"><a href="index.html" class="menuItem">Home<div class="under" id="home_under"></div></a></div><div class="line dash"><a href="Dashboard.html" class="menuItem">Dashboard<div class="under" id="dash_under"></div></a></div><div class="line time"><a href="tutorials.html" class="menuItem">Tutorials<div class="under" id="time_under"></div></a></div></div></div>';
document.getElementsByTagName("insertD-L")[0].innerHTML='<div onclick="toggleDark()" class = "outterContainLD toggleDark" > <div class="backLD toggleDark"> <div class="lightSide side toggleDark"> </div>  <div class="darkSide side toggleDark"> </div></div> </div>';

/*
<div id="bar" class="ba" onmouseenter="hideItems(false)" onmouseleave="hideItems(true)">
    <div class="fog">
        <div id="imgCon"><img class="imglogo" src="https://www.freeiconspng.com/uploads/3d-cube-logo-15.png"></div>
        <div class="line home">
            <a href="index.html" class="menuItem">Home  
                <div class="under" id="home_under"></div>
            </a>
        </div>
        <div class="line dash">
            <a href="Dashboard.html" class="menuItem">Dashboard 
                <div class="under" id="dash_under"></div>
            </a>
        </div>
        <div class="line time">
            <a href="tutorials.html" class="menuItem">Tutorials 
                <div class="under" id="time_under"></div>
            </a>
        </div>
    </div>
</div>
*/
function toggleDark(dark){
    elementsDarks = document.getElementsByClassName("toggleDark");
    for(let i=0;i<elementsDarks.length;i++){
        elementsDarks[i].classList.toggle("dark");
    }
}
function hideItems(toggle){
    items = document.getElementsByClassName("menuItem")
    imgCon = document.getElementById("imgCon")
    if(toggle){
        imgCon.style.transitionDuration = "0.2s"
        for(let i=0;i<items.length;i++){
            items[i].style.transitionDuration = "0s"// by upateing it it cancels the animation 
        }
    }else{
        imgCon.style.setProperty('transition-duration','');
        for(let i=0;i<items.length;i++){
            items[i].style.setProperty('transition-duration','');
        }
    }
}