import "./App.css";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { SnackbarProvider, useSnackbar } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider>
        <Navbar title="TextUtils" />
        <div className="container" style={{ marginTop: "30px" }}>
          <TextForm />
        </div>
      </SnackbarProvider>
    </>
  );
}

export default App;
