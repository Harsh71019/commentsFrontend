import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "./components/base/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container className="App">
        <h1> Comment Social</h1>
      </Container>
    </>
  );
}

export default App;
