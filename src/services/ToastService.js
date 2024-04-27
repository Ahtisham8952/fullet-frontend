import { toast } from "react-toastify";

class ToastService {
  defaultToastConfig;
  constructor() {
    this.defaultToastConfig = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    };
  }

  config(options) {
    return { ...this.defaultToastConfig, ...options };
  }

  success(message, options) {
    toast.success(message, this.config(options));
  }

  error(message, options) {
    toast.error(message, this.config(options));
  }

  warning(message, options) {
    toast.warning(message, this.config(options));
  }

  info(message, options) {
    toast.info(message, this.config(options));
  }
}

export default new ToastService();
