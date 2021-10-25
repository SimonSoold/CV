import React from "react"

export const DescListYear = ({subject, title, year, descriptions}) => (
    <div className="desc-list desc-list-year">
        <h5>{subject}</h5>
        <p>{year}</p>
        <dl>
            <dt>{title}</dt>
            <dd>
                {descriptions.map(description => <li key={description+3}>{description}</li>)}
            </dd>
        </dl>
    </div>
)
