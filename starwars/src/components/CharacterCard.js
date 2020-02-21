import React from "react"
import styled from "styled-components"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const PersonCard = styled.div`
border: 5px solid darkred;
`

const CharacterCard = props => {
    return(
    <PersonCard>
    <Card>
      <CardBody>
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>Birthday: {props.birthday}</CardText>
        <CardText>Eye color: {props.eyecolor}</CardText>
        <CardText>Hair color: {props.hair_color}</CardText>
        <CardText>Gender: {props.gender}</CardText>
        <CardText>Height: {props.height}in.</CardText>
        <CardText>Mass: {props.mass}kg.</CardText>
        <CardText>Skin color: {props.skin_color}</CardText>
        <CardText>Home World: {props.homeworld}</CardText>
        <CardText>Species: {props.species}</CardText>
        <CardText>Starships: {props.starships}</CardText>
        <CardText>Vehicles: {props.vehicles}</CardText>
        {/*<Button onClick={props.nextPerson}>Next Person</Button>*/}
      </CardBody>
    </Card>
    </PersonCard>
    )
}

export default CharacterCard;