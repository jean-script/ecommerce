import styled from "styled-components";
import Arvore from '../../img/arvore.png'

export const ContainerAssinatura = styled.div`
    background-image: url(${Arvore});
    background-repeat: no-repeat;
    background-size: 480px 560px;
    background-position: 700px;
    object-fit: contain;
    width: 80%;
    max-width: 1210px;
`;

export const Assinatura = styled.div`
    width: 90%;
    max-width: 585px;
    height: 462px;
    padding: 20px;
    margin-left: 200px;
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
    }

    p {
        font-size: 16px;
        font-weight: 400;
        opacity: 0.5;
        max-width: 481px;
        line-height: 26px;
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

`;
