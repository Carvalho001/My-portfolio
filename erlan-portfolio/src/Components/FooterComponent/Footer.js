import React from 'react';
import { TheFooter, MainFooter, SecundaryFooter, Icons, Icon1, Icon2, Icon3, Icon4, FooterTitle, Contact } from '/home/carvalho/Documentos/myProjects/My-portfolio/erlan-portfolio/src/Components/FooterComponent/StyledFooter.js'
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import github from '../../assets/github.png';
import insta from '../../assets/insta.png';


export function Footer() {
    return (
        <TheFooter id='contacts'>
            <MainFooter>
                <FooterTitle>
                    Contrate-me!
                </FooterTitle>
                <Contact>
                    <p>Aberto para oportunidades que tragam amadurecimento para minha jornada pessoal e <br /> profissional buscando sempre atuar com criatividade em busca dos melhores resultados.</p><br/>
                    <p>E-mail para contato: erlangleidson@hotmail.com  </p> <p>Celular:(71) 98275-9119</p>
                </Contact>
                <Icons>
                        <a href={'https://www.linkedin.com/in/erlan-carvalho-436519210/'} rel={"noreferrer"}  target={'_blank'}><Icon1 src={linkedin} alt={'Imagem do linkedin'}></Icon1></a>
                        <a href={'tel:+5571982759119'} rel={"noreferrer"} target={'_blank'}><Icon2 src={whatsapp} alt={'Imagem do whatsapp'}></Icon2></a>
                       <a href={'https://github.com/Carvalho001'} rel={"noreferrer"} target={'_blank'}><Icon3 src={github} alt={'Imagem do github'}></Icon3></a>
                        <a href={'https://www.instagram.com/erlan_carvalho/'} rel={"noreferrer"} target={'_blank'}><Icon4 src={insta} alt={'Imagem do instagram'}></Icon4></a>
                    </Icons>
            </MainFooter>
            <SecundaryFooter>
                <p>© 2020 Erlan</p>
            </SecundaryFooter>
        </TheFooter>
    )
}