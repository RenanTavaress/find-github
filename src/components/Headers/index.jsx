import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../api/api";
import { Header } from "./styles";
import { TituloInicial } from "../../pages/Home/styles";

const Headers = () => {
	const { user } = useParams();
	const [id, setId] = useState("");

	useEffect(() => {
		api.get(`/users/${user}`).then((response) => {
			setId(response.data.avatar_url);
		});
	}, [user]);

	return (
		<Header>
			<TituloInicial>Bem vindo ao github do {user}</TituloInicial>
			<div align="center">
				<Avatar
					alt="Logo"
					src={id}
					style={{
						top: "5px",
						margin: "20px",
						height: "70px",
						width: "70px",
					}}
				/>
			</div>
		</Header>
	);
};

export default Headers;
