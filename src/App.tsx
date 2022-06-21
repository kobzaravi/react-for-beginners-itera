import { Aboutme } from './Aboutme';
import './App.css';
import { Footer } from './FooterProps';

const user = { userName: 'User'}
const App = () => (
<div className="App">
     <h1> Welcome! {user.userName}</h1>
     <Aboutme/>
     <Footer copyright='C'/>
    </div>
)


export default App;
