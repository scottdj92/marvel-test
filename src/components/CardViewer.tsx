import React from "react";
import { UsingAPIContext } from "../providers";
import Character from "./Character";
import { Columns, Title } from "bloomer";

export default UsingAPIContext(({
    data: {
        results,
    },
}) => (
    <>
        <Title>Marvel Character Card Viewer</Title>
        <Columns isMultiline>
            {
                results.map( (character) => <Character key={character.id} data={character}/>)
            }
        </Columns>
    </>
));
