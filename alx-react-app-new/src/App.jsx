import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';


function App() {
    return (
        <>
            <Header />
            <WelcomeMessage />
            <MainContent />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Footer />
        </>
    );
}

export default App;
