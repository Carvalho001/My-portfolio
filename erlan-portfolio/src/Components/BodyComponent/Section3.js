import React from 'react';
import { Section3MainBox, TitleBox, BoxOfEducationalLifePack, PackN1, PackN1Title, PackN2, PackN2Title } from './Section3Styled';


export function Section3() {
    return (
        <Section3MainBox>
            <TitleBox><h3>Educação</h3></TitleBox>
            <BoxOfEducationalLifePack>
                <PackN1>
                    <PackN1Title>
                        <h3>Curso de Web full stack na Labenu</h3>
                    </PackN1Title>
                    <p>06/2021 - 12/2021</p>
                    <p>Curso que possui mais de 1000 horas de experiência, proporcionando grande intensidade, assegurando aprendizado na área de desenvolvimento WEB.</p>
                </PackN1>
                <PackN2>
                    <PackN2Title>
                        <h3>Bacharelado Interdisciplinar em Ciência e tecnologia na UFBA</h3>
                    </PackN2Title>
                    <p>03/2019 - presente</p>
                    <p>Cuso superior que abrange a ciência e tecnologia além de incluir componentes multidisciplinares no currículo, garantindo o desenvolvimento técnico e interpessoal.</p>
                </PackN2>

            </BoxOfEducationalLifePack>

        </Section3MainBox>
    )
}