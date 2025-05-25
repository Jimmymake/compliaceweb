 import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import CompanyInformation from '../CompanyInformation/CompanyInformation';
import HorizontalLinearStepper from '../Steppercomponent'

const FormTab = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <HorizontalLinearStepper></HorizontalLinearStepper>
      </Container>
    </React.Fragment>
  )
}

export default FormTab