import React from "react"
import "./App.scss"
import {
  info,
  links,
  skills,
  aboutOne,
  aboutTwo,
  utbildning,
  gymnasial,
  yrke,
} from "./cv.js"

import photo from "./Simon.jpg"
import DescList from "./components/desc-list.jsx"
import DescListYear from "./components/desc-list-year.jsx"
import SkillItem from "./components/skill-item.jsx"
import InfoItem from "./components/info-item.jsx"
import LinkItem from "./components/link-item.jsx"
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
          <p>{aboutOne}</p>
          <br />
          <p>{aboutTwo}</p>
        </article>
        <article className="study">
            <h3>Utbildning</h3>
            <hr />
            <h4>Högskola/YrkesHögskola</h4>
            {Object.keys(utbildning).map((program) => (
              <DescList
                subject={program}
                key={program[2] + 2}
                title={utbildning[program].program}
                descriptions={utbildning[program].desc}
              />
            ))}
            <h4>Gymnasial utbildning</h4>
            {Object.keys(gymnasial).map((program) => (
              <DescList
                subject={program}
                key={program[2] + 2}
                title={gymnasial[program].program}
                descriptions={gymnasial[program].desc}
              />
            ))}
          </article>
          <article className="work">
            <h3>Arbetslivserfarenhet</h3>
            <hr />
            {Object.keys(yrke).map((jobb) => (
              <DescListYear
                subject={jobb}
                key={jobb[2] + 2}
                title={yrke[jobb].title}
                descriptions={yrke[jobb].desc}
                year={yrke[jobb].year}
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
        {Object.keys(info).map((item) => (
        <InfoItem key={item + 1} title={item + ":"} info={info[item]} />
        ))}
        </div>
        <div className="links-list">
        <h3>Links</h3>
        <hr/>
        {Object.keys(links).map((item) => (
        <LinkItem key={item + 2} title={item} link={links[item]} />
        ))}
        </div>
        </div>
      </aside>
      <aside className="skillContainer">
        <div>
        <div className="skills-list">
        <h3>Skills</h3>
        <hr/>
        {Object.keys(skills).map((item) => (
          <SkillItem key={item + 3} skill={item} points={skills[item]} />
        ))}
        </div>
        </div>
      </aside>
    </div>
  )
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <Aside info={info} links={links} skills={skills} />
        <header>
          <h1>Simon Soold</h1>
          <h2>Javascript Developer Student</h2>
        </header>
        <main>
          <article className="about">
            <h3>Kort om mig</h3>
            <hr />
            <p>{aboutOne}</p>
            <br />
            <p>{aboutTwo}</p>
          </article>
          <article>
            <h3>Utbildning</h3>
            <hr />
            <h4>Högskola/YrkesHögskola</h4>
            <hr />
            {Object.keys(utbildning).map((program) => (
              <DescList
                subject={program}
                key={program[2] + 2}
                title={utbildning[program].program}
                descriptions={utbildning[program].desc}
              />
            ))}
            <h4>Gymnasial utbildning</h4>
            <hr />
            {Object.keys(gymnasial).map((program) => (
              <DescList
                subject={program}
                key={program[2] + 2}
                title={gymnasial[program].program}
                descriptions={gymnasial[program].desc}
              />
            ))}
          </article>
          <article>
            <h3>Arbetslivserfarenhet</h3>
            <hr />
            {Object.keys(yrke).map((jobb) => (
              <DescListYear
                subject={jobb}
                key={jobb[2] + 2}
                title={yrke[jobb].title}
                descriptions={yrke[jobb].desc}
                year={yrke[jobb].year}
              />
            ))}
          </article>
        </main>
      </div>
    )
  }
}
*/
export default App
