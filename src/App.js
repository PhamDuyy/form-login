import "./App.css";
import { RememberMe } from "./components/box/Remeberme";
import { Button } from "./components/button";
import { Infor } from "./components/infor";
import { Input } from "./components/input";

function App() {
  return (
    <div className="App">
      <Infor classname={"infor"} />
      <div>
        <Input classname={"input1"} type={Text} placehoder={"Username"} />
      </div>
      <div>
        <Input classname={"input2"} type={Text} placehoder={"Password"} />
      </div>
      <RememberMe classname={"checkboxx"} type={"checkbox"} />
      <Button classname={"btn"} />
    </div>
  );
}

export default App;
