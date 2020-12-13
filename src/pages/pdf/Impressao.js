import logo from '../../images/prescrimedLogo2.png';


export class Impressao {

  constructor(dadosParaImpressao, paciente) {
    this.dadosParaImpressao = dadosParaImpressao;
    this.paciente = paciente;
  }  
  
  async PreparaDocumento() {
    const corpoDocumento = this.CriaCorpoDocumento();
    const documento = this.GerarDocumento(corpoDocumento);
    return documento;
  }

  CriaCorpoDocumento() {    
    const paciente = this.paciente;    

    const header = [        
      { text: `Nome do Paciente: ${paciente[0].Nome}`,
        bold: true, 
        fontSize: 9, 
        margin: [0, 70, 0, 0],
      },
      { text: `Idade: ${paciente[0].Idade}`,
      bold: true, 
      fontSize: 9, 
      margin: [0, 70, 0, 0],},
      { text: `Peso: ${paciente[0].Peso}`,
      bold: true, 
      fontSize: 9, 
      margin: [0, 70, 0, 0],},
      { text: `Altura: ${paciente[0].Altura}`,
      bold: true, 
      fontSize: 9, 
      margin: [0, 70, 0, 0],},
    ];    

    const body = this.dadosParaImpressao.map((medication) => {
      return [
        { 
          text:` ${medication.Nome} (${medication.Via})`,
          fontSize: 10,
          margin: [0, 10, 0, 0],
         },
        { text: `Posologia: ${medication.Posologia}`, 
          fontSize: 10,
          margin: [0, 10, 0, 0],
        },
        {},
        {},
      ];
    });

    const lineHeader = [
      {
        text:
          '_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
        alignment: 'center',
        fontSize: 5,
        colSpan: 4,
      },
      {},
      {},
      {},
    ];

    let content = [header, lineHeader];
    content = [...content, ...body];
    return content;
  }

  GerarDocumento(corpoDocumento) {
    const now = new Date(); 
    const monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    const month = monName[now.getMonth()]

    const documento = {
      pageSize: 'A4',
      pageMargins: [14, 53, 14, 48],
      header: function () {
        return {          
            margin: [14, 30, 14, 0],
            layout: 'noBorders',
            table: {
              widths: ['*'],
              body: [                             
                [
                  // { text: 'RELATÓRIO DE VENDAS', style: 'reportName' }
                  {
                    image: logo,
                    width: 180,
                    alignment: 'center'
                  },                 
                ]              
              ],
            },
          };
      },
    content: [
      {
            layout: 'noBorders',
            table: {              
              headerRows: 1,
              // widths: [ '*', 55, 55 ],
      
              body: corpoDocumento
            }
          },
          {
            text: `Porto Alegre, ${now.getDate()} de ${month} de ${now.getFullYear()}.`,
            fontSize: 12,
            margin: [0, 350, 0, 0],
          },
          {
            text: `________________________________________________________`,
            fontSize: 9,
            alignment: 'center',
            margin: [0, 70, 0, 0],
          },
          {
            text: `Dr. Joaquim Manoel da Silva - CRM: 564237`,
            fontSize: 9,
            alignment: 'center',
            margin: [0, 0, 0, 0],
          },
    ],
    footer(currentPage, pageCount) {
          return {
            layout: 'noBorders',
            margin: [14, 0, 14, 22],
            table: {
              widths: ['auto'],
              body: [
                [
                  {
                    text:
                      '_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
                    alignment: 'center',
                    fontSize: 5,
                  },
                ],
                [
                  [
                    {
                      // text: `Página ${currentPage.toString()} de ${pageCount}`,
                      text: '',
                      fontSize: 7,
                      alignment: 'right',
                      /* horizontal, vertical */
                      margin: [3, 0],
                    },
                    {
                      text: 'Prescrimed © - 2020',
                      fontSize: 7,
                      alignment: 'center',
                    },
                  ],
                ],
              ],
            },
          };
        },
    styles: {
      reportName: {
        fontSize: 9,
        bold: true,
        alignment: 'center',
        margin: [0, 4, 0, 0],
      }
    },
    
  };
    return documento;
  }
}