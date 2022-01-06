import React from 'react';
import macbook from '../../assets/macbook.png';
import ipad from '../../assets/ipad.jpg';
import imac from '../../assets/imac.jpg';
import { Section4Title, ProjectN1Box, ProjectN2Box, ProjectN3Box, ButtonBox } from './Section4Styled'


export function Section4() {
    return (
        <div>
            <Section4Title  id='projects'>
                <h3>Meus projetos</h3>
            </Section4Title>
            <ProjectN1Box>
                <img src={macbook} alt={'macbook'}></img>
                <div>
                    <h1>Case profissional </h1>
                    <span>Full Stack</span>
                    <p>Projeto onde foi criada uma aplicação que possui um formulário e uma tabela, onde o usuário submete seu nome sobrenome e algum número, e esses dados são armazenados no banco de dados e mostrados na tabela da aplicação.</p>
                   <a href={'https://github.com/future4code/Erlan-Carvalho/tree/master/semana23'} rel={'noreferrer'} target={'_blank'}><button>Ver no Github</button></a>
                </div>
            </ProjectN1Box>
            <ProjectN2Box>
                <div>
                    <h1>Labedit</h1>
                    <span>Front-End</span>
                    <p>Aplicação criada inspirada na rede social Reddit, <br/>nessa aplicação é possível fazer publicações e visualizar as publicações de terceiros. </p>
                    <a href={'https://github.com/future4code/Erlan-Carvalho/tree/master/semana12/labeddit'} rel={'noreferrer'} target={'_blank'}><button>Ver no Github</button></a>
                </div>
                <img src={ipad} alt={'ipad'}></img>
            </ProjectN2Box>
            <ProjectN3Box>
                <img src={imac} alt={'imac'}></img>
                <div>
                    <h1>Case profissional</h1>
                    <span>Back-end</span>
                    <p>API criada para servir como ponte para uma eventual aplicação front-end. Possui como intuito criar,armazenar e utilizar dados relacionados a competições esportivias.</p>
                    <a href={'https://github.com/future4code/Erlan-Carvalho/pull/69'} rel={'noreferrer'} target={'_blank'}><button>Ver no Github</button></a>
                </div>
            </ProjectN3Box>
            <ButtonBox>
               <a href={'https://github.com/Carvalho001?tab=repositories'} rel={'noreferrer'} target={'_blank'}><button>Mais projetos</button></a> 
            </ButtonBox>
        </div>
    )
}