import estilos from './integracao2.module.css'

export default function integracao2() {
  return (
    <div id={estilos.integracao2}>
      <div className={estilos.vermelho}>Texto #01</div>
      <div className={estilos.azul}>Texto #02</div>
      <div className={estilos.branco}>Texto #03</div>
    </div>
  )
}