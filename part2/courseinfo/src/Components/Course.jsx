const Header = ({ course }) => <h1>{course.name}</h1>

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        </div>
    )
}

const Total = ({ course }) => {
    const totalSum = course.parts.reduce((sum, exercise) => sum + exercise.exercises, 0)
    return (
        <b>total of {totalSum} exercises</b>
    )
}

const Course = ({ courses }) => {
    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <Header course={course} />
                    <Content course={course} />
                    <Total course={course} />
                </div>
            ))}
        </div>
    )
}

export default Course