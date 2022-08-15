import TitleSection from './TitleSection';
import Features from './Features';
import Goals from './Goals';
import Events from './Events';
import Footer from '../components/Footer';
import PaymentMethod from './PaymentMethod';
import 'semantic-ui-css/semantic.min.css';


function App(){
    return(
        <div>
            <TitleSection />
            <Features />
            <Goals />
            <Events />
            <PaymentMethod />
            <Footer />

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            
        </div>
    );
}

export default App;