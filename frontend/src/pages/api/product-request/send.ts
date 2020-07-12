import { NextApiRequest, NextApiResponse } from 'next';
import shopSendEmail from '../email/shopSendEmail';
import API_AXIOS from '../../../API_AXIOS';

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