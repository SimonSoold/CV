import React from "react"

const DescListScool = ({props}) => {
    return (
    <div className="descListSchool">
        {
        props.program.map(program => (
        <div className="programList">
            <h5>{program.school}</h5>
            <dl>
                <dt>
                    {program.name}
                </dt>
                {
                    program.desc.map(desc => (
                        <dd>{desc}</dd>
                    ))
                }
            </dl>
        </div>
        ))             
        }
        {
        props.courses.map(courses => (
        <div className="courseList">
            <h5>{courses.school}</h5>
            {
                courses.courses.map(course => (
                <dl>
                    <dt>{course.name} - {course.points}</dt>
                    <dd>{course.year}</dd>
                </dl>
                ))
            }
        </div>
        ))
        }
    </div>
    )
}

export default DescListScool