import React from "react"
import SkillPoint from "./skillPoint.jsx"

const SkillItem = ({skill, points}) => (
    <div className="skill-item">
        <label>{skill}</label>
        <SkillPoint points={points} />
    </div>
)

export default SkillItem