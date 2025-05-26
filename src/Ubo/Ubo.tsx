
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
import InputAdornment from "@mui/material/InputAdornment";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function UltimateBeneficialOwner() {
 const handleFileChange = (index: number, file: File | null) => {
  setUbos((prevUbos) =>
    prevUbos.map((ubo, i) =>
      i === index ? { ...ubo, file } : ubo
    )
  );
};

  type Ubo = {
    Full_name: string;
    Nationality: string;
    Date_of_Birth: string;
    Residential_Address: string;
    Percentage_of_Ownership: string;
    Source_of_funds_and_wealth: string;
    is_pep: string; // "true" or "false"
    pep_details: string; // Details if politically exposed person
    // file?: File | null; // Optional file for PEP details
    // fullname: string;
    // nationality: string;
    // dateOfBirth: string;
    // residentialAddress: string;
    // percentageOfOwnership: string;
    // sourceofFunds: string;
    // politicallyExposedPerson: string;
    // file: File | null;
  };

  const [ubos, setUbos] = useState<Ubo[]>([
    {
      Full_name: "",
      Nationality: "",
      Date_of_Birth: "",
      Residential_Address: "",
      Percentage_of_Ownership: "",
      Source_of_funds_and_wealth: "",
      is_pep: "",
      pep_details: ""
      // fullname: "",
      // nationality: "",
      // dateOfBirth: "",
      // residentialAddress: "",
      // percentageOfOwnership: "",
      // sourceofFunds: "",
      // politicallyExposedPerson: "",
      // file: null,
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

  // const handleChange = (
  //   index: number,
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setUbos((prevUbos) =>
  //     prevUbos.map((ubo, i) => (i === index ? { ...ubo, [name]: value } : ubo))
  //   );
  // };
  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        Full_name: "",
        Nationality: "",
        Date_of_Birth: "",
        Residential_Address: "",
        Percentage_of_Ownership: "",
        Source_of_funds_and_wealth: "",
        is_pep: "",
        pep_details: ""
        // fullname: "",
        // nationality: "",
        // dateOfBirth: "",
        // residentialAddress: "",
        // percentageOfOwnership: "",
        // sourceofFunds: "",
        // politicallyExposedPerson: "",
        // file: null, // <-
      },
    ]);
  };

  const handleRemoveUbo = (index: number) => {
    setUbos((prevUbos) => prevUbos.filter((_, i) => i !== index));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem("token");

  //   try {
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         ...(token && { Authorization: `Bearer ${token}` }),
  //       },
  //       body: JSON.stringify({
  //         url: "https://fastapi-backend-9.onrender.com/api/v1/create-ubos", // Target API URL
  //         method: "POST",
  //         body: ubos, // Send all UBOs
  //         headers: {
  //           "Content-type": "application/json; charset=UTF-8",
  //         },
  //       }),
  //     };
 
  //     setAlert({
  //       open: true,
  //       message: "Form submitted successfully!",
  //       severity: "success",
  //     });
  //   } catch (error) {
  //     console.error("Error:", error);

  //     // Show error alert
  //     setAlert({
  //       open: true,
  //       message: "An error occurred while submitting the form.",
  //       severity: "error",
  //     });
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage
    if (!token) {
      setAlert({
        open: true,
        message: "Authentication token is missing. Please log in.",
        severity: "error",
      });
      return;
    }
  
    // Prepare the payload
    const payload = {
      ubos: ubos.map((ubo) => ({
        Full_name: ubo.Full_name,
        Nationality: ubo.Nationality,
        Date_of_Birth: ubo.Date_of_Birth,
        Residential_Address: ubo.Residential_Address,
        Percentage_of_Ownership: ubo.Percentage_of_Ownership,
        Source_of_funds_and_wealth: ubo.Source_of_funds_and_wealth,
        is_pep: ubo.is_pep,
        pep_details: ubo.pep_details,
      })),
    };
  
    try {
      // Make the API request
      const response = await fetch(
        "https://fastapi-backend-9.onrender.com/api/v1/create-ubos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
          body: JSON.stringify(payload), // Convert the payload to JSON
        }
      );
  
      if (response.ok) {
        const responseData = await response.json();
        setAlert({
          open: true,
          message: "UBOs submitted successfully!",
          severity: "success",
        });
        console.log("Response:", responseData);
      } else {
        const errorText = await response.text();
        setAlert({
          open: true,
          message: `Submission failed: ${errorText}`,
          severity: "error",
        });
        console.error("Error:", response.status, errorText);
      }
    } catch (error) {
      setAlert({
        open: true,
        message: "An error occurred while submitting. Please try again.",
        severity: "error",
      });
      console.error("Error:", error);
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
                {/* <Stack></Stack> */}
                <Typography variant="h6" gutterBottom>
                  Ultimate Beneficial Owner {index + 1}
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
                <FormGrid size={{ xs: 12 }}>
                  <FormLabel htmlFor={`fullname-${index}`} required>
                    Full Name
                  </FormLabel>
                  <OutlinedInput
  id={`fullname-${index}`}
  name="Full_name" // Must match the key in the UBO object
  type="text"
  placeholder="Full Name"
  value={ubo.Full_name}
  onChange={(e) => handleChange(index, e)}
  required
  autoComplete="name"
  size="small"
/>
                  {/* <OutlinedInput
                    id={`fullname-${index}`}
                    name="fullname"
                    type="text"
                    placeholder="Full Name"
                    value={ubo.Full_name}
                    onChange={(e) => handleChange(index, e)}
                    required
                    autoComplete="name"
                    size="small"
                  /> */}
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                  <FormLabel htmlFor={`nationality-${index}`} required>
                    Nationality
                  </FormLabel>
                  <OutlinedInput
                    id={`nationality-${index}`}
                    name="Nationality"
                    type="text"
                    placeholder="Nationality"
                    value={ubo.Nationality}
                    autoComplete="country"
                    onChange={(e) => handleChange(index, e)}
                    required
                    size="small"
                  />
                </FormGrid>
                <FormGrid size={{ xs: 6 }}>
                  <FormLabel htmlFor={`dateOfBirth-${index}`} required>
                    Date of Birth
                  </FormLabel>
                  <OutlinedInput
                    id={`dateOfBirth-${index}`}
                    name="Date_of_Birth"
                    type="date"
                    value={ubo.Date_of_Birth}
                    onChange={(e) => handleChange(index, e)}
                    required
                    size="small"
                  />
                </FormGrid>
                <FormGrid size={{ xs: 6 }}>
                  <FormLabel htmlFor={`residentialAddress-${index}`} required>
                    Residential Address
                  </FormLabel>
                  <OutlinedInput
                    id={`residentialAddress-${index}`}
                    name="Residential_Address"
                    type="address-line1"
                    placeholder="Residential Address"
                    value={ubo.Residential_Address}
                    onChange={(e) => handleChange(index, e)}
                    required
                    size="small"
                  />
                </FormGrid>
                <FormGrid size={{ xs: 6 }}>
                  <FormLabel
                    htmlFor={`percentageOfOwnership-${index}`}
                    required
                  >
                    Percentage of Ownership
                  </FormLabel>
                  <OutlinedInput
                    id={`percentageOfOwnership-${index}`}
                    name="Percentage_of_Ownership"
                    type="text"
                    placeholder="Percentage of Ownership"
                    value={ubo.Percentage_of_Ownership}
                    onChange={(e) => handleChange(index, e)}
                    required
                    size="small"
                  />
                </FormGrid>
                <FormGrid size={{ xs: 12 }}>
                  <FormLabel htmlFor={`sourceofFunds-${index}`} required>
                    Source of Funds
                  </FormLabel>
                  <OutlinedInput
                    id={`sourceofFunds-${index}`}
                    name="Source_of_funds_and_wealth"
                    type="text"
                    placeholder="Source of Funds"
                    value={ubo.Source_of_funds_and_wealth}
                    onChange={(e) => handleChange(index, e)}
                    required
                    size="small"
                  />
                </FormGrid>
                {/* <FormGrid size={{ xs: 12 }}>
                  <FormLabel
                    htmlFor={`politicallyExposedPerson-${index}`}
                    required
                  >
                    Politically Exposed Person (If Yes: Provide Details: )
                  </FormLabel>
                  <RadioGroup
                    name={`politicallyExposedPerson-${index}`}
                    value={ubo.politicallyExposedPerson}
                    onChange={(e) => handleChange(index, e)}
                  >
                    <FormControlLabel
                      control={<Radio />}
                      label="Yes"
                      value="yes"
                    />
                    <FormControlLabel
                      control={<Radio />}
                      label="No"
                      value="no"
                    />
                  </RadioGroup>
                </FormGrid> */}
                {/* <FormGrid size={{ xs: 12 }}>
                  <FormLabel htmlFor={`sourceofFunds-${index}`} required>
                    PEP Details
                  </FormLabel>
                  <OutlinedInput
                    id={`pepDetails-${index}`}
                    name="pepDetails"
                    type="text"
                    placeholder="PEP Details"
                    value={ubo.politicallyExposedPerson}
                    onChange={(e) => handleChange(index, e)}
                    required
                    size="small"
                  />
                </FormGrid> */}
                <FormGrid size={{ xs: 12 }}>
                  <FormLabel required>
                    Politically Exposed Person (If Yes: Provide Details: )
                  </FormLabel>
                  <RadioGroup
                    name="is_pep"
                    id={`is_pep-${index}`}
                    value={ubo.is_pep}
                    onChange={(e) => handleChange(index, e)}
                    row
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="no"
                    />
                  </RadioGroup>
                </FormGrid>
                {ubo.is_pep === "true" && (
                  <>
                    {/* <FormGrid size={{ xs: 12 }}>
                      <FormLabel htmlFor={`sourceofFunds-${index}`} required>
                        PEP Details
                      </FormLabel>
                      <OutlinedInput
                        id={`pepDetails-${index}`}
                        name="pepDetails"
                        type="text"
                        placeholder="PEP Details"
                        value={ubo.politicallyExposedPerson}
                        onChange={(e) => handleChange(index, e)}
                        size="small"
                      />
                    </FormGrid> */}
                    {/* <FormGrid size={{ xs: 12,  }}>
                      <FormLabel
                        htmlFor="Directors passport/ID copies"
                        required
                      >
                        PEP Details
                      </FormLabel>
<OutlinedInput
  required
  id={`file-${index}`}
  size="small"
  name={`file-${index}`}
  readOnly
  value={ubo.file ? ubo.file.name : ""}
  placeholder="Choose file"
  endAdornment={
    <InputAdornment position="end">
      <IconButton component="label" tabIndex={-1}>
        <AttachFileIcon />
        <input
          type="file"
          hidden
          onChange={(event) => {
            if (event.target.files && event.target.files[0]) {
              handleFileChange(index, event.target.files[0]);
            }
          }}
        />
      </IconButton>
    </InputAdornment>
  }
/>
                    </FormGrid> */}
                         <FormGrid size={{ xs: 12 }}>
                  <FormLabel htmlFor={`pep_details-${index}`} required>
                    Pep Details
                  </FormLabel>
                  <OutlinedInput
                    id={`pep_details-${index}`}
                    name="pep_details"
                    type="text"
                    placeholder="Pep Details"
                    value={ubo.pep_details}
                    onChange={(e) => handleChange(index, e)}
                    required
                    size="small"
                  />
                </FormGrid>
                  </>
                )}
              </React.Fragment>
            ))}
          </Grid>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
            <AddIcon color="primary" fontSize="large" onClick={handleAddUbo} />
            <FormLabel>Add Ultimate Beneficial Owner</FormLabel>
          </Stack>
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
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert variant="filled" severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
}
