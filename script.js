// --------------- PRÁTICA GUIADA ---------------
// PRÁTICA 1
/* const bimestre1 = [8, 9, 7, 8];
const bimestre2 = [6, 9, 8, 7];
const bimestre3 = [10, 9, 7, 8];
const bimestre4 = [9, 8, 9, 10];

const notasBimestres = [bimestre1, bimestre2, bimestre3, bimestre4];
 */

/* for (i = 0; i < notasBimestres.length; i++) {
  let notas = 0;
  let media = 0;

  for (let j = 0; j < notasBimestres.length; j++) {
    notas = notas + notasBimestres[i][j];
  }
  console.log(`A soma das notas do bimestre ${i + 1} é ${notas}`);
  console.log(`A média do bimistre ${i + 1} é: ${notas / notasBimestres.length}`);
} */

// PRÁTICA 2
/* for (let i in notasBimestres) {
  let notas = 0;
  let media = 0;
  let n = Number(i);

  for (let j = 0; j < notasBimestres.length; j++) {
    notas = notas + notasBimestres[i][j];
  }
  console.log(`A soma das notas do bimestre ${n + 1} é: ${notas}.`);
  console.log(`A média do bimistre ${n + 1} é: ${notas / notasBimestres.length}`);
} */

// PRÁTICA 3
/* for (let i in notasBimestres) {
  let notas = 0;
  let media = 0;
  let n = Number(i);

  for (let nota of notasBimestres[i]) {
    notas = notas + nota;
  }
  console.log(`A soma das notas do bimestre ${n + 1} é: ${notas}.`);
  console.log(`A média do bimistre ${n + 1} é: ${notas / notasBimestres.length}`);
} */

// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻