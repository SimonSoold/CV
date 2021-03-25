import React, { Component } from "react"
import "./App.css"
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
import { Aside } from "./components/aside/aside.jsx"
import { DescList } from "./components/main/desc-list.jsx"
import { DescListYear } from "./components/main/desc-list-year.jsx"

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
                title={utbildning[program].school}
                descriptions={utbildning[program].desc}
              />
            ))}
            <h4>Gymnasial utbildning</h4>
            <hr />
            {Object.keys(gymnasial).map((program) => (
              <DescList
                subject={program}
                key={program[2] + 2}
                title={gymnasial[program].school}
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

export default App
