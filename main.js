let students =
  [
    {
      name: "André",
      n1: 3,
      n2: 5,
    },
    {
      name: "João",
      n1: 8,
      n2: 5,
    },
    {
      name: "Marcos",
      n1: 10,
      n2: 4,
    },
    {
      name: "Maria",
      n1: 7,
      n2: 8,
    },
    {
      name: "Pedro",
      n1: 9,
      n2: 8,
    },
    {
      name: "Julia",
      n1: 7,
      n2: 9,
    }
  ]


function calcAvg(n1, n2){
  const avg = ((n1 + n2) / 2)
  return avg
}



for(student of students){
  let n1 = student.n1
  let n2 = student.n2 

  let avg = calcAvg(n1, n2)

  if(avg >= 7){
    alert(`A média do(a) aluno(a) ${student.name} é: ${avg} \n
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `)
  }else if(avg >= 5){
    alert(`A média do(a) aluno(a) ${student.name} é: ${avg} \n
    Aguarde, ${student.name}. Você ficará na lista de espera
    `)
  }else if(avg <5){
      alert(`A média do(a) aluno(a) ${student.name} é: ${avg} \n
      Sinto muito, ${student.name}... Você está desclassificado(a)
      `)
  }

}