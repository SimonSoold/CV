import React from "react"


export const InfoItem = ({title, info}) => (
    <dl className="info-item">
        <dt>{title}</dt>
        <dd>{info}</dd>
    </dl>
)