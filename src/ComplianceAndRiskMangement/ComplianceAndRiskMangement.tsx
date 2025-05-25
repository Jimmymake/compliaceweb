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
import { off } from "process";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function ComplianceAndRiskManagement() {
  const [formData, setFormData] = useState({
    officerName: "",
    officerTelephone: "",
    officerEmail: "",
    historyOfRegulatoryActions: "",
    whereDidYouHearAboutUs: "",
    introducerName: "",
    introducerPosition: "",
    introducerDate: "",

  
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
            <FormControl>
              <FormLabel>
                Does The Company Have an AML/KYC Policy in Place (If Yes: Attach
                Copy )
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  htmlFor="yes"
                  control={<Radio />}
                  label="yes"
                  value="yes"
                />
                <FormControlLabel
                  htmlFor="no"
                  control={<Radio />}
                  label="no"
                  value="no"
                />
              </RadioGroup>
            </FormControl>
            <FormGrid size={{ xs: 12 }}>
               <Typography variant="h6" gutterBottom>
              Compliance Officer Details
            </Typography>
            </FormGrid>

            <FormGrid size={{ xs: 6, }}>
              <FormLabel htmlFor="fullName" required>
                Full Name
              </FormLabel>
              <OutlinedInput
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={formData.officerName}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
              <FormLabel htmlFor="telephoneNumber" required>
                Telephone Number
              </FormLabel>
              <OutlinedInput
                id="telephoneNumber"
                name="telephoneNumber"
                type="text"
                placeholder="Telephone Number"
                value={formData.officerTelephone}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>

            <FormGrid size={{ xs: 12 }}>
              <FormLabel htmlFor="email" required>
                Email
              </FormLabel>
              <OutlinedInput
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={formData.officerEmail}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>
            <FormControl>
              <FormLabel>
                History of Regulatory Actions or Fines (If Yes: Attach Details )
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  htmlFor="yes"
                  control={<Radio />}
                  label="yes"
                  value="yes"
                />
                <FormControlLabel
                  htmlFor="no"
                  control={<Radio />}
                  label="no"
                  value="no"
                />
              </RadioGroup>
            </FormControl>
            <FormGrid size={{ xs: 12 }}>
              <FormLabel htmlFor="whereDidYouHearAboutUs" required>
                Where Did You Hear About Us?
              </FormLabel>
              <OutlinedInput
                id="whereDidYouHearAboutUs"
                name="whereDidYouHearAboutUs"
                type="text"
                placeholder="Where Did You Hear About Us?"
                value={formData.whereDidYouHearAboutUs}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>
              <FormGrid size={{ xs: 6 }}>
     <Typography variant="h6" gutterBottom>
              Introducer Person/Company
            </Typography>
              </FormGrid>
       
              <FormGrid size={{ xs: 6 }}>
              <FormLabel htmlFor="name" required>
                Name
              </FormLabel>
              <OutlinedInput
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.introducerName}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>
              <FormGrid size={{ xs: 6 }}>
              <FormLabel htmlFor="position" required>
                Position
              </FormLabel>
              <OutlinedInput
                id="position"
                name="position"
                type="text"
                placeholder="Position"
                value={formData.introducerPosition}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>
              <FormGrid size={{ xs: 6 }}>
              <FormLabel htmlFor="date" required>
                Date
              </FormLabel>
              <OutlinedInput
                id="date"
                name="date"
                type="date"
                placeholder="Date"
                value={formData.introducerDate}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>
            <Typography variant="h6" gutterBottom>
              Signature
            </Typography>
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
