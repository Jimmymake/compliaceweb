// import Alert from "@mui/material/Alert";

// import * as React from "react";
// // import { useState } from "react";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormLabel from "@mui/material/FormLabel";
// import Grid from "@mui/material/Grid";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import { styled } from "@mui/material/styles";
// import { Typography, Stack, Button } from "@mui/material";
// import { Radio, RadioGroup } from "@mui/material";
// import { FormControl } from "@mui/material";
// import Snackbar from "@mui/material/Snackbar";
// import AddIcon from '@mui/icons-material/Add';
// // import Alert from "@mui/material/Alert";
// import { useState } from "react";

// const FormGrid = styled(Grid)(() => ({
//   display: "flex",
//   flexDirection: "column",
// }));

// export default function UltimateBeneficialOwner() {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     nationality: "",
//     dateOfBirth: "",
//     residentialAddress: "",
//     percentageOfOwnership: "",
//     sourceofFunds: "",
//     politicallyExposedPerson: "",
//   });

//   const [alert, setAlert] = useState<{
//     open: boolean;
//     message: string;
//     severity: "success" | "error" | "info" | "warning";
//   }>({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const url = "https://http-cors-proxy.p.rapidapi.com/";
//       const options = {
//         method: "POST",
//         headers: {
//           "x-rapidapi-key":
//             "e24f6dad05msh00223ed232c1e0cp116c2bjsne8701539e428",
//           "x-rapidapi-host": "http-cors-proxy.p.rapidapi.com",
//           "Content-Type": "application/json",
//           Origin: "www.example.com",
//           "X-Requested-With": "www.example.com",
//         },
//         body: JSON.stringify({
//           url: "https://retserereyeswebhook.site/5b608c29-b8e1-4ff5-a75c-c59b4eb9540e", // Target API URL
//           method: "POST",
//           body: formData, // Pass your form data here
//           headers: {
//             "Content-type": "application/json; charset=UTF-8",
//           },
//         }),
//       };
//       const response = await fetch(url, options);
//       const result = await response.text();
//       console.log("Success:", result);

//       // Show success alert
//       setAlert({
//         open: true,
//         message: "Form submitted successfully!",
//         severity: "success",
//       });
//     } catch (error) {
//       console.error("Error:", error);

//       // Show error alert
//       setAlert({
//         open: true,
//         message: "An error occurred while submitting the form.",
//         severity: "error",
//       });
//     }
//   };

//   const handleCloseAlert = () => {
//     setAlert({ ...alert, open: false });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <Stack>
//           <Typography color="info" fontWeight="bold" variant="h6" gutterBottom>
//             Ultimate Beneficial Owner
//           </Typography>
//           <Grid container spacing={3}>
//             <FormGrid size={{ xs: 12, md: 6 }}>
//               <FormLabel htmlFor="fullName" required>
//                 Full Name
//               </FormLabel>
//               <OutlinedInput
//                 id="fullName"
//                 name="fullname"
//                 type="text"
//                 placeholder="Full Name"
//                 value={formData.fullname}
//                 onChange={handleChange}
//                 required
//                 size="small"
//               />
//             </FormGrid>
//             <FormGrid size={{ xs: 12, md: 6 }}>
//               <FormLabel htmlFor="nationality" required>
//                 Nationality
//               </FormLabel>
//               <OutlinedInput
//                 id="nationality"
//                 name="nationality"
//                 type="text"
//                 placeholder="Nationality"
//                 value={formData.nationality}
//                 onChange={handleChange}
//                 required
//                 size="small"
//               />
//             </FormGrid>

//             <FormGrid size={{ xs: 6 }}>
//               <FormLabel htmlFor="dateOfBirth" required>
//                 Date of Birth
//               </FormLabel>
//               <OutlinedInput
//                 id="dateOfBirth"
//                 name="dateOfBirth"
//                 type="date"
//                 value={formData.dateOfBirth}
//                 onChange={handleChange}
//                 required
//                 size="small"
//               />
//             </FormGrid>

//             <FormGrid size={{ xs: 6 }}>
//               <FormLabel htmlFor="residentialAddress" required>
//                 Residential Address
//               </FormLabel>
//               <OutlinedInput
//                 id="residentialAddress"
//                 name="residentialAddress"
//                 type="text"
//                 placeholder="Residential Address"
//                 value={formData.residentialAddress}
//                 onChange={handleChange}
//                 required
//                 size="small"
//               />
//             </FormGrid>

//             <FormGrid size={{ xs: 6 }}>
//               <FormLabel htmlFor="percentageOfOwnership" required>
//                 Percentage of Ownership
//               </FormLabel>
//               <OutlinedInput
//                 id="percentageOfOwnership"
//                 name="percentageOfOwnership"
//                 type="text"
//                 placeholder="Percentage of Ownership"
//                 value={formData.percentageOfOwnership}
//                 onChange={handleChange}
//                 required
//                 size="small"
//               />
//             </FormGrid>

//             <FormGrid size={{ xs: 12 }}>
//               <FormLabel htmlFor="sourceOfFunds" required>
//                 Source of Funds
//               </FormLabel>
//               <OutlinedInput
//                 id="sourceOfFunds"
//                 name="sourceOfFunds"
//                 type="text"
//                 placeholder="Source of Funds"
//                 value={formData.sourceofFunds}
//                 onChange={handleChange}
//                 required
//                 size="small"
//               />
//             </FormGrid>

//        <FormControl>
//           <FormLabel>
//             Politicaly Exposed Person (If Yes:
//             Provide Details: )
//           </FormLabel>
//           <RadioGroup>
//             <FormControlLabel
//               htmlFor="yes"
//               control={<Radio />}
//               label="yes"
//               value="yes"

//             />
//             <FormControlLabel
//               htmlFor="no"
//               control={<Radio />}
//               label="no"
//               value="no"
//             />
//           </RadioGroup>
//         </FormControl>
//       </Grid>

// <Stack>
//   <AddIcon color="primary" fontSize="large" /> <FormLabel> Add Ultimate Beneficial Owner</FormLabel>
// </Stack>

//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         sx={{ mt: 3 }}
//       >
//         Submit
//       </Button>
//     </Stack>
//       </form>

//       {/* Snackbar for Alerts */}
//       <Snackbar
//         open={alert.open}
//         autoHideDuration={2000}
//         onClose={handleCloseAlert}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position the alert at the top center
//       >
//         <Alert variant="filled" severity={alert.severity}>
//           {alert.message}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// }

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
    fullname: string;
    nationality: string;
    dateOfBirth: string;
    residentialAddress: string;
    percentageOfOwnership: string;
    sourceofFunds: string;
    politicallyExposedPerson: string;
    file: File | null;
  };

  const [ubos, setUbos] = useState<Ubo[]>([
    {
      fullname: "",
      nationality: "",
      dateOfBirth: "",
      residentialAddress: "",
      percentageOfOwnership: "",
      sourceofFunds: "",
      politicallyExposedPerson: "",
      file: null,
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

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUbos((prevUbos) =>
      prevUbos.map((ubo, i) => (i === index ? { ...ubo, [name]: value } : ubo))
    );
  };

  const handleAddUbo = () => {
    setUbos((prevUbos) => [
      ...prevUbos,
      {
        fullname: "",
        nationality: "",
        dateOfBirth: "",
        residentialAddress: "",
        percentageOfOwnership: "",
        sourceofFunds: "",
        politicallyExposedPerson: "",
        file: null, // <-
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
                    name="fullname"
                    type="text"
                    placeholder="Full Name"
                    value={ubo.fullname}
                    onChange={(e) => handleChange(index, e)}
                    required
                    autoComplete="name"
                    size="small"
                  />
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                  <FormLabel htmlFor={`nationality-${index}`} required>
                    Nationality
                  </FormLabel>
                  <OutlinedInput
                    id={`nationality-${index}`}
                    name="nationality"
                    type="text"
                    placeholder="Nationality"
                    value={ubo.nationality}
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
                    name="dateOfBirth"
                    type="date"
                    value={ubo.dateOfBirth}
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
                    name="residentialAddress"
                    type="address-line1"
                    placeholder="Residential Address"
                    value={ubo.residentialAddress}
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
                    name="percentageOfOwnership"
                    type="text"
                    placeholder="Percentage of Ownership"
                    value={ubo.percentageOfOwnership}
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
                    name="sourceofFunds"
                    type="text"
                    placeholder="Source of Funds"
                    value={ubo.sourceofFunds}
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
                    name="politicallyExposedPerson"
                    value={ubo.politicallyExposedPerson}
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
                {ubo.politicallyExposedPerson === "true" && (
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
                    <FormGrid size={{ xs: 12,  }}>
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
