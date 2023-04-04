import styled from "styled-components";


export const MenuHeader = styled.div`
    width: 90%;
    height: 50px;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 300px;

    @media (max-width:1100px){
        width: 100%;
        padding:0 10px;
        gap:0;
        justify-content: space-around;
        
    }

    @media (max-width:740px){
        flex-direction: column;
        gap:6px;
        align-items:center;
        justify-content: center;
        padding-top: 10px;
        height: 70px;
    }


`;

export const Logo = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:8px;

    h2 {
        font-size: 20px;
        font-weight: 400;
        color: #213E26;
    }

    @media (max-width:740px){
        margin-top:10px;
    }
`;

export const ListaMenu = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    gap: 20px;

    li {
        cursor: pointer;
        
        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width:510px){
        display:none;
    }
`;

