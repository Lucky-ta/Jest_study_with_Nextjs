import React from "react";
import * as HeadingComponent from './index';

function WarningValidation({ fieldName }) {
    return <HeadingComponent.WarningName>{`${fieldName} is required`}</HeadingComponent.WarningName>
};

export default WarningValidation;
