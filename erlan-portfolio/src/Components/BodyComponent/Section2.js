import React from 'react';
import { Section2MainBox,TtitleBox,SkillsBox, FrontEndBox, BackEndBox} from './Section2Styled';


export function Section2() {
    return (
        <Section2MainBox>
            <TtitleBox> <h3>O que faço?</h3></TtitleBox>

            <SkillsBox>
                <FrontEndBox>
                    <h1>Front-end</h1>
                    <p>
                        Desenvolvimento de aplicações
                        web utilizando HTML, CSS e
                        JavaScript.

                        Criação de sites responsivos
                        seguindo princípio de
                        Mobile First.
                    </p>

                </FrontEndBox>
                <BackEndBox>
                    <h1>Back-end</h1>
                    <p>
                        Aplicações utilizando NodeJS,
                        Typescript e MySQL.
                        Criação de API´s para
                        comunicação com front-end
                        seguindo princípio de Clean Code.
                    </p>
                </BackEndBox>
            </SkillsBox>

        </Section2MainBox>
    )
}