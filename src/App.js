import Header from "./Components/Header/Header";
import Button from "./Components/UI/Button/Button";
import PageTitle from "./Components/UI/PageTitle/PageTitle";

const App = () => {

  return(
    <>
    <Header />
    <PageTitle count={ 0 } title='Task' />
    <Button>New Task</Button>
    </>
  );
};

export default App;