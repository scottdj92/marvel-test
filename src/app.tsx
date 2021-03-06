import React from "react";
import { WithAPIContext } from "./providers";
import { Container } from "bloomer";
import { CardViewer } from "./components";

export default WithAPIContext(() => (
    <Container isFluid>
        <CardViewer/>
    </Container>
));
