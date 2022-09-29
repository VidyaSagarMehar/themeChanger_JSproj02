function myFunction() {
	var checkBox = document.getElementById("isCheck");
	var main = document.getElementById("main");
	if (checkBox.checked == true) {
		main.style.backgroundColor = "#242B2E";
		document.body.style.color = "#CAD5E2";
	} else {
		main.style.backgroundColor = "#CAD5E2";
		document.body.style.color = "#242B2E";
	}
}

// With event listner

// var checkBox = document.getElementById("isCheck");
// checkBox.addEventListener("click", myFunction);
// function myFunction() {
// 	var checkBox = document.getElementById("isCheck");
// 	var main = document.getElementById("main");
// 	if (checkBox.checked == true) {
// 		main.style.backgroundColor = "#242B2E";
// 		document.body.style.color = "#CAD5E2";
// 	} else {
// 		main.style.backgroundColor = "#CAD5E2";
// 		document.body.style.color = "#242B2E";
// 	}
// }
