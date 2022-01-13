const sections = document.querySelectorAll("section");

navLink = document.querySelectorAll(".nav-link");

window.onscroll = () => {
	let current = "hero";
	// console.log(scrollY)

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (scrollY >= sectionTop - 100) {
			if (section.getAttribute("id") !== null) {
				current = section.getAttribute("id");
			}
		}
	});
	navLink.forEach((li) => {
		li.classList.remove("active");
		if (li.classList.contains(current)) {
			li.classList.add("active");
		}
	});
	console.log(current);
};

function sendMesssage() {
	console.log("This is the massage");
}
