import { useState, useRef } from 'react'
import { ContainerAssinatura, Assinatura, ContainerBtn, Formulario } from "./styled"
import emailjs from '@emailjs/browser';
import validator from 'validator'

import './assinatura.css'


export default function AssinaturaNewsletter(){

    const [email, setEmail] = useState('');
    const [btnAtvo, setBtnAtivo] = useState(true);
    const form = useRef();

    function handleValidaEmail(e){
        setEmail(e.target.value)
        
        if(validator.isEmail(email)){
            setBtnAtivo(false)
            
        }else {
            setBtnAtivo(true)
        }

        if(email ===""){
            setBtnAtivo(false)
        }
    }

    function handleMessage(e){
        e.preventDefault();
        alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`)
        setEmail('');
        setBtnAtivo(true)
        emailjs.sendForm('gmailMessage', 'template_1lc73ig', form.current, '8ax_9g4JgsR2g2wcw')
        .then((result) => {
            console.log(result.text);
            console.log("Enviado com sucesso!");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return(
        <ContainerAssinatura>
            <Assinatura>

            <span>Sua casa com as</span>
            <h2>melhores plantas</h2> 
            <p>
                Encontre aqui uma vasta seleção de plantas para decorar a sua casa e 
                torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e 
                assine nossa newsletter para saber das novidades da marca.
            </p>

            <ContainerBtn>
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                        <path d="M3.58826 1H20.8432C22.0294 1 23 1.56008 23 2.24461V9.7123C23 10.3968 22.0294 10.9569 20.8432 10.9569H3.58826C2.40198 10.9569 1.4314 10.3968 1.4314 9.7123V2.24461C1.4314 1.56008 2.40198 1 3.58826 1Z" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23 2.24475L12.2157 6.60091L1.4314 2.24475" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                <Formulario ref={form} onSubmit={handleMessage}>
                    <input type="email" placeholder='Insira seu e-mail' value={email} name="name" onChange={(e)=> handleValidaEmail(e)} required />
                    
                    {!btnAtvo ? (
                        <button type='submit'>Assinar newsletter</button>
                        
                    ): (
                            
                        <button type='submit' className='btn-desativado' disabled>Assinar desetivado</button>
                    )}



                </Formulario>
            </ContainerBtn>


            </Assinatura>

            
        </ContainerAssinatura>
    )
}