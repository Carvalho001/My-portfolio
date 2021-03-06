import styled from 'styled-components';

export const TheFooter = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:flex-end;
    width:100vw;
    margin-top:10vh;
    `

export const MainFooter = styled.div`
    width: 100vw;
    height: 45vh;
    background-color: #063447;`


export const FooterTitle = styled.h1`
    display:flex;
    justify-content:center;
    color:white;
    margin-bottom:1vh;
`
export const Contact = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    font-size:80%;
    margin-bottom:2.10vh;
        p{
            margin-bottom:0;
            margin-top:1vh;
        };

    @media screen and (min-device-width:320px) and (max-device-width:480px){
        padding:0 10vw;
            p{
                font-size:2vh;
            }
    };

`

export const Icons = styled.div`
    display:flex;
    justify-content:center;
    margin-top:3vh;
`
export const Icon1 = styled.img`
    margin:0 1.70vw 2vh 1.70vw;
        &:hover{
            height:6vh; 
            background-color:#0e76a8;
            border-radius:10px;
            border-color:black;
            };
`
export const Icon2 = styled.img`
    margin:0 1.70vw 2vh 1.70vw;
        &:hover{
            height:6vh; 
            background-color:#25D366;
            border-radius:10px;
            border-color:black;
            };
`
export const Icon3 = styled.img`
    margin:0 1.70vw 2vh 1.70vw;
        &:hover{
            height:6vh; 
            background-color:#171515;
            border-radius:10px;
            border-color:black;
            };
`
export const Icon4 = styled.img`
    margin:0 1.70vw 2vh 1.70vw;
        &:hover{
            height:6vh; 
            background-color:#E1306C;
            border-radius:10px;
            border-color:black;
            };
`

export const SecundaryFooter = styled.div`  
    width: 100vw;
    height: 8vh;
    background-color: #4eaccf;
        p{
            color:#ffffff;
            padding-left:5.00vw;
            padding-top:0;
        }
`

