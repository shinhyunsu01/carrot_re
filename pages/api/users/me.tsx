import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
	interface IronSessionData {
		user?: {
			id: number;
		};
	}
}

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	console.log(req.session.user);
	const profile = await client.user.findUnique({
		where: {
			id: req.session.user?.id,
		},
	});
	res.json({
		ok: true,
		...profile,
	});
}

export default withIronSessionApiRoute(withHandler("GET", handler), {
	cookieName: "carrotsession",
	password: "wafawp9iawef09armv09awer09aw8e0ar8v0ar8vwa09v8aw09c8a0cw80",
});
