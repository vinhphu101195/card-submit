import React from "react";
import "./billPC.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePaymentData } from "../../../../paymentProvider/index";

const BillPC = (props) => {
  const { submitData } = usePaymentData();

  const selectActive = props.state
    ? props.state
    : {
        amount: "0",
        diamon: "0",
      };
  const initialValues = {
    seri: "",
    pin: "",
  };
  const onSubmit = (values, { resetForm }) => {
    console.log(submitData);
    console.log(values);
    resetForm({ values: "" });
    const submitObject = { ...submitData, ...values };
    console.log(JSON.stringify(submitObject, null, 4));
  };

  const validationSchema = Yup.object({
    seri: Yup.string()
      .min(11, "seri must be at least 11 number")
      .required("seri is required"),
    pin: Yup.string().required("pin is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form className="bill-pc" onSubmit={formik.handleSubmit}>
      <div className="bill-wrapper">
        <div className="payform">
          <h2 className="payform-title">Thông tin giao dịch</h2>
          <div className="payform-form">
            <div className="money">
              <h1>{selectActive.amount}đ</h1>
              <p>Nạp {selectActive.diamon} Kim Cương</p>
            </div>
            <div className="input">
              <div>Số seri:</div>
              <div>
                <input
                  type="text"
                  name="seri"
                  onChange={formik.handleChange}
                  value={formik.values.seri || ""}
                />
                {formik.errors.seri ? (
                  <div className="show-error">{formik.errors.seri}</div>
                ) : null}
              </div>
            </div>
            <div className="input">
              <div>Số thẻ:</div>
              <div>
                <input
                  type="text"
                  name="pin"
                  onChange={formik.handleChange}
                  value={formik.values.pin || ""}
                />
                {formik.errors.pin ? (
                  <div className="show-error">{formik.errors.pin}</div>
                ) : null}
              </div>
            </div>
            <div className="btn-row">
              <button
                type="submit"
                className={submitData.item_id === "" ? "disabled" : ""}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BillPC;
