class UI {
  constructor() {
    this.output = document.getElementById("output-area");
  }

  populateUI(data) {
    this.output.innerHTML = `
    <div class="card output p-3">
        <h3 class="card-title">${data.name}, ${data.sys.country}</h3>
        <p class="card-text  mb-1">Highs of ${data.main.temp_max}&#x2103 and lows of ${data.main.temp_min}&#x2103.</p>
        <p class="card-text ">Weather conditions are described as ${data.weather[0].description}.</p>
        <div class="text-center">
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather-icon">
        </div>  
    </div>
    `;
  }

  displayError(term) {
    this.output.innerHTML = `
    <div class="card output p-3 bg-danger">
        <h3 class="card-title">Input Not Recognised  <i class="em em-cry"> </i> <i class="em em-construction"></i></h3>
        <p class="card-text lead">Unfortunately <b>${term}</b> is not recognised, please check if the spelling is correct and try again.</p>
    </div>
    `;

    setTimeout(() => {
      this.output.innerHTML = "";
    }, 6000);
  }
}
