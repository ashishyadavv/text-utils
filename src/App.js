import "./App.css";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container" style={{ marginTop: "30px" }}>
        <TextForm />
      </div>
    </>
  );
}

export default App;
