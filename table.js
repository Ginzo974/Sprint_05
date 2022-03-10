async function render() {
  let reponse = await fetch("https://restcountries.com/v3.1/region/europe");
  let recup = await reponse.json();
  let afficher = "";
  for (let i in recup) {
    afficher += `
      <tr class = text-align>
        <td class = fw-bold>${recup[i].name.official}</td> <td class = "text-end">${recup[i].area}</td>
        <td class = "text-end">${recup[i].population}</td>
        <td>${recup[i].capital}</td>
      </tr>
    `;
    console.log(i);
    document.getElementById("tab").innerHTML = afficher;
  }
}
render();
