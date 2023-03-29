import './assinatura.css'

export default function AssinaturaNewsletter(){
    return(
        <div className='container-assinatura'>
            <div className='assinatura'>

            <span>Sua casa com as</span>
            <h2>melhores plantas</h2> 
            <p>
                Encontre aqui uma vasta seleção de plantas para decorar a sua casa e 
                torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e 
                assine nossa newsletter para saber das novidades da marca.
            </p>

            <div className='container-btn-assinatura'>
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                        <path d="M3.58826 1H20.8432C22.0294 1 23 1.56008 23 2.24461V9.7123C23 10.3968 22.0294 10.9569 20.8432 10.9569H3.58826C2.40198 10.9569 1.4314 10.3968 1.4314 9.7123V2.24461C1.4314 1.56008 2.40198 1 3.58826 1Z" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23 2.24475L12.2157 6.60091L1.4314 2.24475" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                <form className='container-btnemail-assinatura'>
                    <input type="email" placeholder='Insira seu e-mail' required />
                    <button type='submit' >Assinar newsletter</button>
                </form>
            </div>

            </div>

        </div>
    )
}