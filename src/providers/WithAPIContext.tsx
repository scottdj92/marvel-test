import PropTypes from "prop-types";
import { compose, withContext } from "recompose";
import WithData from "./WithData";
import WhileLoading from "./WhileLoading";
import { Character } from "../../models";

export const APIPropTypes = {
    data: PropTypes.shape({
        limit: PropTypes.number,
        results: PropTypes.arrayOf(PropTypes.shape({
            comics: PropTypes.shape({
                available: PropTypes.number,
                items: PropTypes.arrayOf(PropTypes.shape({
                    name: PropTypes.string,
                    resouceURI: PropTypes.string,
                })),
            }),
            description: PropTypes.string,
            id: PropTypes.number,
            name: PropTypes.string,
            thumbnail: PropTypes.shape({
                extension: PropTypes.string,
                path: PropTypes.string,
            }),
        })),
    }),
};

export interface APIContext {
    data: {
        limit?: number,
        results?: Character[],
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
