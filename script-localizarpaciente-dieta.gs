function gerarPacientesPorDieta() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const abaBase = ss.getSheetByName("BASE");
  const abaContrato = ss.getSheetByName("DietaContrato");

  const dadosBase = abaBase.getDataRange().getValues();
  const dadosContrato = abaContrato.getDataRange().getValues();

  // mapea as dietas com o nome simplificado na col c
  const dietasComContrato = new Map();
  for (let i = 1; i < dadosContrato.length; i++) {
    const cod = dadosContrato[i][0];
    const nomeSimplificado = (dadosContrato[i][2] || "").toString().toLowerCase().trim();
    if (nomeSimplificado) {
      dietasComContrato.set(nomeSimplificado, cod + " - " + (dadosContrato[i][1] || ""));
    }
  }

  const resultados = [["DIETA", "PACIENTE"]];
  for (let i = 1; i < dadosBase.length; i++) {  // começa na linha 2 pq tem cabecalho
    const nomePaciente = dadosBase[i][1];       // Coluna B = AUTOR
    for (let j = 9; j <= 23; j++) {              // J É A COLUNA 9 E 23 A COLUNA X
      const dietaInformada = (dadosBase[i][j] || "").toString().toLowerCase().trim();
      if (dietasComContrato.has(dietaInformada)) {
        resultados.push([dietasComContrato.get(dietaInformada), nomePaciente]);
      }
    }
  }

  // Criar ou limpar a aba de saída
  let abaResultado = ss.getSheetByName("PACIENTES_POR_DIETA");
  if (!abaResultado) {
    abaResultado = ss.insertSheet("PACIENTES_POR_DIETA");
  } else {
    abaResultado.clearContents();
  }

  abaResultado.getRange(1, 1, resultados.length, 2).setValues(resultados);
  SpreadsheetApp.flush();
}
