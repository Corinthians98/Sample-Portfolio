/*
	Student Name: Corinthians Herring
	File Name: script.js
	Date: 4/6/2024
*/

//Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
		menu.style.backgroundColor = "#7D91B3";
	}
}