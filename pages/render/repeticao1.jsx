export default function repeticao1() {
  const listaAprovados = [
    'João',
    'Felipe',
    'Ana',
    'Bia', 
    'Carlos',
    'Silvio'
  ]

  function renderizarLista() {
    return listaAprovados.map((nome, index) => <li key={index}>{nome}</li>)
  }

  // function renderizarLista() {
  //   const itens = []

  //   for (let i=0; i< listaAprovados.length; i++) {
  //     itens.push(<li key={i}>{listaAprovados[i]}</li>)
  //   }
    
  //   return itens
  // }


  return (
    <ul>
      {renderizarLista()}
    </ul>
  )

}