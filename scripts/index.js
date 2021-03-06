const topicList = document.querySelector(".topics");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const setupUI = (user) => {
	if (user) {
		// toggle UI elements
		loggedInLinks.forEach((item) => (item.style.display = "block"));
		loggedOutLinks.forEach((item) => (item.style.display = "none"));
	} else {
		loggedInLinks.forEach((item) => (item.style.display = "none"));
		loggedOutLinks.forEach((item) => (item.style.display = "block"));
	}
};

//setup topics
const setupTopics = (data) => {
	if (data.length) {
		let html = "";
		data.forEach((doc) => {
			const topic = doc.data();
			const li = `
		<li>
			<div class="collapsible-header grey lighten-4">${topic.title}</div>
			<div class="collapsible-body white">${topic.content}</div>	
		</li>
		`;
			html += li;
		});

		topicList.innerHTML = html;
	} else {
		topicList.innerHTML = `<h5 class="center">Login to view all available topics!</h5>`;
	}
};

// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
	var modals = document.querySelectorAll(".modal");
	M.Modal.init(modals);

	var items = document.querySelectorAll(".collapsible");
	M.Collapsible.init(items);
});
