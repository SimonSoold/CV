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
import { Aside } from "./components/aside/aside.jsx"
import { DescList } from "./components/main/desc-list.jsx"
import { DescListYear } from "./components/main/desc-list-year.jsx"

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
      </main>
      <Aside info={info} links={links} skills={skills} />
      <footer>

      </footer>
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
