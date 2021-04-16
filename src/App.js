
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import 'fontsource-roboto';
import Initial from './pages/Initial/Initial';



function App() {
  	return (
   	<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/users/:user" component={Initial}/>
			</Switch>
   	</BrowserRouter>
  	)
  
}

export default App;
