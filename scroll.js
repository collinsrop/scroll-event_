"use strict";
document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("p").style.width="300px";
	document.querySelector("p").style.textAlign="center";
	window.addEventListener("scroll", () => {
		let scrolled=scrollY
		console.log(scrolled);
	});
});