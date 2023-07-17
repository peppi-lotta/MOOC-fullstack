const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  );
}

const Content = (props) => {
  let parts = props.parts;
  let exercises_count = 0;
  let partsHtml = parts.map(function(part){
    exercises_count = exercises_count + part.exercises;
    return <Part key={part.id} name={part.name} exercises={part.exercises} />;
  });

  return (
    <>
      {partsHtml}
      <Total total={exercises_count} />
    </>
  );
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  );
}

const CourseInformation = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      id: 1,
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id: 3,
      name: 'State of a component',
      exercises: 14
    }
  ];



  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
    </>
  )
}

export default CourseInformation