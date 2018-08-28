import React from "react";
import styled from "styled-components";
import { Character } from "../../models";
import {
    Title,
    Card,
    CardImage,
    CardContent,
    Image,
    Column,
    CardFooter,
    CardFooterItem,
} from "bloomer";
import Description from "./Description";
import { transitions } from "polished";

const CardWrapper = styled(Card)`
    border: 1px solid gray;
    padding: 5px;
`;

const SellButton = styled(CardFooterItem)`
    ${transitions(["color", "background-color", "0.1s ease-in"])}
    &:hover {
        background-color: gray;
        color: whitesmoke;
        cursor: pointer;
    };
`;

const ShareButton = styled(CardFooterItem)`
    ${transitions(["color", "background-color", "0.1s ease-in"])}
    color: blueviolet;
    &:hover {
        background-color: blueviolet;
        color: whitesmoke;
        cursor: pointer;
    };
`;

const DeleteButton = styled(CardFooterItem)`
    ${transitions(["color", "background-color", "0.1s ease-in"])}
    color: red;
    &:hover {
        background-color: red;
        color: whitesmoke;
        cursor: pointer;
    };
`;

interface Props {
    data: Character;
}

const CharacterCard: React.SFC<Props> = ({ data: { name, description, thumbnail }}) => (
    <Column isSize={{ mobile: 12, desktop: 4 }}>
        <CardWrapper>
            <CardImage>
                <Image isRatio="4:3" src={`${thumbnail.path}.${thumbnail.extension}`}/>
            </CardImage>
            <CardContent>
                <Title>{name}</Title>
                <Description text={description}/>
            </CardContent>
            <CardFooter>
                <SellButton>Sell</SellButton>
                <ShareButton>Share</ShareButton>
                <DeleteButton>Delete</DeleteButton>
            </CardFooter>
        </CardWrapper>
    </Column>
);

export default CharacterCard;
