import styled from 'styled-components';

export const Section4Title = styled.div`
    display:flex;
    justify-content:center;
    padding:3vh 0 1vh 0;
    color:#4eaccf;
`

export const ProjectN1Box = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:10vh 25vh ;
        h1{ 
            color:#063447;
        };
        span{ 
            font-family: Montserrat;
            color: #063447;
             font-size:3.70vh;
        };
        p{
            color: #063447;
             font-size:2.75vh;
        };
        button{
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
        };

    @media screen and (min-device-width:320px) and (max-device-width:480px){
        padding: 4vh 10vh;
            img{
                height:15vh;
                width:20vw;
                padding-top:110%;
                padding-right:5vw;
            };
            h1{
                padding-left:3vw;
            };
            button{
                width:30vw;
            };
    };
`

export const ProjectN2Box = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:10vh 27vh ;
        h1{
            color:#063447;
        };
        span{ 
            font-family: Montserrat;
            color: #063447; font-size:3.70vh;
        };
        p{
            color: #063447; 
            font-size:2.75vh;
        };
        button{
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
        };

    @media screen and (min-device-width:320px) and (max-device-width:480px){
        padding: 4vh 10vh;
            img{
                height:15vh;
                width:20vw;
                padding-top:110%;
                padding-left:5vw;
            }
            h1{
                padding-left:3vw;
            };
            button{
                width:30vw;
            };
    };
`

    export const ProjectN3Box = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:10vh 25vh ;
        h1{
            color:#063447;
        };
        span{
            font-family:Montserrat;
            color: #063447;
            font-size:3.70vh;
        };
        p{
            color: #063447; 
            font-size:2.75vh;
        };
        button{
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
        };
    @media screen and (min-device-width:320px) and (max-device-width:480px){
        padding: 4vh 10vh;
            img{
                height:15vh;
                width:20vw;
                padding-top:110%;
                padding-right:5vw;
            }
            h1{
                padding-left:3vw;
            };
            button{
                width:30vw;
            };
    };`
        

export const ButtonBox = styled.div`
    display:flex;
    justify-content:center;
    padding-top:7vh;
        button{
            border-radius: 8px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
            background-color: #063447;
            color:white;
            height:4.60vh;
            width:10vw;
            font-size:2.30vh;
                &:hover{
                    cursor:pointer;
                    background-color:#053276;
                };
        };
    @media screen and (min-device-width:320px) and (max-device-width:480px){
        button{
            width:30vw; 
            height:6vh;
        };
    };
  `