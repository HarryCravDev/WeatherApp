class Weather {
  constructor() {
    this.apiKey = "b05d83826e881266eacafb6509c0877d";
  }

  async searchLocation(input) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${this.apiKey}`
    );
    const data = await res.json();

    return data;
  }
}
