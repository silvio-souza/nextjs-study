export default function desafio() {

  const spanDesafio = () => {
    let spanPrint = ""
    
    for(let i=0; i<=10; i++) {
       spanPrint += `<span>${i}, </span>`
    }
    
    return spanPrint;
  }

  return (
    <div>
      {spanDesafio()}
    </div>
  )

}