import logo from './logo.svg'
import './Home.css'
function Home() {
    return(
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Welcome to Argos
            </p>
        </header>
        </div>
    );
}
export default Home;
