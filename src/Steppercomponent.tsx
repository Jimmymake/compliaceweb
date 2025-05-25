
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Import your form components
import CompanyInformation from "./CompanyInformation/CompanyInformation";
import Ubo from "./Ubo/Ubo";
import SettlementBankDetails from "./BankDetails/BankDetails";
import ComplianceAndRiskManagement from "./ComplianceAndRiskMangement/ComplianceAndRiskMangement";
// import PaymentInformation from './PaymentInformation/PaymentInformation';
import PaymentProcessingInformation from "./PaymentProcessingInformation/PaymentProcessingInformation";
import DocumentRequiredChecklist from "./BankDetails/DocumentRequirmentchecklist/Documentrequredchecklist";
import { Tabs, Tab, AppBar } from "@mui/material";
import Concratulation from "./Ubo/Concratulation";

const steps = [
  "Company Infor",
  "UBO",
  "Payment Infor",
  "Bank DetailS",
  "RiskManagement Infor",
  "KYC Documents",
];

const stepComponents = [
  <CompanyInformation key="company" />,
  <Ubo key="ubo" />,
  <PaymentProcessingInformation key="payment" />,
  <SettlementBankDetails key="bank" />,
  <ComplianceAndRiskManagement key={"riskmanagement"} />,
  <DocumentRequiredChecklist key="documents" />,
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  // const isStepOptional = (step: number) => step === 1;
  const isStepSkipped = (step: number) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   // if (!isStepOptional(activeStep)) {
  //   //   throw new Error("You can't skip a step that isn't optional.");
  //   // }
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <React.Fragment>
      <AppBar
        color="inherit"
        component="div"
        position="sticky"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          top: { xs: 56, sm: 55 },
        }}
      >
  <Stepper activeStep={activeStep}>
    {steps.map((label, index) => {
      const stepProps: { completed?: boolean } = {};
      const labelProps: { optional?: React.ReactNode; sx?: object } = {
        sx: { fontSize: '12px' }, // <-- small font for label
      };
      return (
        <Step key={label} {...stepProps}>
          <StepLabel {...labelProps}>
            <Typography variant="caption" sx={{ fontSize: '12px' }}>
              {label}
            </Typography>
          </StepLabel>
        </Step>
      );
    })}
  </Stepper>
      </AppBar>

      <Box sx={{ width: "100%" }}>
        {/* <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper> */}
        {activeStep === steps.length ? (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>
              Congratulations!! completed All Steps
            </Typography> */}
            <Concratulation></Concratulation>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* <Button onClick={handleReset}>Reset</Button> */}
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* Render the form for the current step */}
            <Box sx={{ mt: 2, mb: 2 }}>{stepComponents[activeStep]}</Box>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finished!" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </React.Fragment>
  );
}
