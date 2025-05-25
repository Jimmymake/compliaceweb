import Alert from "@mui/material/Alert";

import * as React from "react";
// import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import { Typography, Stack, Button } from "@mui/material";
import { Radio, RadioGroup } from "@mui/material";
import { FormControl } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";
import { useState } from "react";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function PaymentProcessingInformation() {
  const [formData, setFormData] = useState({
    currency: "",
    monthlyvolume: "",
    averageTransactionAmount: "",
    paymentmethodsupported: "",
    chargebackrefundrate: "",
  });

  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info" | "warning";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = "https://http-cors-proxy.p.rapidapi.com/";
      const options = {
        method: "POST",
        headers: {
          "x-rapidapi-key":
            "e24f6dad05msh00223ed232c1e0cp116c2bjsne8701539e428",
          "x-rapidapi-host": "http-cors-proxy.p.rapidapi.com",
          "Content-Type": "application/json",
          Origin: "www.example.com",
          "X-Requested-With": "www.example.com",
        },
        body: JSON.stringify({
          url: "https://retserereyeswebhook.site/5b608c29-b8e1-4ff5-a75c-c59b4eb9540e", // Target API URL
          method: "POST",
          body: formData, // Pass your form data here
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }),
      };
      const response = await fetch(url, options);
      const result = await response.text();
      console.log("Success:", result);

      // Show success alert
      setAlert({
        open: true,
        message: "Form submitted successfully!",
        severity: "success",
      });
    } catch (error) {
      console.error("Error:", error);

      // Show error alert
      setAlert({
        open: true,
        message: "An error occurred while submitting the form.",
        severity: "error",
      });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack>
          <Typography color="info" fontWeight="bold" variant="h6" gutterBottom>
            Payment And Processing Information
          </Typography>
          <Grid container spacing={3}>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="currency" required>
                Required Currency
              </FormLabel>
              <OutlinedInput
                id="currency"
                name="currency"
                type="text"
                placeholder="Required Currency"
                value={formData.currency}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="monthlyVolume" required>
                Expected Monthly Volume
              </FormLabel>
              <OutlinedInput
                id="monthlyVolume"
                name="monthlyVolume"
                type="text"
                placeholder="Expected Monthly Volume"
                value={formData.monthlyvolume}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
              <FormLabel htmlFor="averageTransactionAmount" required>
                Average Transaction Size
              </FormLabel>
              <OutlinedInput
                id="averageTransactionAmount"
                name="averageTransactionAmount"
                type="text"
                placeholder="Average Transaction Size"
                value={formData.averageTransactionAmount}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
              <FormLabel htmlFor="paymentMethodSupported" required>
                Payment Method To be Supported
              </FormLabel>
              <OutlinedInput
                id="paymentMethodSupported"
                name="paymentMethodSupported"
                type="text"
                placeholder="Payment Method To be Supported"
                value={formData.paymentmethodsupported}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>

            <FormGrid size={{ xs: 12 }}>
              <FormLabel htmlFor="chargebackrefundrate" required>
                Charge/Back Refund Rate
              </FormLabel>
              <OutlinedInput
                id="chargebackrefundrate"
                name="chargebackrefundrate"
                type="text"
                placeholder="Charge/Back Refund Rate"
                value={formData.chargebackrefundrate}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </Stack>
      </form>

      {/* Snackbar for Alerts */}
      <Snackbar
        open={alert.open}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position the alert at the top center
      >
        <Alert variant="filled" severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
}
