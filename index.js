const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
const API_KEY = "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H";

const subscribeButton = document.querySelector(".subscribe");

subscribeButton.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(subscribeButton);

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
