import styled from 'styled-components';

export const Section2MainBox = styled.div`
    background-color:#4eaccf;
    height:58vh;`

export const TtitleBox = styled.div`
    display:flex;
    justify-content:center;
    padding-top:4vh;
        h3{
            margin-top:0vh;
            margin-bottom:0vh;
            color:white;
        };
`

export const SkillsBox = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    justify-items:center;
    align-items:center;
    color:white;
`

export const FrontEndBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:20vw;
        h1{
            font-size:8vh;
            margin-bottom:1vh;
        };
        p{
            margin-top:1vh;
            margin-bottom:15vh;
        };

        @media screen and (min-device-width:320px) and (max-device-width:480px){
            h1{
                font-size:6vh;
                margin-top:4vh;
            };
            p{
                width:46vw;
                font-size:2vh;
            };
        }

`
export const BackEndBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:20vw;
        h1{
            font-size:8vh;
            margin-bottom:1vh;
        };
        p{
            margin-top:1vh;
            margin-bottom:15vh;
        };
   
        @media screen and (min-device-width:320px) and (max-device-width:480px){
        h1{
            font-size:6vh;
            margin-top:4vh;
        };
        p{
            width:46vw;
            font-size:2vh;
        };

    };`