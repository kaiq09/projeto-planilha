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


## 🗂️ Organização esperada das abas

- **Aba BASE:**
  - Coluna B: Nome do paciente
  - Colunas I até X (colunas 9 a 23): Dietas prescritas
- **Aba DietaContrato:**
  - Coluna A: Código da dieta
  - Coluna B: Nome completo da dieta (comercial)
  - Coluna C: Nome simplificado da dieta (em letras minúsculas, sem acentos)

## ✅ Benefícios

- ⏱️ Agilidade na preparação de processos de compra
- ✅ Maior segurança no cruzamento de dados
- 💬 Fácil adaptação para diferentes contextos (estoques, fraldas, medicamentos)

## 👨‍💻 Autor

**Kaique Cardoso de Souza**  
Analista Administrativo — Judicialização da Saúde  
Estudante de Análise e Desenvolvimento de Sistemas  
📧 kaiquecardoso360@gmail.com

## 📅 Versão

Julho de 2025 — v1.0

## 📄 Licença

Este projeto está sob a licença MIT.
