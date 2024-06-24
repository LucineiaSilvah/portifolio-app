import { Parallax , ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Banner from './components/Banner';
import Sobre from './components/Sobre';


import Skills from './components/Skills';
import Formacao from './components/Formacao';
import Projetos from './components/Projetos';

function App() {
  return (
    <div className="App">
       <Parallax pages={7} className='fundo'>
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
          555555555555555555555555
        </ParallaxLayer>
        <ParallaxLayer offset={6} className='frente'>
          <Rodape/>
          6666666666666666666666666666666666666666666
        </ParallaxLayer>
       </Parallax>
    </div>
  );
}

export default App;
