import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { DivInicial, TituloInicial } from "./styles";

const Home = () => {
	const history = useHistory();
	const [name, setName] = useState("");

	function handleOnSubmit(e) {
		e.preventDefault();
		history.push(`/users/${name}`);
	}

	return (
		<DivInicial>
			<form onSubmit={handleOnSubmit}>
				<TituloInicial>FindGithub</TituloInicial>

				<TextField
					value={name}
					onChange={(event) => setName(event.target.value)}
					label="Digite um nome de usuario"
					margin="normal"
					fullWidth
				/>
				<Button type="submit" variant="contained" color="primary" fullWidth>
					Pesquisar
				</Button>
			</form>
		</DivInicial>
	);
};

export default Home;
