import React from "react"
import "./App.scss"
import photo from "./Simon.jpg"
import DescListWork from "./components/descListWork.jsx"
import DescListSchool from "./components/descListSchool"
import SkillItem from "./components/skillItem.jsx"
import InfoItem from "./components/infoItem.jsx"
import LinkItem from "./components/linkItem.jsx"
import CV from "./cv.json"

const App = () => {
  return (
    <div className="App">
      <header>
        <article>
          <h1>Simon Soold</h1>
          <h2>JavaScript-utvecklare</h2>
        </article>
      </header>
      <div className="img">
        <img src={photo} alt="Simon" />
      </div>
      <main>
        <div>
        <article className="about">
          <h3>Kort om mig</h3>
          <hr />
          <p>{CV[0].about[0]}</p>
          <br />
          <p>{CV[0].about[1]}</p>
        </article>
        <article className="study">
            <h3>Utbildning</h3>
            <hr />
            <h4>Högskola/YrkesHögskola</h4>
            <DescListSchool
            props={CV[0].utbildning.hogskola}
            />
            <h4>Gymnasial utbildning</h4>
            {
            <DescListSchool
            props={CV[0].utbildning.gymnasial}
            />   
            }
          </article>
          <article className="work">
            <h3>Arbetslivserfarenhet</h3>
            <hr />
            {Object.keys(CV[0].yrke).map((jobb) => (
              <DescListWork
                subject={jobb}
                key={jobb[2] + 2}
                title={CV[0].yrke[jobb].title}
                descriptions={CV[0].yrke[jobb].desc}
                year={CV[0].yrke[jobb].year}
              />
            ))}
          </article>
        </div>
      </main>
      <aside className="infoContainer">
        <div>
        <div className="info-list">
        <h3>Info</h3>
        <hr/>
        {Object.keys(CV[0].info).map((item) => (
        <InfoItem key={item + 1} title={item + ":"} info={CV[0].info[item]} />
        ))}
        </div>
        <div className="links-list">
        <h3>Links</h3>
        <hr/>
        {Object.keys(CV[0].links).map((item) => (
        <LinkItem key={item + 2} title={item} link={CV[0].links[item]} />
        ))}
        </div>
        </div>
      </aside>
      <aside className="skillContainer">
        <div>
        <div className="skills-list">
        <h3>Skills</h3>
        <hr/>
        {Object.keys(CV[0].skills).map((item) => (
          <SkillItem key={item + 3} skill={item} points={CV[0].skills[item]} />
        ))}
        </div>
        </div>
      </aside>
    </div>
  )
}

export default App
