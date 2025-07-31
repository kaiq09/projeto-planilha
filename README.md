# ⚙️ Verificador de Dietas com Contrato Ativo

Este projeto automatiza a verificação de dietas disponíveis com contrato ativo para um paciente específico. Utiliza **Google Planilhas** e **Google Apps Script** para consultar a base de dietas judicializadas e gerar automaticamente uma **lista de compras** baseada na disponibilidade contratual.

## 🧩 Funcionalidades

- 🔍 Verifica se há dietas com contrato ativo compatíveis com a prescrição do paciente
- 📋 Retorna automaticamente:
  - Nome da dieta disponível
  - Código do item
  - Nome do paciente
- 🗂️ Gera uma **aba separada** com a lista consolidada de compras
- 🧼 Usa uma coluna de nomes simplificados para facilitar o cruzamento de dados

## 📂 Estrutura dos Arquivos

| Arquivo | Descrição |
|--------|----------|
| `planilha-modelo.xlsx` | Modelo fictício com estrutura real: nome do paciente, dietas e contratos |
| `verificador-dietas.gs` | Script que automatiza a consulta e geração da aba de compras |
| `README.md` | Esta documentação |

## 🚀 Como Usar

1. Faça uma cópia da `planilha-modelo.xlsx` no seu Google Drive
2. Acesse **Extensões → Apps Script**
3. Cole o código contido em `verificador-dietas.gs`
4. Salve e execute a função principal (`verificarDietasComContrato()`)
5. O sistema gerará automaticamente uma aba chamada **"Resultado - Compras"** com:
   - Nome do paciente
   - Nome da dieta disponível
   - Código do item a ser comprado

## 📘 Exemplo de Caso de Uso

- Paciente: **José da Silva**
- Script identifica que para José, a dieta prescrição "Isosource Junior" tem contrato ativo
- Resultado gerado:
