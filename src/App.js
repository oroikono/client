import Header from "components/views/Header";
import AppRouter from "components/routing/routers/AppRouter";

/**
 * Happy coding!
 * React Template by Lucas Pelloni
 * Overhauled by Kyrill Hux
 */
const App = () => {
  return (
    <div>
      <Header height="100"/>
        <h1> <p align={center}> text-align: center; Let's create an aesthetic app </p>  </h1>
      <AppRouter/>
    </div>
  );
};

export default App;
