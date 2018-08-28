import { getContext } from "recompose";
import { APIContext, APIPropTypes } from "./WithAPIContext";

export default getContext<APIContext>(APIPropTypes);
