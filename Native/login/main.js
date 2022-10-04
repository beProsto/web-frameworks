const $ = (q) => document.querySelector(q);


// localStorage.getItem("username");

const regButton = $(`#r-submit`);
regButton.onclick = () => {
	const usr = $(`#r-username`);
	const psw1 = $(`#r-password-1`);
	const psw2 = $(`#r-password-2`);

	if(
		psw1.value == psw2.value &&
		psw1.value != "" &&
		usr.value != ""
	) {
		let users = localStorage.getItem("users");
		if(!users) {
			localStorage.setItem("users", {});
		}
		users = localStorage.getItem("users");
		users[usr.value] = { nick: usr.value, pass: psw1.value };
		localStorage.setItem("users", users);
		console.log(users);
		usr.value = "";
	}
};

const loginButton = $(`#l-submit`);
loginButton.onclick = () => {

}