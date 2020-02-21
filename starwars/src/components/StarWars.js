import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function StarWars(){
    const [character, setCharacter] = useState([])
    const [people, setPeople] = useState([1])

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/${people}/`)
        .then(response => {
            console.log(response)
            setCharacter(response.data)
        })
        .catch(error => {
            console.log("ERROR", error);
        })
    } [])
    return(
    <div> 
        <CharacterCard/>
    </div>

)

}