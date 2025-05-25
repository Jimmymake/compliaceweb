import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography,Button } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
// import Typography from "@mui/material";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));
// import Typography from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography align="left" variant="h4" fontWeight={"bold"}>
          DECLARATION OF HONOUR REGARDING POLITICALLY EXPOSED PERSONS (PEPs)
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography align="left" variant="h6">
          I hereby declare that there is no politically exposed person within
          the beneficial owners of the company, its management, or its
          compliance department, therefore none of the following:
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography align="left" variant="h6">
          ‘Politically exposed persons’ means natural persons who are or have
          been entrusted with prominent public functions and immediate family
          members, or persons known to be close associates, of such persons.
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography align="left" variant="h5">
          1. ‘Natural persons who are or have been entrusted with prominent
          public functions’ shall include the following:
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          (a) heads of State, heads of government, ministers, and deputy or
          assistant ministers;
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          (b) members of parliaments;
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          (c) members of supreme courts, constitutional courts or of other
          high-level judicial bodies whose decisions are not subject to further
          appeal, except in exceptional circumstances;
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          (d) members of courts of auditors or of the boards of central banks;
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          (e) ambassadors, chargés d’affaires, and high-ranking officers in the
          armed forces;
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          (f) members of the administrative, management, or supervisory bodies
          of State-owned enterprises.
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          (a) heads of State, heads of government, ministers, and deputy or
          assistant ministers;
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          None of the categories set out in points (a) to (f) of the first
          subparagraph shall be understood as covering middle-ranking or more
          junior officials.
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          The categories set out in points (a) to (e) of the first subparagraph
          shall, where applicable, include positions at Community and
          international level.
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h5">
          2. ‘Immediate family members’ shall include the following:
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          (a) the spouse;
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          (b) any partner considered by national law as equivalent to the
          spouse;
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          (c) the children and their spouses or partners;
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          (d)the parents.
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h5">
          3. ‘Persons known to be close associates’ shall include the following:
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          a. any natural person who is known to have joint beneficial ownership
          of legal entities or legal arrangements, or any other close business
          relations, with a person referred to in paragraph 1;
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h6">
          b. any natural person who has sole beneficial ownership of a legal
          entity or legal arrangement which is known to have been set up for the
          benefit de facto of the person referred to in paragraph 1
        </Typography>
      </Box>
      <Box
        sx={{
          // minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography align="left" variant="h5">
          4. Without prejudice to the application, on a risk-sensitive basis, of
          enhanced customer due diligence measures, such persons are still
          considered as politically exposed persons during one year after they
          have ceased to be entrusted with a prominent public function within
          the meaning of paragraph 1.
        </Typography>
      </Box>
      <Box height={"2rem"}></Box>
      <Stack direction="row" sx={{ flex: 1, alignItems: "center" }}>
        <Typography sx={{ mr: 2 }}>Date:</Typography>
        <FormGrid size={{ xs: 12 }} sx={{ flex: 1 }}>
          <TextField
            variant="standard"
            id="countriesOfOperation"
            name="countriesOfOperation"
            type="date"
            placeholder="Country 1"
            autoComplete="date"
            required
            size="small"
            // value={formData.countriesOfOperation}
            // onChange={handleChange}
            fullWidth
            sx={{ flex: 1 }}
          />
        </FormGrid>
      </Stack>
      <Stack direction="row" sx={{ flex: 1, alignItems: "center" }}>
        <Typography sx={{ mr: 2 }}>Company Name</Typography>
        <FormGrid size={{ xs: 12 }} sx={{ flex: 1 }}>
          <TextField
            variant="standard"
            id="countriesOfOperation"
            name="countriesOfOperation"
            type="text"
            placeholder="Company Name"
            autoComplete="organization"
            required
            size="small"
            // value={formData.countriesOfOperation}
            // onChange={handleChange}
            fullWidth
            sx={{ flex: 1 }}
          />
        </FormGrid>
      </Stack>
      <Stack direction="row" sx={{ flex: 1, alignItems: "center" }}>
        <Typography sx={{ mr: 2 }}>Position</Typography>
        <FormGrid size={{ xs: 12 }} sx={{ flex: 1 }}>
          <TextField
            variant="standard"
            id="countriesOfOperation"
            name="countriesOfOperation"
            type="text"
            placeholder="Position"
            autoComplete="off"
            required
            size="small"
            // value={formData.countriesOfOperation}
            // onChange={handleChange}
            fullWidth
            sx={{ flex: 1 }}
          />
        </FormGrid>
      </Stack>
      <Stack direction="row" sx={{ flex: 1, alignItems: "center" }}>
        <Typography sx={{ mr: 2 }}>Name of the Signatory</Typography>
        <FormGrid size={{ xs: 12 }} sx={{ flex: 1 }}>
          <TextField
            variant="standard"
            id="countriesOfOperation"
            name="countriesOfOperation"
            type="texxt"
            placeholder="Name"
            autoComplete="name"
            required
            size="small"
            // value={formData.countriesOfOperation}
            // onChange={handleChange}
            fullWidth
            sx={{ flex: 1 }}
          />
        </FormGrid>
      </Stack>
      <FormGrid size={{ xs: 12, md: 6 }} direction={"row"}>
        <FormLabel htmlFor="Memorandum and Articles of Association" required>
          Signature
        </FormLabel>
        <OutlinedInput
          required
          id="Memorandum and Articles of Association"
          size="small"
          name="Memorandum and Articles of Association"
          readOnly
          // value={selectedFile2 ? selectedFile2.name : ""}
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
                      // setSelectedFile2(event.target.files[0]);
                    }
                  }}
                />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormGrid>
           <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
      <Box height={"2rem"}></Box>
    </Container>
  );
};

export default Home;
