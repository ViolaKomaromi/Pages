
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import Posts from './Pages/Posts';
import NotFound from './Pages/NotFound';
import LayOut from './components/Layout';


function App() {

  return (


    <LayOut>

      <main className="Pages">
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/about" component={About} />

          <Route exact path="/contact">
            <Contact name="test name prop" />
          </Route>

          <Route exact path="/posts">
            <Posts />
          </Route>

          <Route exact component={NotFound}>

          </Route>
        </Switch>

      </main>




    </LayOut>
  );
}

export default App;
