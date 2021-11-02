import React from "react"


const InfoItem = ({title, info}) => (
    <dl className="info-item">
        <dt>{title}</dt>
        <dd>{info}</dd>
    </dl>
)

export default InfoItem