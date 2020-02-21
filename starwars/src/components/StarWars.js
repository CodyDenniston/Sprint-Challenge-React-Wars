import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function StarWars(){
    const [character, setCharacter] = useState([])
    const [people, setPeople] = useState()

    /*const nextPerson = () => {
        return setPeople(people => people + 1);
    }*/

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response.data)
            setCharacter(response.data.results)
        })
        .catch(error => {
            console.log("ERROR", error);
        })
    }, [])
    return(
    <div> 
        {character.map((c, index) => {
           return <CharacterCard key={index} /*nextPerson={nextPerson}*/ name={c.name} birthday={c.birth_year} eyecolor={c.eye_color} hair_color={c.hair_color} gender={c.gender} height={c.height} mass={c.mass} skin_color={c.skin_color} homeworld={c.homeworld} species={c.species} starships={c.starships} vehicles={c.vehicles} />
        
        })}
    </div>

)

}