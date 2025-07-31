# ⚙️ Verificador de Pacientes por Dieta com Contrato Ativo

Este projeto automatiza o processo de verificação de quais pacientes possuem dietas prescritas que constam como **contratadas**. A automação foi desenvolvida utilizando **Google Planilhas** e **Google Apps Script** com base em dados reais de contexto administrativo da saúde pública.

## 🧩 Funcionalidades

- 🔎 Percorre uma base de pacientes e dietas prescritas
- 🧠 Cruza os nomes simplificados das dietas com os dados de contrato
- 📄 Gera automaticamente uma aba com os pares: **[DIETA] - [PACIENTE]**
- 🧽 Remove a necessidade de consultas manuais em planilhas extensas

## 📂 Estrutura dos Arquivos

| Arquivo | Descrição |
|--------|----------|
| `planilha-modelo.xlsx` | Planilha fictícia contendo a aba `BASE` (pacientes) e `DietaContrato` |
| `gerarPacientesPorDieta.gs` | Script que realiza toda a automação e exportação dos dados |
| `README.md` | Esta documentação do projeto |

## 🚀 Como Usar

1. Faça uma cópia da `planilha-modelo.xlsx` no Google Drive
2. Acesse o menu **Extensões → Apps Script**
3. Cole o código do arquivo `gerarPacientesPorDieta.gs`
4. Clique em **Salvar** e execute a função `gerarPacientesPorDieta()`
5. O sistema irá gerar automaticamente uma nova aba chamada `PACIENTES_POR_DIETA` contendo:

