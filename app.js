// DOM
const userInput = document.getElementById("user-input");
const userSubmit = document.getElementById("userSubmit");

// Class Objects
const ui = new UI();
const weather = new Weather();

// Event Listener
userSubmit.addEventListener("click", (e) => {
  const input = userInput.value;

  weather.searchLocation(input).then((data) => {
    if (data.cod === "404") {
      ui.displayError(input);
    } else {
      ui.populateUI(data);
    }
  });
  userInput.value = "";
});
