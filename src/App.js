import AssinaturaNewsletter from './components/AssinaturaNewsletter';
import Menu from './components/Header'
import Ofertas from './components/Ofertas';
import Produtos from './components/Produtos';
import Vector from './img/Vector.png'
import Arvore from './img/arvore.png'

function App() {
  return (
    <div className="App">

      <img src={Vector} alt='' className='img-fundo' />
      <img src={Arvore} alt='' className='img-arvore' />
      <Menu />
      <AssinaturaNewsletter/>
      <Ofertas/>
      <Produtos/>
    </div>
  );
}

export default App;
