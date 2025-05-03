const Header = ({ name }) => <h1>{name}</h1>

const Part = ({ name, exercises, key }) => <p {...key}>{name} {exercises}</p>

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </div>
  )
}


const Total = ({ course }) => {
  const totalSum = course.parts.reduce((sum, exercise) =>  sum + exercise.exercises, 0)
  return (
    <p>Number of exercises {totalSum}</p>
  )
}


const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}


const App = () => {
  const course = {
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
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App