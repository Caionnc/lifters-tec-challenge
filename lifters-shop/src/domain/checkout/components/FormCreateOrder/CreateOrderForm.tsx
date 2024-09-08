import React, { useContext, useEffect, useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import styles from "../../Checkout.module.scss";
import { FontSize, FontWeight } from "@/components/UI/Typography/data";
import Typography from "@/components/UI/Typography";
import { LifterShopContext } from "@/context/shop";
import { enqueueSnackbar } from "notistack";

const CheckoutForm: React.FC = () => {
  const { liftersShop } = useContext(LifterShopContext);
  const [acc, setAcc] = React.useState<number>(0);

  const totalCartPrice = useMemo(() => {
    return liftersShop.cart?.reduce(
      (acc, product) => acc + Number(product.price),
      0
    );
  }, [liftersShop.cart]);

  useEffect(() => {
    setAcc(totalCartPrice ?? 0);
  }, [liftersShop.cart]);

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cardholderName: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      termsAccepted: false,
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .matches(
          /^(?:\d{4} ?){3}\d{3,4}$/,
          "Card number must be 15 or 16 digits"
        )
        .required("Card number is required"),
      cardholderName: Yup.string()
        .required("Cardholder name is required")
        .test(
          "full-name",
          "Invalid carholder name",
          (value) => {
            if (!value) return false;
            const trimmedName = value.trim();
            const words = trimmedName.split(/\s+/);
            return words.length >= 2 && words.every((word) => word.length >= 3);
          }
        ),
      expiryMonth: Yup.string().required("Expiry month is required"),
      expiryYear: Yup.string().required("Expiry year is required"),
      cvv: Yup.string()
        .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits")
        .required("CVV is required"),
      termsAccepted: Yup.boolean().oneOf([true], "You must accept the terms"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={`${styles["checkout-form-container"]}`}>
      <div className="d-flex flex-row justify-content-between">
        <Typography
          size={FontSize.XLG}
          fontWeight={FontWeight.NORMAL}
          variant="publicSans"
          color="white"
        >
          Total:
        </Typography>
        <Typography
          size={FontSize.XLG}
          fontWeight={FontWeight.BOLD}
          variant="publicSans"
          color="white"
        >
          {`$${totalCartPrice}`}
        </Typography>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {/* Card Number */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="cardNumber" className="form-label">
            <Typography
              size={FontSize.SSM}
              fontWeight={FontWeight.NORMAL}
              variant="roboto"
              color="white"
            >
              Card number
            </Typography>
          </label>
          <InputMask
            mask="9999 9999 9999 9999"
            maskChar={null}
            id="cardNumber"
            name="cardNumber"
            role="presentation"
            autoComplete="off"
            className="form-control"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <div className="text-danger">{formik.errors.cardNumber}</div>
          ) : null}
        </div>

        {/* Cardholder Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="cardholderName" className="form-label">
            <Typography
              size={FontSize.SSM}
              fontWeight={FontWeight.NORMAL}
              variant="roboto"
              color="white"
            >
              Cardholder Name
            </Typography>
          </label>
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            role="presentation"
            autoComplete="off"
            className="form-control"
            value={formik.values.cardholderName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cardholderName && formik.errors.cardholderName ? (
            <div className="text-danger">{formik.errors.cardholderName}</div>
          ) : null}
        </div>

        {/* Expiry Month and Year */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label htmlFor="expiryMonth" className="form-label">
              <Typography
                size={FontSize.SSM}
                fontWeight={FontWeight.NORMAL}
                variant="roboto"
                color="white"
              >
                Expiry Month
              </Typography>
            </label>
            <select
              id="expiryMonth"
              name="expiryMonth"
              className="form-select"
              value={formik.values.expiryMonth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Select month" />
              {[
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
              ].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            {formik.touched.expiryMonth && formik.errors.expiryMonth ? (
              <div className="text-danger">{formik.errors.expiryMonth}</div>
            ) : null}
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label htmlFor="expiryYear" className="form-label">
              <Typography
                size={FontSize.SSM}
                fontWeight={FontWeight.NORMAL}
                variant="roboto"
                color="white"
              >
                Expiry Year
              </Typography>
            </label>
            <select
              id="expiryYear"
              name="expiryYear"
              className="form-select"
              value={formik.values.expiryYear}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Select year" />
              {["2025", "2026", "2027", "2028", "2029", "2030"].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {formik.touched.expiryYear && formik.errors.expiryYear ? (
              <div className="text-danger">{formik.errors.expiryYear}</div>
            ) : null}
          </div>
        </div>

        {/* CVV */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="cvv" className="form-label">
            <Typography
              size={FontSize.SSM}
              fontWeight={FontWeight.NORMAL}
              variant="roboto"
              color="white"
            >
              CVV
            </Typography>
          </label>
          <InputMask
            mask="9999"
            maskChar={null}
            id="cvv"
            name="cvv"
            className="form-control"
            value={formik.values.cvv}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cvv && formik.errors.cvv ? (
            <div className="text-danger">{formik.errors.cvv}</div>
          ) : null}
        </div>

        {/* Accept Terms */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="form-check">
            <input
              type="radio"
              id="termsAccepted"
              name="termsAccepted"
              className="form-check-input"
              checked={formik.values.termsAccepted}
              onChange={() => formik.setFieldValue("termsAccepted", true)}
            />
            <label htmlFor="termsAccepted" className="form-check-label">
              <Typography
                size={FontSize.SSM}
                fontWeight={FontWeight.NORMAL}
                variant="roboto"
                color="white"
              >
                Aceitar todos os termos
              </Typography>
            </label>
          </div>
          {formik.touched.termsAccepted && formik.errors.termsAccepted ? (
            <div className="text-danger">{formik.errors.termsAccepted}</div>
          ) : null}
        </div>

        {/* Checkout Button */}
        <div className="d-flex flex-column">
          <button
            type="submit"
            className="btn btn-light w-100 rounded-0"
            onClick={() => {
              enqueueSnackbar("Thanks for purchasing with us!", {
                variant: "success",
              });
            }}
            disabled={!formik.isValid}
          >
            <Typography
              size={FontSize.SSM}
              fontWeight={FontWeight.SEMI_BOLD}
              variant="publicSans"
              color="dark"
            >
              Checkout
            </Typography>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
