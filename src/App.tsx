import Hero from "./components/Hero/Background-pattern";
import Navbar04Page from "./components/navbar-04/navbar-04";
import Team from "./components/ui/team";
import Blog from "./components/ui/Blog/blog";
import Contact from "./components/ui/Contact/contact";
import { DropdownMenu } from "./components/ui/dropdown-menu";
import Footer from "./components/ui/Footer/footer";
function App() {
  return (
    <>
      <Navbar04Page />
      <DropdownMenu>
        <Hero />
      </DropdownMenu>
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
