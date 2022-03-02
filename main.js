// fetch("https://restcountries.com/v3.1/region/europe")
//   .then((res) => res.json())
//   .then((resp2) => console.log(resp2));
async function render() {
  let cons = await fetch("https://restcountries.com/v3.1/region/europe");
  let rep = await cons.json();
  let apparition = "";
  for (let i in rep) {
    apparition += `<li>${rep[i].name.official}</li>`;
    document.getElementById("li").innerHTML = apparition;
  }
}

render();
