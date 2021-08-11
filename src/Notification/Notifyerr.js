import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Notifyerr = () => {
  toast.error('Failed to sign up, hint: username must at least be 4 characters', { autoClose: 6000 });
};

export default Notifyerr;
