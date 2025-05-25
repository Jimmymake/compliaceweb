import Alert from "@mui/material/Alert";

import * as React from "react";

import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";

import { styled } from "@mui/material/styles";
import { Typography, Stack, Button } from "@mui/material";

import Snackbar from "@mui/material/Snackbar";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import OutlinedInput from "@mui/material/OutlinedInput";
// import { VisuallyHiddenInput } from "../components/VisuallyHiddenInput";
// import Alert from "@mui/material/Alert";
import { useState } from "react";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(100%)",
//   height: "1px",
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: "1px",
//   border: 0,
//   padding: 0,
//   margin: 0,
// });

export default function DocumentRequiredChecklist() {
  // const [formData, setFormData] = useState({
  //   // companyName: "",
  //   // merchantUrl: "",
  //   // dateIncorporation: "",
  //   // companyRegNumber: "",
  //   // jurisdictions: "",
  //   // bankName: "",
  //   // bicSwiftCode: "",
  // });
  const [selectedFile1, setSelectedFile1] = useState<File | null>(null);
  const [selectedFile2, setSelectedFile2] = useState<File | null>(null);
  const [selectedFile3, setSelectedFile3] = useState<File | null>(null);
  const [selectedFile4, setSelectedFile4] = useState<File | null>(null);
  const [selectedFile5, setSelectedFile5] = useState<File | null>(null);
  const [selectedFile6, setSelectedFile6] = useState<File | null>(null);
  const [selectedFile7, setSelectedFile7] = useState<File | null>(null);
  const [selectedFile8, setSelectedFile8] = useState<File | null>(null);
  const [selectedFile9, setSelectedFile9] = useState<File | null>(null);
  const [selectedFile10, setSelectedFile10] = useState<File | null>(null);
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info" | "warning";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

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
  //     const url = "https://http-cors-proxy.p.rapidapi.com/";
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "x-rapidapi-key":
  //           "e24f6dad05msh00223ed232c1e0cp116c2bjsne8701539e428",
  //         "x-rapidapi-host": "http-cors-proxy.p.rapidapi.com",
  //         "Content-Type": "application/json",
  //         Origin: "www.example.com",
  //         "X-Requested-With": "www.example.com",
  //       },
  //       body: JSON.stringify({
  //         url: "https://retserereyeswebhook.site/5b608c29-b8e1-4ff5-a75c-c59b4eb9540e", // Target API URL
  //         method: "POST",
  //         body: formData, // Pass your form data here
  //         headers: {
  //           "Content-type": "application/json; charset=UTF-8",
  //         },
  //       }),
  //     };
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log("Success:", result);

  //     // Show success alert
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

  // const handleCloseAlert = () => {
  //   setAlert({ ...alert, open: false });
  // };

  return (
    <>
      <form>
        <Stack>
          <Typography color="info" fontWeight="bold" variant="h6" gutterBottom>
            Document Requirements Checklist
          </Typography>
          <Grid container spacing={3}>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="Certificate of Incorporation" required>
                Certificate of Incorporation
              </FormLabel>
              <OutlinedInput
                required
                id="Certificate of Incorporation"
                size="small"
                name="Certificate of Incorporation"
                readOnly
                value={selectedFile1 ? selectedFile1.name : ""}
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
                            setSelectedFile1(event.target.files[0]);
                          }
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel
                htmlFor="Memorandum and Articles of Association"
                required
              >
                Memorandum and Articles of Association or its equivalent (CR 2)
                For Partnerships- Partnership Deed, N/A for Sole Proprietorship
              </FormLabel>
              <OutlinedInput
                required
                id="Memorandum and Articles of Association"
                size="small"
                name="Memorandum and Articles of Association"
                readOnly
                value={selectedFile2 ? selectedFile2.name : ""}
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
                            setSelectedFile2(event.target.files[0]);
                          }
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="CR 12" required>
                CR 12 (equivalent of Register of Members/Shareholders; and
                Directors) (not older than 6 months from the time of onboarding)
                N/A for Sole Proprietorship and Partnerships
              </FormLabel>
              <OutlinedInput
                required
                id="CR 12"
                size="small"
                name="CR 12"
                readOnly
                value={selectedFile3 ? selectedFile3.name : ""}
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
                            setSelectedFile3(event.target.files[0]);
                          }
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel
                htmlFor="Copy of Kenya Revenue Authority PIN certificate"
                required
              >
                Copy of Kenya Revenue Authority PIN certificate
              </FormLabel>
              <OutlinedInput
                required
                id="Copy of Kenya Revenue Authority PIN certificate"
                size="small"
                name="Copy of Kenya Revenue Authority PIN certificate"
                readOnly
                value={selectedFile4 ? selectedFile4.name : ""}
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
                            setSelectedFile4(event.target.files[0]);
                          }
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="Bank statements" required>
                Bank statements for the last 3 months or Crossed Cheque, where
                it is a new account, bank reference letter
              </FormLabel>
              <OutlinedInput
                required
                id="Bank statements"
                size="small"
                name="Bank statements"
                readOnly
                value={selectedFile5 ? selectedFile5.name : ""}
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
                            setSelectedFile5(event.target.files[0]);
                          }
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="Directors passport/ID copies" required>
                Directors passport/ID copies (must be coloured) For Partnerships
                partners' passport/ID copies, For Sole Proprietorship,
                proprietor's ID/passport
              </FormLabel>
              <OutlinedInput
                required
                id="Directors passport/ID copies"
                size="small"
                name="Directors passport/ID copies"
                readOnly
                value={selectedFile6 ? selectedFile6.name : ""}
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
                            setSelectedFile6(event.target.files[0]);
                          }
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="Shareholders’ passport/ID copies" required>
                Shareholders’ passport/ID copies (must be coloured)
              </FormLabel>
              <OutlinedInput
                required
                id="Shareholders’ passport/ID copies"
                size="small"
                name="Shareholders’ passport/ID copies"
                readOnly
                value={selectedFile7 ? selectedFile7.name : ""}
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
                            setSelectedFile7(event.target.files[0]);
                          }
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="Website and Applicable IP addresses" required>
                Website and Applicable IP addresses (for whitelisting)
              </FormLabel>
              <OutlinedInput
                required
                id="Website and Applicable IP addresses"
                size="small"
                name="Website and Applicable IP addresses"
                readOnly
                value={selectedFile8 ? selectedFile8.name : ""}
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
                            setSelectedFile8(event.target.files[0]);
                          }
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="Proof of Domain" required>
                Proof of Domain (where applicable)
              </FormLabel>
              <OutlinedInput
                required
                id="Proof of Domain"
                size="small"
                name="Proof of Domain"
                readOnly
                value={selectedFile9 ? selectedFile9.name : ""}
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
                            setSelectedFile9(event.target.files[0]);
                          }
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="Proof of Address" required>
                Proof of address for the director and the company (utility bill
                or bank statement dated within the last three months)
              </FormLabel>
              <OutlinedInput
                required
                id="Proof of Address"
                size="small"
                name="Proof of Address"
                readOnly
                value={selectedFile10 ? selectedFile10.name : ""}
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
                            setSelectedFile10(event.target.files[0]);
                          }
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
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
      {/* <Snackbar
        open={alert.open}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position the alert at the top center
      >
        <Alert variant="filled" severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar> */}
    </>
  );
}
