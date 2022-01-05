import React from 'react';
import { MainHeader, IconsAndIntroduction, Icons, Icon1, Icon2, Icon3, Icon4, Introduction, HeaderMenu, MyNameAndHeaderMenuBox, MenuItem1, MenuItem2, MenuItem3 } from '../HeaderComponent/StyledHeader';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import github from '../../assets/github.png';
import insta from '../../assets/insta.png';

export function Header() {
    return (
        <div>

            <MainHeader>
                <MyNameAndHeaderMenuBox>
                    <h3>Erlan</h3>
                    <HeaderMenu>
                        <a href={'#whoiam'}><MenuItem1 id={'whoiam'}>quem sou</MenuItem1></a>
                        <a href={'#projects'}><MenuItem2 id={'projects'}>projetos</MenuItem2></a>
                        <a href={'#contact'}><MenuItem3 id={'contact'}>contato</MenuItem3></a>
                    </HeaderMenu>
                </MyNameAndHeaderMenuBox>
                <IconsAndIntroduction>
                    <Icons>
                        <a href={'https://www.linkedin.com/in/erlan-carvalho-436519210/'} rel={"noreferrer"} target={'_blank'}><Icon1 src={linkedin} alt={'Imagem do linkedin'}></Icon1></a>
                        <a href={'tel:+5571982759119'} rel={"noreferrer"} target={'_blank'}><Icon2 src={whatsapp} alt={'Imagem do whatsapp'}></Icon2></a>
                        <a href={'https://github.com/Carvalho001'} rel={"noreferrer"} target={'_blank'}><Icon3 src={github} alt={'Imagem do github'}></Icon3></a>
                        <a href={'https://www.instagram.com/erlan_carvalho/'} rel={"noreferrer"} target={'_blank'}><Icon4 src={insta} alt={'Imagem do instagram'}></Icon4></a>
                    </Icons>
                    <Introduction>
                        <h1>
                            Eu Sou <br />Erlan Carvalho
                        </h1>
                        <h3>Desenvolvedor Web Full Stack                         </h3>
                        <p>Apaixonado por aprender</p>
                    </Introduction>
                </IconsAndIntroduction>
            </MainHeader>


        </div>
    )
}