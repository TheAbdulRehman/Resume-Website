document.addEventListener("DOMContentLoaded", function (event) {
	// Your code to run since DOM is loaded and ready

	let menuToggle = document.querySelector(".nav-toggler");
	let linksToggle = document.querySelector(".toggle-list-sm");
	let line = document.querySelector(".line");
	let lineB = document.querySelector(".line-2");
	let lineC = document.querySelector(".line-3");
	menuToggle.onclick = function () {
		line.classList.toggle("active");
		lineB.classList.toggle("rot");
		lineC.classList.toggle("none");
		linksToggle.classList.toggle("toggle-visibility");
	};

	// categories dropdown show/hide onCLick

	var targetDiv = document.querySelector(".category-dropdown");
	let myId = document.getElementById("myid");
	myId.onclick = function () {
		targetDiv.classList.toggle("display-block");
	};

	// var hideList = document.querySelectorAll(".category-list-item");

	// hideList.onclick = function () {
	// 	targetDiv.classList.remove("display-block");
	// };
	console.log("there");
	const hideList = document.querySelectorAll(".category-list-item");
	hideList.forEach((listItem) => {
		listItem.addEventListener("click", function handleClick(event) {
			event.preventDefault();
			targetDiv.classList.remove("display-block");
		});
	});
});
