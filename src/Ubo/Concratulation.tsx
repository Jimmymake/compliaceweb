import React from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/material'
const Concratulation = () => {
  return (
    <React.Fragment>
    <Box
      sx={{
        mt: 6,
        mb: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "40vh",
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        🎉 Congratulations!
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        You have completed all steps of the onboarding process.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Thank you for providing all the required information. Our team will review your submission and contact you if anything else is needed.
      </Typography>
<Button color='primary'> </Button>
      
      {/* You can add a button to go back to home or reset the form */}
      {/* <Button variant="contained" onClick={handleReset}>Start Over</Button> */}
    </Box>
  </React.Fragment>
) 
// : (
//   <React.Fragment>
//     {/* Render the form for the current step */}
//     <Box sx={{ mt: 2, mb: 2 }}>{stepComponents[activeStep]}</Box>
//     <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//       <Button
//         color="inherit"
//         disabled={activeStep === 0}
//         onClick={handleBack}
//         sx={{ mr: 1 }}
//       >
//         Back
//       </Button>
//       <Box sx={{ flex: "1 1 auto" }} />
//       <Button onClick={handleNext}>
//         {activeStep === steps.length - 1 ? "Finished!" : "Next"}
//       </Button>
//     </Box>
//   </React.Fragment>
//   )
}

export default Concratulation