function Header({course}) {
  return <h1>{course}</h1>
}

function Part({part, exercises}) {
  return <p>{part} {exercises}</p>
}

function Content({parts}) {
  return (
    <div>
      {parts.map(section => <Part part={section.name} exercises={section.exercises}/>)}
    </div>
  )
}

function Total({parts}) {
  return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
}

function App() {
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