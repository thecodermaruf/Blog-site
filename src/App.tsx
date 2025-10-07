import Hero from "./components/Hero/Background-pattern";
import Team from "./components/ui/team/team";
import Blog from "./components/ui/Blog/blog";
import Contact from "./components/ui/Contact/contact";
import { DropdownMenu } from "./components/ui/dropdown-menu";
import Footer from "./components/ui/Footer/footer";
import Navbar from "./components/navbar-04/navbar-04";
function App() {
  return (
    <>
      <Navbar />
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
