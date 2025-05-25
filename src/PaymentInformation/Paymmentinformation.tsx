
import Alert from '@mui/material/Alert';

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

export default function CompanyInformation() {
  const [formData, setFormData] = useState({
    companyName: "",
    merchantUrl: "",
    dateIncorporation: "",
    companyRegNumber: "",
    jurisdictions: "",
    bankName: "",
    bicSwiftCode: "",
  });

  const [alert, setAlert] = useState<{ open: boolean; message: string; severity: "success" | "error" | "info" | "warning" }>({
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
        "x-rapidapi-key": "e24f6dad05msh00223ed232c1e0cp116c2bjsne8701539e428",
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
      setAlert({ open: true, message: "Form submitted successfully!", severity: "success" });
    } catch (error) {
      console.error("Error:", error);

      // Show error alert
      setAlert({ open: true, message: "An error occurred while submitting the form.", severity: "error" });
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
          Company Information
        </Typography>
        <Grid container spacing={3}>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="companyName" required>
              Company name
            </FormLabel>
            <OutlinedInput
              id="companyName"
              name="companyName"
              type="text"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="merchantUrl" required>
              Merchant URL
            </FormLabel>
            <OutlinedInput
              id="merchantUrl"
              name="merchantUrl"
              type="text"
              placeholder="https://www.example.com"
              value={formData.merchantUrl}
              onChange={handleChange}
              required
              size="small"
            />
          </FormGrid>

          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="dateIncorporation" required>
              Date of incorporation
            </FormLabel>
            <OutlinedInput
              id="dateIncorporation"
              name="dateIncorporation"
              type="date"
              value={formData.dateIncorporation}
              onChange={handleChange}
              required
              size="small"
            />
          </FormGrid>

          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="companyRegNumber" required>
              Company Reg Number
            </FormLabel>
            <OutlinedInput
              id="companyRegNumber"
              name="companyRegNumber"
              type="text"
              placeholder="Company Reg Number"
              value={formData.companyRegNumber}
              onChange={handleChange}
              required
              size="small"
            />
          </FormGrid>

          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="jurisdictions" required>
              Jurisdictions
            </FormLabel>
            <OutlinedInput
              id="jurisdictions"
              name="jurisdictions"
              type="text"
              placeholder="Jurisdictions"
              value={formData.jurisdictions}
              onChange={handleChange}
              required
              size="small"
            />
          </FormGrid>

          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="bankName" required>
              Bank Name
            </FormLabel>
            <OutlinedInput
              id="bankName"
              name="bankName"
              type="text"
              placeholder="Bank name"
              value={formData.bankName}
              onChange={handleChange}
              required
              size="small"
            />
          </FormGrid>

          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="bicSwiftCode" required>
              BIC/SWIFT Code
            </FormLabel>
            <OutlinedInput
              id="bicSwiftCode"
              name="bicSwiftCode"
              type="text"
              placeholder="BIC/SWIFT Code"
              value={formData.bicSwiftCode}
              onChange={handleChange}
              required
              size="small"
            />
          </FormGrid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
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


  // const [formData, setFormData] = useState({
  //   companyName: "",
  //   merchantUrl: "",
  //   dateIncorporation: "",
  //   companyRegNumber: "",
  //   companyEmail: "",
  //   countryOfIncorporation: "",
  //   contactPerson: "",
  //   phone: "",
  //   email: "",
  //   businessDescription: "",
  //   companyFunds: "",
  //   businessRelationship: "",
  //   licenceNumber: "",
  //   licenceType: "",
  //   jurisdictions: "",
  //   bankName: "",
  //   bicSwiftCode: "",
  //   countriesOfOperation: "",
  //   paymentGateways: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("https://127.0.0.1:8088/Api/company/create", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log("Success:", result);
  //       alert("Form submitted successfully!");
  //     } else {
  //       console.error("Error:", response.statusText);
  //       alert("Failed to submit the form.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while submitting the form.");
  //   }
  // };
