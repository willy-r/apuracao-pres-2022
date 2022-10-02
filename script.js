const $table = document.getElementById("tabela");

const URL =
  "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json";

async function getAndSetData() {
  const r = await fetch(URL);
  const data = await r.json();
  let result = "";
  data.cand.forEach((cand, index) => {
    result += `
      <tr id="${index}">
        <td>${cand.nm}</td>
        <td>${cand.cc.slice(0, 20)}...</td>
        <td>${new Intl.NumberFormat().format(cand.vap)}</td>
        <td>${cand.pvap}%</td>
      </tr
    `;
  });
  $table.innerHTML = `
    <tr>
      <th>Candidato</th>
      <th>Partido</th>
      <th>Nº de Votos</th>
      <th>Porcentagem</th>
    </tr>
  `;
  $table.innerHTML += result;
}

getAndSetData();
setInterval(getAndSetData, 10000);
