import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Initial from "./pages/Initial";
import Pagina404 from "./pages/Erro404";
import { Globalstyle } from "./components/index";
import "fontsource-roboto";
import { TabProvider } from "./common/context/Tab";

function App() {
	return (
		<>
			<Globalstyle />
			<BrowserRouter>
				<TabProvider>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/users/:user" component={Initial} />
						<Route path="" component={Pagina404} />
					</Switch>
				</TabProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
