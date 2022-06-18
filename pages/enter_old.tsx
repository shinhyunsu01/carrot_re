import { useState } from "react";
import { useForm } from "react-hook-form";
import { cls } from "../libs/client/utils";

interface EnterForm {
	email?: string;
	phone?: string;
}

export default function Enter() {
	const [method, setMethod] = useState<"email" | "phone">("email");
	const onEmailClick = () => setMethod("email");
	const onPhoneClick = () => setMethod("phone");

	return (
		
	);
}
