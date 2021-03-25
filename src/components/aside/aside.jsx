import React from "react"
import { SkillItem } from "./skill-item.jsx"
import { InfoItem } from "./info-item.jsx"
import { LinkItem } from "./link-item.jsx"
import photo from "./Simon.jpg"

export const Aside = ({ info, links, skills }) => (
  <aside>
    <div className="img">
      <img src={photo} alt="Simon" />
    </div>
    <div className="info-list">
      <h3>Info</h3>
      <hr/>
      {Object.keys(info).map((item) => (
        <InfoItem key={item + 1} title={item} info={info[item]} />
      ))}
    </div>
    <div className="links-list">
      <h3>Länkar</h3>
      <hr/>
      {Object.keys(links).map((item) => (
        <LinkItem key={item + 2} title={item} link={links[item]} />
      ))}
    </div>
    <div className="skills-list">
      <h3>Skills</h3>
      <hr/>
      {Object.keys(skills).map((item) => (
        <SkillItem key={item + 3} skill={item} points={skills[item]} />
      ))}
    </div>
  </aside>
)
