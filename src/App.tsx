import { Aboutme } from './Aboutme';
import './App.css';
import { Footer } from './FooterProps';
import { AppUser } from './state/state.example';

const user = { userName: 'User'}
const App = () => (
<div className="App">
     <h1> Welcome! {user.userName}</h1>
     <AppUser/>
     <Aboutme/>
     <Footer copyright='C'/>
    </div>
)


export default App;
