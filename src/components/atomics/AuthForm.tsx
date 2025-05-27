import { type JSX, useState } from "react";
import BaseButton from "./BaseButton";
import con from "../../connection.json";

function AuthForm(): JSX.Element {
	type authForm = { username: string; password: string; email?: string };

	const url = (...parts: string[]): string => {
		const build = `${con.base}://${con.host}:${con.port}`;
		if (parts.length === 0) {
			return build;
		}
		return `${build}/${parts.join("/")}`;
	};

	const [isLogin, setLoggedIn] = useState(true);
	function handleLogin(state: boolean) {
		setLoggedIn(!state);
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
	}

	/**
	 * Send request to save user
	 * @param event Submit button click
	 */
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const uri = url("user");

		try {
			const response = await fetch(uri, {
				method: "POST",
				body: JSON.stringify(formData),
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				credentials: "include",
			});

			if (!response.ok) {
				// handle error
			}

			switch (response.status) {
				case 200:
					return;
			}
		} catch (e: any) {
			// TODO
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-y-4 max-w-sm mx-auto text-xl "
			>
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
