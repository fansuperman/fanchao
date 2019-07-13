var ali = document.querySelectorAll("#boxT li");
var adiv = document.querySelectorAll("#txt div");
for(var i=0;i<ali.length;i++){
    ali[i].setAttribute("liyang",i);
    ali[i].onclick = function(){
        
        for(var j=0;j<ali.length;j++){
            ali[j].className = "";
            adiv[j].style.display = "none"
        }
        this.className = "active";
        var index = this.getAttribute("liyang");
        adiv[index].style.display = "block";
    }
}