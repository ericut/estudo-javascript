(async () => {
  let response = await axios.get("https://api.covid19api.com/summary");
  if (response.status === 200) {
    loadKPI(await response.data);
    loadBarChart(await response.data);
    loadPieChart(await response.data);
    // console.log(await response.data);
  }
})();

function loadKPI(json) {
  document.getElementById("confirmed").innerHTML = json.Global.TotalConfirmed.toLocaleString("PT");
  document.getElementById("death").innerHTML = json.Global.TotalDeaths.toLocaleString("PT");
  document.getElementById("recovered").innerHTML = json.Global.TotalRecovered.toLocaleString("PT");
  document.getElementById("date").innerHTML = json.Global.Date;
}

function loadBarChart(json) {
  let countriesSorted = _.orderBy(json.Countries, ["TotalDeaths", "Country"], ["desc", "asc"]);
  let countriesSlice = _.slice(countriesSorted, 0, 10);

  let contriesMapped = _.map(countriesSlice, "Country");
  let totalDeathsMapped = _.map(countriesSlice, "TotalDeaths");

  let bar = new Chart(document.getElementById("barras"), {
    type: "bar",
    data: {
      labels: contriesMapped,
      datasets: [
        {
          data: totalDeathsMapped,
          label: "Total de Mortes",
          backgroundColor: "#f38",
        },
      ],
    },
    options: {
      responsive: true,
      plugin: {
        legend: { position: "top" },
        title: { display: true },
      },
    },
  });
}

function loadPieChart(json) {
  let totalData = [json.Global.NewConfimed, json.Global.NewDeaths, json.Global.NewRecovered];

  let pizza = new Chart(document.getElementById("pizza"), {
    type: "pie",
    data: {
      labels: ["Confirmados", "Mortes", "Recuperados"],
      datasets: [
        {
          data: totalData,
          backgroundColor: ["#f38", "#d31", "#198"],
        },
      ],
    },
    options: {
      responsive: true,
      plugin: {
        legend: { position: "top" },
        title: { display: true },
      },
    },
  });
}
