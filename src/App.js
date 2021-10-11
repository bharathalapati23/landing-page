import './App.css';
import NavBar from './components/NavBar/NavBar'
import BrochureComponent from './components/BrochureComponent/BrochureComponent'
import DescriptionComponent from './components/DescriptionComponent/DescriptionComponent'
import PricingComponent from './components/PricingComponent/PricingComponent'
import ContactUsComponent from './components/ContactUsComponent/ContactUsComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrochureComponent />
      <DescriptionComponent />
      <PricingComponent />
      <ContactUsComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
