import Checkbox from "./Checkbox";
import Form from "./form/Form";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Textarea from "./Textarea";
import Validacao from "./Validacao";

export default function App() {
  return (
    <div className="App">
      <h1>Formularios</h1>
      <Input />
      <Textarea />
      <Select />
      <Radio />
      <Checkbox />
      <Form/>
      <Validacao />
    </div>
  );
}


