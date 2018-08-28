import PropTypes from "prop-types";
import { compose, withContext } from "recompose";
import WithData from "./WithData";
import WhileLoading from "./WhileLoading";

export const APIPropTypes = {
    data: PropTypes.object,
};

export interface APIContext {
    data: {
        // type response here
    };
}

const context = withContext<APIContext, APIContext>(
    APIPropTypes,
    ({ data }) => ({
        data,
    }),
);

export default compose(
    WithData,
    WhileLoading,
    context,
);
