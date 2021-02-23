import { useEffect } from "react";
import router from "next/router";

const Redirect = () => {
  useEffect(() => {
    router.push('/');
  }, []);
  return null;
};

export default Redirect;