import { useState, useEffect } from 'react'
import img from '../../img/produto-01 1.png'
import './produtos.css'


export default function Produtos(){

    const [produtos,setProdutos] = useState([]);

    useEffect(()=>{

        function loadApi(){
            const URL = "https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw";

            fetch(URL)
            .then((response)=> response.json())
            .then((json)=>{
                let data = json;

                setProdutos(data);
                console.log(json);
            })
            

        }

        loadApi()

    },[])

    return(
        <div className="produtos-container">
            <span>Conheça nossas</span>
            <h2>ofertas</h2>
            <div className='produtos-lista'>
                
                    {produtos.map((item)=>{
                        return(
                            <div key={item.name} className='produto'>
                                <img src={img} alt={item.name}/>
                                <div className='produto-info'>
                                    <span>{item.name}</span>
                                    <p>R$ {item.preco}</p>
                                    <div className='compra'>
                                        <span>Comprar </span>
                                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 4.9494H15" stroke="#FFCB47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8 1L15 4.94931L8 8.89862" stroke="#FFCB47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    </div>

                                </div>
                            </div>
                        )
                    })}
                
            </div>
        </div>
    )
}