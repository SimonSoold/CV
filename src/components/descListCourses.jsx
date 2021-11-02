import React from "react"

const DescListCourses = ({subject, hp, year}) => (
    <div className="desc-list desc-list-courses">
        <dd>
            <li>{subject} {hp}</li>
        </dd>
        <p>{year}</p>
    </div>
)

export default DescListCourses