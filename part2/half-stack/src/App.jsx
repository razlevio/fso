function Header({course}) {
  return <h1>{course}</h1>
} 

function Title({title}) {
  return <h3>{title}</h3>
}

function Part({part, exercises}) {
  return <p>{part} ~ {exercises}</p>
}

function Content({parts}) {
  return (
    <div>
      {parts.map(section => <Part key={section.id} part={section.name} exercises={section.exercises}/>)}
    </div>
  )
}

function Course({course}) {
  return (
    <>
      <Title title= {course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
};

function Total({parts}) {
  let numOfExercises = parts.reduce((acc, part) => acc + part.exercises, 0);
  return <p><strong>Number of exercises {numOfExercises}</strong></p>
}

function App() {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div className="flex justify-center items-center flex-col p-5 gap-10">
      <Header course={"Web Development Curriculum"} />
      {courses.map(course => <Course course={course} />)}
    </div>
  )
}

export default App