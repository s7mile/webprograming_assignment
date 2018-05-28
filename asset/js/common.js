function mainVisual(){
	if(document.getElementById("firstVisual").className.match(/\bon\b/)){
		document.getElementById("firstVisual").style.display = "none";
		document.getElementById("firstVisual").classList.remove("on");
		document.getElementById("mainvisual").style.backgroundColor = "#ed9fa2"
	}else{
		document.getElementById("firstVisual").style.display = "block";
		document.getElementById("firstVisual").classList.add("on");
		document.getElementById("mainvisual").style.backgroundColor = "#01bc78"
	}
}

function overColor1(){
	document.getElementById("sec2_1").style.borderColor = "#01bc78";
	document.getElementById("sec2_1").style.fontWeight = "bold";
}
function overColor2(){
	document.getElementById("sec2_2").style.borderColor = "#01bc78";
	document.getElementById("sec2_2").style.fontWeight = "bold";
}
function overColor3(){
	document.getElementById("sec2_3").style.borderColor = "#01bc78";
	document.getElementById("sec2_3").style.fontWeight = "bold";
}
function overColor4(){
	document.getElementById("sec2_4").style.borderColor = "#01bc78";
	document.getElementById("sec2_4").style.fontWeight = "bold";
}

function outColor1(){
	document.getElementById("sec2_1").style.borderColor = "#aaa";
	document.getElementById("sec2_1").style.fontWeight = "normal";
}
function outColor2(){
	document.getElementById("sec2_2").style.borderColor = "#aaa";
	document.getElementById("sec2_2").style.fontWeight = "normal";
}
function outColor3(){
	document.getElementById("sec2_3").style.borderColor = "#aaa";
	document.getElementById("sec2_3").style.fontWeight = "normal";
}
function outColor4(){
	document.getElementById("sec2_4").style.borderColor = "#aaa";
	document.getElementById("sec2_4").style.fontWeight = "normal";
}

function loginForm(){
	if(fr.userid.value == "") {
		alert("아이디를 입력해 주세요.");
		fr.userid.focus();
		return false;

	}else if(fr.userpw.value == ""){
		alert("비밀번호를 입력해 주세요.");
		fr.userpw.focus();
		return false;
	}else return true;
}