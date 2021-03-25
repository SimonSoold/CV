import React from "react"

export const DescList = ({subject, title, descriptions}) => (
    <div className="desc-list">
        <h5>{subject}</h5>
        <dl>
            <dt>{title}</dt>
            <dd>
                {descriptions.map(description => <li key={description+3}>{description}</li>)}
            </dd>
        </dl>
    </div>
)