import { toast } from "react-toastify";

const mockToastify = {
  success: jest.fn(),
  error: jest.fn(),
};

toast.success = mockToastify.success;
toast.error = mockToastify.error;

export default mockToastify;
