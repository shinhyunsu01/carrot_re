import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
	username: string;
	password: string;
	email: string;
	errors?: string;
}

export default function Forms() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setError,
		setValue,
		reset,
		resetField,
	} = useForm<LoginForm>({
		mode: "onChange",
	});

	const onValid = (data: LoginForm) => {
		console.log(data);
		setError("errors", { message: "backend is offline sorry." });
	};
	const onInvalid = (erros: FieldErrors) => {
		console.log(erros);
	};

	return (
		<form onSubmit={handleSubmit(onValid, onInvalid)}>
			<input
				{...register("username", {
					required: "Username is required",
					minLength: {
						message: "the username should be longer than 5 characters",
						value: 5,
					},
				})}
				type="text"
				placeholder="Username"
			/>
			<input
				{...register("email", {
					required: true,
					validate: {
						notGmail: (value) =>
							!value.includes("@gmail.com") || "Gmail is not allowed",
					},
				})}
				type="email"
				placeholder="Email"
			/>
			<input
				{...register("password", { required: true })}
				type="password"
				placeholder="Password"
			/>
			<input type="submit" value="Create Account" />
			{errors.errors?.message}
		</form>
	);
}
