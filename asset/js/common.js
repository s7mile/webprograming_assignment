function mainVisual(){
	if(document.getElementById("firstVisual").className.match(/\bon\b/)){
		document.getElementById("firstVisual").style.display = "none";
		document.getElementById("firstVisual").classList.remove("on");
	}else{
		document.getElementById("firstVisual").style.display = "block";
		document.getElementById("firstVisual").classList.add("on");
	}
}