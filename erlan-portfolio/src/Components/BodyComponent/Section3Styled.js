import styled from 'styled-components';

export const Section3MainBox = styled.div`
    height:65vh;
    background-color:#292929;
    @media screen and (min-device-width:320px) and (max-device-width:480px){
        height:100vh;
    }`



export const TitleBox = styled.div`
    display:flex;
    justify-content:center;
        h3{
            margin-top:0vh;
            padding-top:5vh;
            color:white;
        };
`



export const BoxOfEducationalLifePack = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin-top:5vh;
    @media screen and (min-device-width:320px) and (max-device-width:480px){
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:2vh;
        justify-content:space-between;
    };
`

export const PackN1 = styled.div`
    background-color:#ffffff;
    width:23vw;
    height:40vh;
    border-radius: 8px;
    color: #292929;
        p{
            font-size:2.25vh;
            margin:1vh 1vw ;
        };
    @media screen and (min-device-width:320px) and (max-device-width:480px){
        width:60vw;
        height:35vh;
        font-size:2vh;
        margin-bottom:3vh;
            p{
                font-size:2vh;
            };
    };
`


export const PackN1Title = styled.div`
    margin:0vh 2vw ;
        h3{
            margin-bottom:0.95vh;
        };

`

export const PackN2 = styled.div`
    background-color:#ffffff;
    width:23vw;
    height:40vh;
    border-radius: 8px;
    color: #292929;
        p{
            font-size:2.25vh;
            margin:1vh 1vw ;
        };
    @media screen and (min-device-width:320px) and (max-device-width:480px){
        width:60vw;
        height:35vh;
        font-size:2vh;
        margin-top:2vh;
            p{
                font-size:2vh
            };

    };
`

export const PackN2Title = styled.div`
    margin:0 2vw ;
        h3{
            margin-bottom:0.95vh;
        }
`
