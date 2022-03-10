async function render() {
  try {
    let reponse = await fetch("https://restcountries.com/v3.1/region/europe");
    if (reponse.ok) {
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
      }
      let btn = document.createElement("button");
      let text = document.createTextNode("refresh table");
      btn.appendChild(text);
      document.getElementById("rafri").textContent = "";
      document.getElementById("rafri").appendChild(btn);
      btn.addEventListener("click", function () {
        render();
      });
      document.getElementById("tab").innerHTML = afficher;
      console.log("ça marche comme sur des roulettes :D");
    }
  } catch (e) {
    console.error(e);
    console.log("dans l'erreur");
    let btn = document.createElement("button");
    let text = document.createTextNode("refresh table");
    btn.appendChild(text);
    document.getElementById("rafri").textContent = "";
    document.getElementById("rafri").appendChild(btn);
    btn.addEventListener("click", function () {
      render();
    });
    console.log("ça marche plus x(");
  }
}
render();
