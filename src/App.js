import { Parallax , ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Banner from './components/Banner';
import Sobre from './components/Sobre';


import Skills from './components/Skills';
import Formacao from './components/Formacao';
import Projetos from './components/Projetos';
import { Contato } from './components/Contato';


function App() {
  return (
    <div className="App">
       <Parallax pages={6} className='fundo'>
        <ParallaxLayer offset={0} >
          <div className='primeira'>
            
          <Cabecalho/>
     
          <Banner/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
     
          <Sobre/>
        </ParallaxLayer>
        <ParallaxLayer offset={2}  className='frente'>
          <Skills/>
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
     
        <Formacao/>
        </ParallaxLayer>
        <ParallaxLayer offset={4}  className='frente'>
          
          <Projetos/>
        </ParallaxLayer>
        <ParallaxLayer offset={5}>
        <Contato/>
        <Rodape/>
        </ParallaxLayer>
    
       </Parallax>
    </div>
  );
}

export default App;
