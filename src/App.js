import Todo from "./components/Todo";
import data from "./data.json";

const App = () => {
  return (
    <>
      <h1>My Todos</h1>

      {data.map((d) => {
        return (
          <>
            <Todo key={d.id} title={d.title} />
          </>
        );
      })}
    </>
  );
};
export default App;
