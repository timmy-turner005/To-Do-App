

import Hello from "./components/Hello.js";
import Message from "./components/Message.js";
//import Build from "./components/Build.js";
import Handle from './components/Handle.js';
import Increase from './components/Increase';
import FunctionCounter from './components/FunctionCounter';
import Goods from './components/Goods';
import Form from './components/Form';
import Todo from './components/Todo';
import ModuleComponent from "./components/ModuleComponent";
function App() {
  return (
    <div className="App">
      <Form />
      <Todo />
      <Hello />
      <Goods />
      <h3>this is what we talking about</h3>
      <Message name="agba turner" food="semo and rice"/>
      <Handle />
      <Increase />
      <FunctionCounter />
      <ModuleComponent />
      
    </div>
  );
}


export default App;
