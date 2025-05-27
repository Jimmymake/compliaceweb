import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
// import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import AppTheme from "../shared-theme/AppTheme";
import ColorModeSelect from "../shared-theme/ColorModeSelect";
// import { SitemarkIcon } from "./CustomIcons";
// import FormTab from "../FormTab/FormTab";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function SignUp(props: { disableCustomTheme?: boolean }) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");

  const validateInputs = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const name = document.getElementById("name") as HTMLInputElement;
    const phonenumber = document.getElementById(
      "phonumber"
    ) as HTMLInputElement;

    let isValid = true;
    // if(phonenumber.value ){

    // if(phonenumber.value ){if}
    // }
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateInputs()) return;

    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const password = data.get("password");
    const location = data.get("address");

    const userData = {
      user: {
        name,
        email,
        phone: phone ? `+254${phone}` : "",
        password,
        role: "user",
        status: "active",
        location,
      },
    };

    try {
      const response = await fetch(
        "https://orderly-m2qc.onrender.com/Api/users/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.status === 200 || response.status === 201) {
        //  alert('Sign Up successful!');
        const responseData = await response.json();
        console.log("Sign Up successful:", responseData.User);
        const loginData = {
          user: {
            email,
            password,
          },
        };

        try {
          const response = await fetch(
            "https://orderly-m2qc.onrender.com/Api/users/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(loginData),
            }
          );

          if (response.status === 200 || response.status === 201) {
            const responseData = await response.json();

            // alert("Login successful!");
            console.log("SignIn successful:", responseData.token);
            console.log("Sigin successful:", responseData.user.Name);
            console.log("Sigin successful:", responseData.user.Email);
            console.log("Sigin successful:", responseData.user);
            localStorage.setItem("token", responseData.token);
            localStorage.setItem("email", responseData.user.Name);
            localStorage.setItem("name", responseData.user.Email);
            setTimeout(() => {
              window.location.href = "/UserDashboard";
            }, 1200);
          } else if (response.status === 401 || response.status === 403) {
            alert(
              "An error occurred while logging in. Please try again later."
            );
            // console.error('Login failed: Invalid email or password.');
            console.error(
              "SignIn failed:",
              response.status,
              await response.text()
            );
          } else {
            alert(
              "An error occurred while logging in. Please try again later."
            );
          }
        } catch (e) {
          alert("An error occurred while signing up. Please try again later.");
          console.error("Error:", e);
        }

      
      } else if (response.status === 401 || response.status === 403) {
        alert("An error occurred while logging in. Please try again later.");
        console.error("SignIn failed:", response.status, await response.text());
      } else {
        alert("An error occurred while logging in. Please try again later.");
      }
    } catch (e) {
      alert("An error occurred while signing up. Please try again later.");
      console.error("Error:", e);
    }
  };

  // await handleSubmit

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          {/* <SitemarkIcon /> */}
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <TextField
                variant="outlined"
                size="small"
                type="text"
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                placeholder="Full name"
                error={nameError}
                helperText={nameErrorMessage}
                color={nameError ? "error" : "primary"}
                // icon={<SitemarkIcon />}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="example@gmail.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="phone">Phone Number</FormLabel>
              <TextField
                required
                fullWidth
                id="phone"
                placeholder="+254717000000"
                name="phone"
                autoComplete=""
                variant="outlined"
                // error={phoneError}
                // helperText={phoneErrorMessage}
                // color={phoneError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="address">Location</FormLabel>
              <TextField
                autoComplete="address"
                name="address"
                required
                fullWidth
                id="address"
                placeholder="24,Nairobi"
                // error={addressError}
                // helperText={addressErrorMessage}
                // color={addressError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>
            {/* <FormControlLabel
              control={<Checkbox value="admin" color="primary" />}
              label="Admin."
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign up
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: "text.secondary" }}>or</Typography>
          </Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign up with Google")}
              startIcon={<GoogleIcon />}
            >
              Sign up with Google
            </Button> */}
            {/* <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign up with Facebook")}
              startIcon={<FacebookIcon />}
            >
              Sign up with Facebook
            </Button> */}
            <Typography sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <Link
                href="/SignIn"
                variant="body2"
                sx={{ alignSelf: "center" }}
                // onClick ={(){}}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
}
// import React from 'react';

// const SignUp = () => {
//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <p>This is the SignUp component.</p>
//     </div>
//   );
// };

// export default SignUp;
