
import Alert from "@mui/material/Alert";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import { Typography, Stack, Button, IconButton } from "@mui/material";
import { Radio, RadioGroup } from "@mui/material";
import { FormControl } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function SettlementBankDetails() {
  const [ubos, setUbos] = useState([
    {
     nameofBank: "",
    swiftcode: "",
    jurisdictions: "",
    settlementcurrency: "",
    chargebackrefundrate: "",
    },
  ]);

  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info" | "warning";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUbos((prevUbos) =>
      prevUbos.map((ubo, i) =>
        i === index ? { ...ubo, [name]: value } : ubo
      )
    );
  };

  const handleAddUbo = () => {
    setUbos((prevUbos) => [
      ...prevUbos,
      {
     nameofBank: "",
    swiftcode: "",
    jurisdictions: "",
    settlementcurrency: "",
    chargebackrefundrate: "",
      },
    ]);
  };

  const handleRemoveUbo = (index: number) => {
    setUbos((prevUbos) => prevUbos.filter((_, i) => i !== index));
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
          url: "https://webhook.site/5b608c29-b8e1-4ff5-a75c-c59b4eb9540e", // Target API URL
          method: "POST",
          body: ubos, // Send all UBOs
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
          {/* <Typography color="info" fontWeight="bold" variant="h6" gutterBottom>
            Ultimate Beneficial Owner
          </Typography> */}
          
          <Grid container spacing={3}>


            {ubos.map((ubo, index) => (
              <React.Fragment key={index}>


                <Stack></Stack>
                <Typography variant="h6" gutterBottom>
                  Bank Details {index + 1}
                  {ubos.length > 1 && (
                    <IconButton
                      color="primary"
                      onClick={() => handleRemoveUbo(index)}
                      sx={{ ml: 2 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Typography>
                <FormGrid size={{ xs: 12,  }}>
                  <FormLabel htmlFor={`nameOfBank-${index}`} required>
                    Name of Bank
                  </FormLabel>
                  <OutlinedInput
                    id={`nameOfBank-${index}`}
                    name="nameOfBank"
                    type="text"
                    placeholder="Name of Bank"
                    value={ubo.nameofBank}
                    onChange={(e) => handleChange(index, e)}
                    required
                    size="small"
                  />
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                  <FormLabel htmlFor={`swiftCode-${index}`} required>
                    SWIFT Code
                  </FormLabel>
                  <OutlinedInput
                    id={`swiftCode-${index}`}
                    name="swiftcode"
                    type="text"
                    placeholder="SWIFT Code"
                    value={ubo.swiftcode}
                    onChange={(e) => handleChange(index, e)}
                    required
                    size="small"
                  />
                </FormGrid>
                <FormGrid size={{ xs: 6 }}>
                  <FormLabel htmlFor={`dateOfBirth-${index}`} required>
                    Jurisdiction
                  </FormLabel>
                  <OutlinedInput
                    id={`jurisdiction-${index}`}
                    name="jurisdiction"
                    type="text"
                    value={ubo.jurisdictions}
                    onChange={(e) => handleChange(index, e)}
                    required
                    size="small"
                  />
                </FormGrid>
                <FormGrid size={{ xs: 12 }}>
                  <FormLabel htmlFor={`settlementCurrency-${index}`} required>
                    Settlement Currency
                  </FormLabel>
                  <OutlinedInput
                    id={`settlementCurrency-${index}`}
                    name="settlementcurrency"
                    type="text"
                    placeholder="Settlement Currency"
                    value={ubo.settlementcurrency}
                    onChange={(e) => handleChange(index, e)}
                    required
                    size="small"
                  />
                </FormGrid>
                             
              </React.Fragment>
            ))}
          </Grid>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
            <AddIcon color="primary" fontSize="large" onClick={handleAddUbo} />
            <FormLabel>Add Ultimate Beneficial Owner</FormLabel>
          </Stack>
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
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert variant="filled" severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
}



