import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

import { withIronSessionApiRoute } from "iron-session/next";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const { token } = req.body;
	const exists = await client.token.findUnique({
		where: {
			payload: token,
		},
		include: {
			user: true,
		},
	});
	if (!exists) res.status(404).end();
	req.session.user = {
		id: exists?.userId,
	};
	await req.session.save();
	res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
	cookieName: "carrotsession",
	password: "wafawp9iawef09armv09awer09aw8e0ar8v0ar8vwa09v8aw09c8a0cw80",
});
