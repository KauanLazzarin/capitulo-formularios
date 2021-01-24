import GlobalContext from './GlobalContext';
import { GlobalValues } from './GlobalValues';
import Produtos from './Produtos';

export default function App() {
  return (
    <GlobalContext.Provider value={GlobalValues}>
      <Produtos />
    </GlobalContext.Provider>
  );
}