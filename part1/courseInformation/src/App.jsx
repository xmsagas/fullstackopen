// Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

// header takes care of rendering the name of the course
const Header = ({ course }) => {
  return (
    <>
      <h1>{ course }</h1>
    </>
  )
}

// content renders the parts and their number of exercises
const Content = (props) => {
  let parts = props.parts;

  return (
    <div id="content">
      <Part name={parts[0].name} number={parts[0].exercises}/>
      <Part name={parts[1].name} number={parts[1].exercises}/>
      <Part name={parts[2].name} number={parts[2].exercises}/>
    </div>
  )
}

// Part components of which each renders the name and number of exercises of one part.
const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.number}
      </p>
    </>
  )
}

// total renders the total number of exercises
const Total = (props) => {
  let parts = props.parts;
  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises  + parts[2].exercises }</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App