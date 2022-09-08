const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
const API_KEY = "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H";
// $(document).ready(function () {
//   $("#nav-burger").click(function () {
//     $(this).toggleClass("open");
//   });
// });

// document.ready(function () {
//   "#nav-burger".click(function () {
//     $(this).toggleClass("open");
//   });
// });

const submitButton = document.querySelector(".contact-us-form");

submitButton.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(submitButton);

  const data = Object.fromEntries(formData);

  const body = { item: data };

  const fetchParams = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify(body),
  };

  fetch(url, fetchParams)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      console.log("hello");
    });
});
