import styled from 'styled-components';

export const MyPictureBox = styled.div`
img{
    height:43vh;
    width:30vw;
}`

export const AboutMeBox = styled.div`
margin-right:10vw;
padding-top:2vh;
color:white;
h1{
    margin:0vh 0 1vh 0;
    margin-bottom:3vh;
};
p{
    margin:1vh 0 3vh 0 ;
    font-size:2.40vh;
};
`

export const Section1MainBox = styled.div`
height:55vh;
display:grid;
grid-template-columns: 3fr 2fr;
align-items:center;
justify-items:center;
background-color:#063447;`

export const SomeTechnologies = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:0vh;
h4{
    margin:0.50vh 0  2vh 0;
}
`

export const CVButton = styled.button`
margin-top:1.40vh;
background-color:#4eaccf;
border-radius:8px;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
color:white;
height:4.60vh;
width:10vw;
font-size:2.30vh;
&:hover{
    cursor:pointer;
    background-color:#063875;
};
`