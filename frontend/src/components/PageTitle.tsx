import React from 'react'
import { Typography } from '@material-ui/core'

export default function PageTitle({ light, bold }: IPageTitleProps) {
    return (
        <Typography variant="h1" color="textPrimary" align='center' className="pageTitle">
            <span style={{ fontWeight: 100 }}>{light}</span>{bold}
        </Typography>
    );
}
