function calculateAge() {
  const ano = parseInt(document.getElementById("ano").value);
  const mes = parseInt(document.getElementById("mes").value);
  const dia = parseInt(document.getElementById("dia").value);

  if (dia > 31 || dia <= 0) {
    document.getElementById("errodia").textContent =
      "Digite do dia 1 até o dia 31";
  } else {
    document.getElementById("errodia").textContent = "";
  }
  if (mes > 12 || mes <= 0) {
    document.getElementById("erromes").textContent =
      "Digite do mes 1 até o mes 12";
  } else {
    document.getElementById("erromes").textContent = "";
  }
  if (ano < 1900 || ano > 2023) {
    document.getElementById("erroano").textContent =
      "Digite do ano 1900 até o ano 2023";
  } else {
    document.getElementById("erroano").textContent = "";
  }

  const dataDeHoje = new Date();
  const dataNiver = new Date(ano, mes - 1, dia);

  const idadeEmMs = dataDeHoje - dataNiver;
  const dataIdade = new Date(idadeEmMs);

  const anoS = dataIdade.getUTCFullYear() - 1970;
  const mesS = dataIdade.getUTCMonth();
  const diaS = dataIdade.getUTCDate() - 1;

  document.getElementById("anos").textContent = `${anoS} Anos`;
  document.getElementById("meses").textContent = `${mesS} Meses`;
  document.getElementById("dias").textContent = `${diaS} Dias`;
}

function resetarButton() {
  document.getElementById("dia").value = "";
  document.getElementById("mes").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("dias").textContent = "";
  document.getElementById("meses").textContent = "";
  document.getElementById("anos").textContent = "";
  document.getElementById("errodia").textContent = "";
  document.getElementById("erromes").textContent = "";
  document.getElementById("erroano").textContent = "";
}
