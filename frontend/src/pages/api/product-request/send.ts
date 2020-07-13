import { NextApiRequest, NextApiResponse } from 'next';
import shopSendEmail from '../email/shopSendEmail';
import API_AXIOS from '../../../API_AXIOS';
import Cors from 'cors';

function initMiddleware(middleware: any) {
	return (req: any, res: any) =>
		new Promise((resolve, reject) => {
			middleware(req, res, (result: any) => {
				if (result instanceof Error) {
					return reject(result);
				}
				return resolve(result);
			})
		})
}

const cors = initMiddleware(
	// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
	Cors({
		// Only allow requests with GET, POST and OPTIONS
		methods: ['GET', 'POST', 'OPTIONS'],
	});
)


const createProductRequest = async (design: string, name: string, email: string, description: string) => {
	const body = {
		design,
		name,
		email,
		description
	};
	const { data } = await API_AXIOS.post('/product-request-infos', body);
	return data._id;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	await cors(req, res);
	const { body } = req;
	try {
		const requestID = await createProductRequest(body.product.id, body.name, body.email, body.description);
		console.log(requestID);
		const info = await shopSendEmail(body);
		res.status(200).send(info);
	} catch (error) {
		res.status(500).send({ error });
	}

}