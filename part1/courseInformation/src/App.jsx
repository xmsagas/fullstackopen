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
  return (
    <div>
      <Part name={props.part1} number={props.exercises1}/>
      <Part name={props.part2} number={props.exercises2}/>
      <Part name={props.part3} number={props.exercises3}/>
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
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App