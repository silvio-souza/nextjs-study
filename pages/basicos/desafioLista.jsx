export default function desafio() {
  return  (
    <div>
      <div>
        {gerarLista()}
      </div>
      <div>
        {gerarLista(3)}
      </div>
    </div>
  )
}


const gerarLista = (final = 10) => {
  let lista = []

  for(let i=1; i<=final; i++) {
    lista.push(<span>{i},</span>)
  }

  return lista;
}