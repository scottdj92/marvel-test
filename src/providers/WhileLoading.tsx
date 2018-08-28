import { branch, renderComponent } from "recompose";
import { APIContext } from "./WithAPIContext";
import styled from "styled-components";
import Loader from "./Loader";

const WhileLoading = (WrappedComponent: React.ComponentType) => branch(
    (props: APIContext) => props.data === null,
    renderComponent(Loader),
)(WrappedComponent);

export default WhileLoading;
