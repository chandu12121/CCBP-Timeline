/* Write your CSS here */

import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
disply:flex;
justify-content:space-around;
align-items:center;
min-height:100vh;

`

export const ResponsiveContainer = styled.div`
disply:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
max-width:1110px;

`
export const HeaderContainer = styled.div`
disply:flex;
flex-direction:column;
align-items:center;
margin-bottom: 30px;

`

export const Heading = styled.h1`
color:#171f46;
font-family:"Roboto";
font-size:8px;
font-weight:500;
margin:0px;
line-height:2.7;
align-items:center;

@media screen and (min-width: 768px){
    font-size:20px;
}
`

export const CCBPHeading = styled.span`
color:#2b237c;
font-family:"Roboto";
font-size:24px;
font-weight:500;
margin:0px;
line-height:2.7;

@media screen and (min-width: 768px){
    font-size:30px;
}
`
