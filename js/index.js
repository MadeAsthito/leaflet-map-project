function toggle_options(id) {
	if (id == "portfolio-btn") {
		let prev_btn = document.getElementById("skill-btn");
		let prev_content = document.getElementById("skills-content");
		prev_btn.classList.remove("active-btn");
		prev_content.classList.remove("active-option");

		let el_content = document.getElementById("portfolio-content");
		el_content.classList.add("active-option");
	} else {
		let prev_btn = document.getElementById("portfolio-btn");
		let prev_content = document.getElementById("portfolio-content");
		prev_btn.classList.remove("active-btn");
		prev_content.classList.remove("active-option");

		let el_content = document.getElementById("skills-content");
		el_content.classList.add("active-option");
	}

	let el_btn = document.getElementById(id);
	el_btn.classList.add("active-btn");
}
