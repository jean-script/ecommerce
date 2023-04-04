import styled from "styled-components";
import Arvore from '../../img/arvore.png'
import Fundo from '../../img/Vector.png'


export const ContainerAssinatura = styled.div`
    /* background-image: url(${Arvore});
    background-repeat: no-repeat;
    background-size: 480px 560px;
    background-position: 600px; */
    object-fit: contain;
    width: 100%;
    max-width: 1210px;
    display:block;
    margin:auto;
`;

export const Assinatura = styled.div`
    /* background-image: url(${Fundo});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 800px 530px;    */
    width: 90%;
    max-width: 585px;
    height: 462px;
    padding: 20px;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Montserrat';

    span {
        font-size: 22px;
        font-weight: 400;
        color: #202020;
        opacity: 0.5;
    }

    h2 {
        font-weight: 900;
        font-size: 82px;
        margin-bottom: 10px;
        font-family:'Elsie Swash Caps';
    }

    p {
        font-size: 16px;
        font-weight: 400;
        opacity: 0.5;
        max-width: 481px;
        line-height: 26px;
    }

    @media (max-width:650px){
        align-items:center;
        margin:auto;

        h2 {
            text-align:center;
        }
    }

    @media (max-width:450px) {
        width:300px;
    }


`;

export const ContainerBtn = styled.div`
    width: 585px;
    height: 85px;

    svg {
        position: relative;
        left: 23px;
        top: 52px;
    }
    
    @media (max-width:650px){
        svg{
            left:93px;
        }

    @media (max-width:450px){
        svg{
            left:140px;
        }

    }
`;

export const Formulario = styled.form`

    display: flex;
    flex-direction: row;
    align-items: center;
    padding:10px 0;
    

    input {
        width:391px ;
        height: 65px;
        padding: 10px;
        border: none;
        padding-left: 60px;
    
        &::placeholder {
            color: #202020;
            opacity: 0.3;
        }
    }

    button {
        background: #FFCB47;
        border: none;
        width: 194px;
        height: 65px;
        padding: 10px;
        color: #ffffff;
        font-size: 16px;
        text-align: center;
        font-weight: 400;
        cursor: pointer;
        
    }

    @media (max-width:650px){
        margin-left:70px;
        width:300px;
        input{
            width:280px;
            
        }

        button{
            width:170px
        }

        
    }

    @media (max-width:450px) {
        margin-left:120px;
    }


`;
