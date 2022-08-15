import connectMongo from '../../../utils/ConnectMongo';
import User from '../../../models/userModel';
import SuccessModal from '../../../components/Successmodal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addUser(req, res) {
    console.log("from add.js");
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const user = await User.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ user });
    

  } catch (error) {
    console.log("heree");
    console.log(error);
    res.json({ error });
  }
}
