import React from "react";
import styled, { keyframes } from "styled-components";
import { Title } from "bloomer";

const fadeInOut = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

const Wrapper = styled.div`
    animation: ${fadeInOut} 1.5s linear infinite;
`;

const LoadingText = styled(Title)`
    margin-top: 15px;
    text-align: center;
`;

const Loader: React.SFC = () => (
    <Wrapper>
        <LoadingText>Loading Characters...</LoadingText>
    </Wrapper>
);

export default Loader;
