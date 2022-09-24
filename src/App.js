import "./App.css";
import Header from "./Components/Header/Header.js";
import TextForm from "./Components/TextForm/TextForm";

function App() {
  return (
    <>
      <Header name="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
