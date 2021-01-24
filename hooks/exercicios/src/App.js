import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseRef from "./UseRef";
import UseMemo from "./UseMemo";
import UserContext from './UserContext';
import UseContext from './UseContext';
import CustomHooks from "./CustomHooks";

export default function App() {
  return (
    <UserContext.Provider value={{nome: 'Kauan'}}>

        <UseState />
        <UseEffect />
        <UseRef />
        <UseMemo />
        <UseContext />
        <CustomHooks />

    </UserContext.Provider >
  );
}
