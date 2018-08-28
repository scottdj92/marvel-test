import React from "react";
import truncate from "truncate";
import styled from "styled-components";

interface Props {
    text: string;
}

const Description: React.SFC<Props> = ({ text }) => {
    if (text === "") {
        return (<i>No description available</i>);
    }

    return (
        <p>{truncate(text, 160)}</p>
    );
};

export default Description;
