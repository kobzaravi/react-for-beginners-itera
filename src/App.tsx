import './App.css';
import { Footer } from './FooterProps';

const user = { userName: 'Vitaliy'}
const App = () => (
<div className="App">
     <h1> hello world {user.userName}</h1>
     <Footer copyright='C'/>
    </div>
)


export default App;
