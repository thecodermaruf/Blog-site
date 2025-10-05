import Hero from "./components/Hero/Background-pattern";
import Navbar04Page from "./components/navbar-04/navbar-04";
import { DropdownMenu } from "./components/ui/dropdown-menu";

function App() {
  return (
    <>
      <Navbar04Page />
      <DropdownMenu>
        <Hero />
      </DropdownMenu>
    </>
  );
}

export default App;
