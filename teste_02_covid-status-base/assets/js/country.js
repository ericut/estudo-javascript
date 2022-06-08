document.getElementById("filtro").addEventListener("click", handlerFilter);

let data_type = {
  Confirmed: "Confirmados",
  Deaths: "Mortes",
  Recovered: "Recuperados",
};

let line;

!(async () => {
  let response = await Promise.allSettled([
    axios.get("https://api.covid19api.com/countries"),
    axios.get(
      `https://api.covid19api.com/country/Brazil?from=${new Date(2021, 04, 10, -3, 0, 0).toISOString()}&to=${new Date(
        2021,
        04,
        25,
        -3,
        0,
        0
      ).toISOString()}`
    ),
    axios.get(
      `https://api.covid19api.com/country/Brazil?from=${new Date(2021, 04, 09, -3, 0, 0).toISOString()}&to=${new Date(
        2021,
        04,
        24,
        -3,
        0,
        0
      ).toISOString()}`
    ),
  ]);

  if (response[0].status === "fulfilled") {
    loadComboCountries(_.orderBy(response[0].value.data, "Country", "asc"));
  }
  if (response[1].status === "fulfilled" && response[2].status === "fulfilled") {
    loadKPI(response[1].value.data);
    loadLineChart(response[1].value.data, response[2].value.data, document.getElementById("cmbData").value);
  }
})();

function loadComboCountries(json) {
  let combo = document.getElementById("cmbCountry");

  for (index in json) {
    combo.options[combo.options.length] = new Option(
      json[index].Country,
      json[index].Slug,
      json[index] === "Brazil",
      json[index] === "Brazil"
    );
  }
}

function loadKPI(json) {
  document.getElementById("kpiconfirmed").innerHTML = _.last(json).Confirmed.toLocaleString("PT");
  document.getElementById("kpideaths").innerHTML = _.last(json).Deaths.toLocaleString("PT");
  document.getElementById("kpirecovered").innerHTML = _.last(json).Recovered.toLocaleString("PT");
}

function loadLineChart(json, jsonDelta, dataType) {
  let dates = _.map(json, "Date");
  let values = _.map(json, dataType);
  let valuesDelta = _.map(jsonDelta, dataType);

  values = _.forEach(values, (x, index) => {
    values[index] = values[index] - valuesDelta[index];
  });

  let avg = _.times(values.length, _.constant(_.mean(values)));

  line = new Chart(document.getElementById("linhas"), {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          data: values,
          label: `Numero de ${data_type[dataType]}`,
          backgroundColor: ["#f38"],
        },
        {
          data: avg,
          label: `Média de ${data_type[dataType]}`,
          backgroundColor: ["#198"],
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

async function handlerFilter() {
  let country = document.getElementById("cmbCountry").value;
  let startDate = new Date(document.getElementById("date_start").value);
  let endDate = new Date(document.getElementById("date_end").value);

  startDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1, -3, 0, 0, 0);
  endDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() + 1, -3, 0, 1, 0);

  let startDateDelta = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), -3, 0, 0, 0);
  let endDateDelta = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), -3, 0, 1, 0);

  let response = await Promise.allSettled([
    axios.get(`https://api.covid19api.com/country/${country}?from=${startDate.toISOString()}&to=${endDate.toISOString()}`),
    axios.get(`https://api.covid19api.com/country/${country}?from=${startDateDelta.toISOString()}&to=${endDateDelta.toISOString()}`),
  ]);

  if (response[0].status === "fulfilled" && response[1].status === "fulfilled") {
    line.destroy();
    loadKPI(response[0].value.data);
    loadLineChart(response[0].value.data, response[1].value.data, document.getElementById("cmbData").value);
  }
}
