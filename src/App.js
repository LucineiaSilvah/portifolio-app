import { Parallax , ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Banner from './components/Banner';
function App() {
  return (
    <div className="App">
       <Parallax pages={7} className='fundo'>
        <ParallaxLayer offset={0} >
          <Cabecalho/>
          ooooooooooooooooooooooooooooooooooooooo
          <Banner/>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>11111111111111111111111111111</ParallaxLayer>
        <ParallaxLayer offset={2}  className='frente'>
22222222222222222222
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
        3333333333333333333
        </ParallaxLayer>
        <ParallaxLayer offset={4}  className='frente'>
          444444444444444444444444
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
