import Anecdotes from "./Anecdotes/Anecdotes";
import CourseInformation from "./CourseInformation/CourseInformation";
import Unicafe from "./Unicafe/Unicafe";

const App = () => {
  return (
    <>
      <h1>Anekdootit</h1>
      <Anecdotes />
      <h1>Kurssitiedot</h1>
      <CourseInformation />
      <h1>Unicafe</h1>
      <Unicafe />
    </>
  )
}

export default App