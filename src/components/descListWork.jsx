import React from "react"

const DescListWork = ({subject, title, year, descriptions}) => (
    <div className="descListWork">
        <h5>{subject}</h5>
        <p className="year">{year}</p>
        <dl>
            <dt>{title}</dt>
            <dd>
                {descriptions.map(description => <li key={description+3}>{description}</li>)}
            </dd>
        </dl>
    </div>
)

export default DescListWork