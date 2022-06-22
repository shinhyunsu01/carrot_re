import { useState } from "react";

interface useMutationState<T> {
	loading: boolean;
	data?: T;
	error?: object;
}

type UseMutationResult<T> = [(data: any) => void, useMutationState<T>];

export default function useMutation<T = any>(
	url: string
): UseMutationResult<T> {
	/*const [loading, setLoading] = useState(false);
	const [data, setData] = useState<undefined | any>(undefined);
	const [error, setError] = useState<undefined | any>(undefined);
*/
	const [state, setState] = useState({
		loading: false,
		data: undefined,
		error: undefined,
	});
	function mutation(data?: any) {
		setState((prev) => ({ ...prev, loading: true }));

		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json().catch(() => {}))
			.then((data) => setState((prev) => ({ ...prev, data })))
			.catch((error) => setState((prev) => ({ ...prev, error })))
			.finally(() => setState((prev) => ({ ...prev, loading: false })));
		//.then((json) => setData(json)); 위에 는 축약
	}

	return [mutation, { ...state }];
}
