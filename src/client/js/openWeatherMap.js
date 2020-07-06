async function melbourneWeather() {
  const getData = await fetch('http://localhost:8081/owmMelbourne');
  const weather = await getData.json();
  document.getElementById("feelings").value = JSON.stringify(weather);
}

export { melbourneWeather };
