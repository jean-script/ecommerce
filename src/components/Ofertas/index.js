import './ofertas.css'
import IMG from '../../img/image 3.png'

export default function Ofertas(){
    return(
        <div className='minha-planta'>
            <div className='container-planta'>
                <img src={IMG} alt=''/>
                    <div className='minha-planta-info'>
                        <span>Como conseguir </span>
                        <h3>minha planta</h3>
                        <ul className='lista-info-plantas'>
                            <li>
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26" r="26" fill="#FFCB47"/>
                                </svg>
                                <span>Escolha suas plantas</span>
                            </li>
                            <li>
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26" r="26" fill="#FFCB47"/>
                                </svg>
                                <span>Faça seu pedido</span>
                            </li>
                            <li>
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26" r="26" fill="#FFCB47"/>
                                </svg>
                                <span> Aguarde na sua casa</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}