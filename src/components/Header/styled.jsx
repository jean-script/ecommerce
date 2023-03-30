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
`;

