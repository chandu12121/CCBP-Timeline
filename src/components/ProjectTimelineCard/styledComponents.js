/* Write your CSS here */
import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
width:100%;
height:100%;
margin-top:7px;
margin-bottom:7px;

`
export const ProjectImage = styled.img`
width:100%;
height:100%;

`

export const ProjectTitleAndDurationContainer = styled.div`
disply:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;

@media screen and (min-width:768px) {
    flex-direction:row;
    align-items:center;
}
`

export const ProjectTitle = styled.h1`
color:#171f46;
font-family:"Roboto";
font-size:20px;
font-weight:700;
margin:0px;
line-height:1.3;

@media screen and (min-width: 768px){
    font-size:24px;
}
`

export const DurationContainer = styled.div`
disply:flex;
justify-content:center;
align-items:center;
`

export const Duration = styled.p`
color:#171f46;
font-family:"Roboto";
font-size:12px;
font-weight:600;
margin-left:4px;


@media screen and (min-width: 768px){
    font-size:14px;
}
`

export const ProjectDescription = styled.h1`
color:#1e293b;
font-family:"Roboto";
font-size:12px;
font-weight:700;
margin-top:0px;
line-height:1.5;

@media screen and (min-width: 768px){
    font-size:16px;
}
`

export const VisitLink = styled.a`
text-align:center;
color:#0967d2;
font-family:"Roboto;
font-size:14px;
font-weight:600;
text-decoration:none;
margin-top:5px;

@media screen and (min-width: 768px){
    font-size:18px;
}
`
