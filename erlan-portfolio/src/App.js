import React from 'react';
import { Footer } from '../src/Components/FooterComponent/Footer';
import { Header } from '../src/Components/HeaderComponent/Header';
import { GeralBody } from './Components/BodyComponent/GeralBody';
import uparrow from '/home/carvalho/Documentos/myProjects/My-portfolio/erlan-portfolio/src/assets/uparrow.png';
import styled from 'styled-components';

const GoToTopButton = styled.div`
  height:5vh;
  position: fixed;
  bottom: 3vh;
  right: 2vw;
  opacity:60%;
    img{
      height:5vh;
    };
    button{
      border-radius: 15px;
      &:hover{
        cursor:pointer;
        background-color:gray;
      };
    };
`

function App() {
  return (
    <div>

      <a href="#top"><GoToTopButton><button><img src={uparrow} alt={'up Arrow'}></img></button></GoToTopButton></a>
      <Header>
      </Header>
      <GeralBody>
      </GeralBody>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
