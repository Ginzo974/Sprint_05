// fetch("https://restcountries.com/v3.1/region/europe")
//   .then((res) => res.json())
//   .then((resp2) => console.log(resp2));
async function render() {
  try {
    let cons = await fetch("https://restcountries.com/v3.1/region/europe");
    if (cons.ok) {
      let rep = await cons.json();
      let apparition = "";
      for (let i in rep) {
        apparition += `<li>${rep[i].name.official}</li>`;
      }
      let btn = document.createElement("button");
      let text = document.createTextNode("refresh");
      btn.appendChild(text);
      document.getElementById("rafri").textContent = "";
      document.getElementById("rafri").appendChild(btn);
      btn.addEventListener("click", function () {
        render();
      });
      document.getElementById("li").innerHTML = apparition;
      console.log("ça marche comme sur des roulettes :D");
    }
  } catch (e) {
    console.error(e);
    let btn = document.createElement("button");
    let text = document.createTextNode("refresh");
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
