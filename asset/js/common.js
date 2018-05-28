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
	}else{
		alert("환영합니다~");
		return false;
	}
}

function nowTime(){
	setInterval(function(){
		var d = new Date();
		var hours = '', min = '', sec = '';

		hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
		min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
		sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();

		console.log(hours);
		console.log(min);
		console.log(sec);
		document.getElementById("nowTime").innerHTML=hours + ":" + min + ":" + sec;
	}, 1000);
}

function eventListFunc(){
	var html = '';
	var listObj = {
		title: "커피짱~ 이벤트 공지(마감)",
		link: "view.html",
		period: "2018-05-01~2018-05-08",
		winnerDate: "2018-05-09"
	}

	for(var i=0; i<5; i++)
		html += "<tr><td><a href='"+listObj.link+"'>"+listObj.title+"</a></td><td>이벤트 기간 : "+listObj.period+"<br>당첨자 발표 : "+listObj.winnerDate+"</td></tr>";
	
	document.getElementById("eventList").innerHTML=html
}



