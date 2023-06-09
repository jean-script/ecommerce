import { MenuHeader, Logo, ListaMenu } from './styled';

export default function Menu(){

    

    return(
        <header>
            <MenuHeader>
                <Logo>
                    <svg width="30" height="44" viewBox="0 0 30 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.86512 44.5178C19.1501 39.2829 28.0889 27.0195 29.3226 12.3797C26.8111 5.14642 23.0915 0.155396 23.0915 0.155396C23.0915 0.155396 26.802 9.84745 10.8998 16.3575C2.25892 19.894 -4.37778 28.9582 3.54643 42.9601C4.20269 36.7015 7.01666 22.902 19.1166 19.7531C19.1159 19.7531 7.88753 24.2383 6.86512 44.5178Z" fill="#8DCE97"/>
                    </svg>
                    <h2>Casa<strong>Verde</strong></h2>
                </Logo>
                <div>
                    <ListaMenu className='lista'>
                        <li>Como fazer</li>
                        <li> / </li>
                        <li>Ofertas</li>
                        <li> / </li>
                        <li>Depoimentos</li>
                        <li> / </li>
                        <li>Vídeos</li>
                        <li> / </li>
                        <li> Meu carrinho</li>

                    </ListaMenu>

                </div>
            </MenuHeader>
        </header>
    )
}
