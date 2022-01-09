
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Initial from './pages/Initial';
import Pagina404 from './pages/Erro404';
import { Globalstyle } from './components/index';
import 'fontsource-roboto';
import { TabProvider } from './common/context/Tab'

function App() {
  	return (
		<>
			<Globalstyle/>
			<BrowserRouter>
				<Switch>
					<TabProvider>
						<Route exact path="/" component={Home}/>
						<Route path="/users/:user" component={Initial}/>
					</TabProvider>	
					<Route path=""component={Pagina404}/>
				</Switch>
			</BrowserRouter>
		</>
  	)
}

export default App;
