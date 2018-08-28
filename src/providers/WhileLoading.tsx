import { branch, renderComponent } from "recompose";
import { APIContext } from "./WithAPIContext";
import styled from "styled-components";

const Loader = styled.div`
    background-color: red;
`;

const WhileLoading = (WrappedComponent: React.ComponentType) => branch(
    (props: APIContext) => props.data === null,
    renderComponent(Loader),
)(WrappedComponent);

export default WhileLoading;
