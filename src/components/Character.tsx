import React from "react";
import styled from "styled-components";
import { Character } from "../../models";
import {
    Title,
    Content,
    Card,
    CardImage,
    CardContent,
    Image,
    Column,
    CardFooter,
    CardFooterItem,
} from "bloomer";
import Description from "./Description";

const CardWrapper = styled(Card)`
    border: 1px solid gray;
    padding: 5px;
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
                <CardFooterItem>Sell</CardFooterItem>
                <CardFooterItem>Share</CardFooterItem>
                <CardFooterItem>Delete</CardFooterItem>
            </CardFooter>
        </CardWrapper>
    </Column>
);

export default CharacterCard;
