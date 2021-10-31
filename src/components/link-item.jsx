import React from "react"

const LinkItem = ({title, link}) => (
    <a className="link-item" href={link} target="_blank" rel="noreferrer">{title}</a>
)

export default LinkItem