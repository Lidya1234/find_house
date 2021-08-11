import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Notify = () => {
  toast.success('Action succeeded', { autoClose: 3000 });
};

export default Notify;
