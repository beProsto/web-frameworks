const $ = (q) => document.querySelector(q);

const nick = $(`#username`);
nick.innerHTML = localStorage.getItem("username") || "Traveler";