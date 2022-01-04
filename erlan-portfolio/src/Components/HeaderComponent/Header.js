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
                        <MenuItem1>quem sou</MenuItem1>
                        <MenuItem2>projetos</MenuItem2>
                        <MenuItem3>contato</MenuItem3>
                    </HeaderMenu>
                </MyNameAndHeaderMenuBox>
                <IconsAndIntroduction>
                    <Icons>
                        <Icon1 src={linkedin} alt={'Imagem do linkedin'}></Icon1>
                        <Icon2 src={whatsapp} alt={'Imagem do whatsapp'}></Icon2>
                        <Icon3 src={github} alt={'Imagem do github'}></Icon3>
                        <Icon4 src={insta} alt={'Imagem do instagram'}></Icon4>
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