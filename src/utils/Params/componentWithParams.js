import { useParams } from "react-router-dom";
import React from "react";

export function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
