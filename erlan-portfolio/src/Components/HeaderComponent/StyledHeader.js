import styled from 'styled-components';
import headerImage from '../../assets/headerImage.png';

export const MainHeader = styled.div`
  width: 100vw;
  height: 65vh;
  color:green;
  background-size:350vh;
  background-image:url(${headerImage});  
  opacity:95%;
`
export const MyNameAndHeaderMenuBox = styled.div`
display:flex;
flex-direction:row;
color:white;
justify-content:space-between;
padding:0 5vw 0 2vw;
h3{
  font-size:4.30vh;
};`

export const HeaderMenu = styled.div`
display:flex;
flex-direction:row;
;`

export const MenuItem1 = styled.p`
padding-right:1.70vw;`
export const MenuItem2 = styled.p`
padding-right:1.70vw ;`
export const MenuItem3 = styled.p`
`

export const IconsAndIntroduction = styled.div`
display:grid;
grid-template-columns:1fr 3.75fr;
justify-content:center;
padding-top:2.65%;
justify-items:left;
`
export const Icons = styled.div`
display:flex;
flex-direction:column;
align-items:start;
`

export const Icon1 = styled.img`margin:0.55vh 1.35vw 2.75vh 2.93vw; `
export const Icon2 = styled.img`margin:0.55vh 1.35vw 2.75vh 2.93vw; `
export const Icon3 = styled.img`margin:0.55vh 1.35vw 2.75vh 2.93vw; `
export const Icon4 = styled.img`margin:0.55vh 1.35vw 2.75vh 2.93vw; `


export const Introduction = styled.div`
padding-top: 1.75vh;
color:white;
h1{
  font-size:6vh;
  margin:2vh 0 ;
};
h3{
  margin:1vh 0 ;
};
p{
  margin:1vh 0;
};`