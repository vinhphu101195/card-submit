import { useContext } from "react";
import { paymentDataContext } from "./paymentProvider";

export const usePaymentData = () => {
  return useContext(paymentDataContext);
};
