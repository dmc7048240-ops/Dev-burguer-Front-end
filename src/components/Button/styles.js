
import styled from 'styled-components';

export const ContainerButton = styled.button `
       width: 100%;
       height: 52px;
       border-radius: 5px;
       border: none;
       background-color: #9758a6;
       font-family:  "Road Rage", sans-serif;
       font-size: 30px;
       color: #fff;

       &:hover{
        background-color: #6f357c;
        border: 1px dashed #fff;
       }

       &:active{
        background-color: #9b6ea7;
        border: none;
       }
`