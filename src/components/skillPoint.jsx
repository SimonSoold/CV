import React from "react"

const SkillPoint = ({points}) => (
<svg width="72" height="8" viewBox="0 0 72 8" points="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="4" r="3.5" stroke="black" fill={points >= 1 ? "black" : "none"}/>
<circle cx="20" cy="4" r="3.5" stroke="black" fill={points >= 2 ? "black" : "none"}/>
<circle cx="36" cy="4" r="3.5" stroke="black" fill={points >= 3 ? "black" : "none"}/>
<circle cx="52" cy="4" r="3.5" stroke="black" fill={points >= 4 ? "black" : "none"}/>
<circle cx="68" cy="4" r="3.5" stroke="black" fill={points >= 5 ? "black" : "none"}/>
</svg>
)

export default SkillPoint