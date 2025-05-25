import { type JSX, useState } from "react";
import BaseButton from "./BaseButton";

function AuthForm(): JSX.Element {
	type authForm = { username: string; password: string; email?: string };

	const [isLogin, setLoggedIn] = useState(true);
	function handleLogin(state: boolean) {
		setLoggedIn(!state);
	}

	const [errorMessage, setErrorMessage] = useState("");
	function handleErrorMessage(message: string) {
		setErrorMessage(message);
	}

	const _formData: authForm = {
		username: "",
		password: "",
		email: "",
	};

	const [formData, setFormData] = useState(_formData);

	function handleFormDataChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		setFormData((previousState) => ({ ...previousState, [name]: value }));
		setErrorMessage("");
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const uri =
			"http://localhost:8080/servlet/" + (isLogin ? "login" : "signup");

		fetch(uri, {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			credentials: "include",
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}

				console.debug(response);
				if (response.status == 201) {
					/* Registration successful */
					handleLogin(isLogin);
					return;
				} else if (response.status == 200) {
					/* Login successful */
					window.location.href = "http://localhost:8080/servlet/personal/files";
					return;
				}
			})
			.catch((e: Error) => {
				handleErrorMessage("Error while trying auth");
				console.error(
					new Error(
						`[${new Date()}] - Error> - [Name: ${e.name}; Message: ${
							e.message
						};]\nStacktrace: ${e.stack}`
					)
				);
			});
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-y-4 max-w-sm mx-auto text-xl "
			>
				{errorMessage && (
					<p className="text-red-500 text-center font-medium">{errorMessage}</p>
				)}
				<input
					type="text"
					name="username"
					value={formData.username}
					placeholder="Username"
					onChange={handleFormDataChange}
					className="border border-gray-300 rounded px-3 py-2"
				></input>
				{!isLogin ? (
					<input
						type="email"
						name="email"
						value={formData.email}
						placeholder="Email"
						onChange={handleFormDataChange}
						className="border border-gray-300 rounded px-3 py-2"
					></input>
				) : null}
				<input
					type="password"
					name="password"
					value={formData.password}
					placeholder="Password"
					onChange={handleFormDataChange}
					className="border border-gray-300 rounded px-3 py-2"
				></input>

				<BaseButton title="Submit" text="Submit" type="submit" />

				<BaseButton
					title={!isLogin ? "Log in" : "Sign up"}
					text={!isLogin ? "Log in" : "Sign up"}
					type="button"
					action={() => handleLogin(isLogin)}
				/>
			</form>
		</>
	);
}

export default AuthForm;
