import React from 'react';
import { TheFooter, MainFooter, SecundaryFooter, Icons, Icon1, Icon2, Icon3, Icon4, FooterTitle, Contact } from '/home/carvalho/Documentos/myProjects/My-portfolio/erlan-portfolio/src/Components/FooterComponent/StyledFooter.js'
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import github from '../../assets/github.png';
import insta from '../../assets/insta.png';


export function Footer() {
    return (
        <TheFooter>
            <MainFooter>
                <FooterTitle>
                    Contrate-me!
                </FooterTitle>
                <Contact>
                    <p>Aberto para oportunidades que tragam amadurecimento para minha jornada pessoal e <br /> profissional buscando sempre atuar com criatividade em busca dos melhores resultados.</p><br/>
                    <p>E-mail para contato: erlangleidson@hotmail.com  </p> <p>Celular:(71) 98275-9119</p>
                </Contact>
                <Icons>
                    <Icon1 src={linkedin} alt={'Imagem do linkedin'}></Icon1>
                    <Icon2 src={whatsapp} alt={'Imagem do whatsapp'}></Icon2>
                    <Icon3 src={github} alt={'Imagem do github'}></Icon3>
                    <Icon4 src={insta} alt={'Imagem do instagram'}></Icon4>
                </Icons>
            </MainFooter>
            <SecundaryFooter>
                <p>© 2020 Erlan</p>
            </SecundaryFooter>
        </TheFooter>
    )
}