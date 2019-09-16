import React from 'react';
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import { Info } from "@material-ui/icons";

export default function Alert(props) {
    const { type, message } = props;
    return (
        <div>
            <SnackbarContent
                message={<span>{message}...</span>}
                close
                color={type}
                icon={Info}
            />
            <Clearfix />
        </div>
    );
}

