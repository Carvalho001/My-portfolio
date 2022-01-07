import React from 'react';
import me from '../../assets/me.jpg';
import { MyPictureBox, AboutMeBox,Section1MainBox,SomeTechnologies,CVButton} from './Section1Styled';

export function Section1() {
    return (
        <Section1MainBox>
            <MyPictureBox>
                <img src={me} alt={'Minha foto'}></img>
            </MyPictureBox>
            <AboutMeBox id= 'whoiam'>
                    <h1>Sobre mim</h1>
                    <p>Desenvolvedor Web, apaixonado por aprender. Estou sempre a buscar pelo crescimento e aprendizado, visando experiências que alavanquem minhas habilidades e tomadas de decisão conjuntas a uma equipe, sendo capaz de aprimorar a mim mesmo e todos ao meu redor.</p>
                <SomeTechnologies>
                    <h4>NodeJS</h4>
                    <h4>MySQL</h4>
                    <h4>CSS</h4>
                    <h4>Javascript</h4>
                </SomeTechnologies>
               <a href='https://drive.google.com/file/d/1T16Wv_1AE0ExWbfYbaUNuC0Kwle3RfE7/view?usp=sharing' rel="noreferrer" target={"_blank"}><CVButton>CV em PDF</CVButton></a>
            </AboutMeBox>
        </Section1MainBox>
    )
}