import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import { FormLabelProps } from "@mui/material/FormLabel";
import { Typography, Stack } from "@mui/material";
import { Radio, RadioGroup } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
// import Test from "../test";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));
export default function CompanyInformation() {
  const [formData, setFormData] = useState({
    company: {
      company_name: "",
      merchant_url: "",
      date_of_incorporation: "",
      company_reg_number: "",
      country_of_incorporation: "",
      company_email: "",
      contact_person_full_name: "",
      contact_person_telephone: "",
      contact_person_email: "",
      business_description: "",
      company_source_of_funds: "",
      business_relationship_purpose: "",
      is_licensed: true,
      bank_name: "",
      swift_code: "",
      target_markets: [],
      countries_of_operation: [],
      previously_used_payment_gateways: [],
      licenceNumber: "",
      licenceType: "",
      jurisdictions: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Fields that should be arrays
    const arrayFields = [
      "target_markets",
      "countries_of_operation",
      "previously_used_payment_gateways",
    ];

    setFormData((prevData) => {
      if (name in prevData.company) {
        // Convert to array if needed
        if (arrayFields.includes(name)) {
          return {
            ...prevData,
            company: {
              ...prevData.company,
              [name]: value
                .split(",")
                .map((v) => v.trim())
                .filter(Boolean),
            },
          };
        }
        // Handle boolean for is_licensed
        if (name === "is_licensed") {
          return {
            ...prevData,
            company: {
              ...prevData.company,
              [name]: value === "true",
            },
          };
        }
        return {
          ...prevData,
          company: {
            ...prevData.company,
            [name]: value,
          },
        };
      }
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ formData });

    const token = localStorage.getItem("token");

    // Only send the company object to the company API
    try {
      const response = await fetch(
        "https://orderly-m2qc.onrender.com/Api/company/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify({ company: formData.company }), // <-- wrap in { company: ... }
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        console.log({ formData });
        console.log('token:', token);
        alert("Form submitted successfully!");

        // Optionally, send license fields to their own API if needed
        if (formData.company.is_licensed) {
          await fetch("YOUR_LICENSE_API_ENDPOINT", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(token && { Authorization: `Bearer ${token}` }),
            },
            body: JSON.stringify({
              licenceNumber: formData.company.licenceNumber,
              licenceType: formData.company.licenceType,
              jurisdictions: formData.company.jurisdictions,
              // add company id or reference if needed
            }),
          });
        }
      } else {
        alert("Failed to submit the form.");
        console.log({ formData });
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
      console.log({ formData });
      alert("An error occurred while submitting the form.");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack>
          <Typography color="info" fontWeight="bold" variant="h6" gutterBottom>
            Company Information
          </Typography>
          <Grid container spacing={3}>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="company_name" required>
                Company name
              </FormLabel>
              <OutlinedInput
                id="company_name"
                name="company_name"
                type="text"
                value={formData.company.company_name}
                onChange={handleChange}
                placeholder="Company Name"
                autoComplete="organization"
                required
                size="small"
              />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="l" required>
                Merchant URL
              </FormLabel>
              <OutlinedInput
                id="merchant_url"
                name="merchant_url"
                type="text"
                value={formData.company.merchant_url}
                onChange={handleChange}
                placeholder="https://www.example.com"
                autoComplete="url"
                required
                size="small"
              />
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
              <FormLabel htmlFor="date_of_incorporation" required>
                Date of incorporation
              </FormLabel>
              <OutlinedInput
                id="date_of_incorporation"
                name="date_of_incorporation"
                type="date"
                value={formData.company.date_of_incorporation}
                onChange={handleChange}
                placeholder="YYYY-MM-DD"
                autoComplete="date"
                required
                size="small"
              />
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
              <FormLabel htmlFor="company_reg_number" required>
                Company Reg Number
              </FormLabel>
              <OutlinedInput
                id="company_reg_number"
                name="company_reg_number"
                type="text"
                placeholder="Company Reg Number"
                value={formData.company.company_reg_number}
                onChange={handleChange}
                // autoComplete="shipping address-line1"
                required
                size="small"
              />
            </FormGrid>

            <FormGrid size={{ xs: 12 }}>
              <FormLabel htmlFor="company_email" required>
                Company Email
              </FormLabel>
              <OutlinedInput
                id="company_email"
                name="company_email"
                type="email"
                value={formData.company.company_email}
                onChange={handleChange}
                placeholder="example@company.com"
                autoComplete="email"
                required
                size="small"
              />
            </FormGrid>
            <FormGrid size={{ xs: 12 }}>
              <FormLabel htmlFor="country_of_incorporation" required>
                Country of Incorporation
              </FormLabel>
              <OutlinedInput
                id="country_of_incorporation"
                name="country_of_incorporation"
                type="text"
                value={formData.company.country_of_incorporation}
                onChange={handleChange}
                placeholder="United States"
                autoComplete="shipping country"
                required
                size="small"
              />
            </FormGrid>
            <FormGrid size={{ xs: 6 }}>
              <FormLabel htmlFor="contact_person_full_name" required>
                Contact Person Full Name
              </FormLabel>
              <OutlinedInput
                id="contact_person_full_name"
                name="contact_person_full_name"
                type="text"
                value={formData.company.contact_person_full_name}
                onChange={handleChange}
                placeholder="John Doe"
                autoComplete="name"
                required
                size="small"
              />
            </FormGrid>
            <FormGrid size={{ xs: 6 }}>
              <FormLabel htmlFor="contact_person_telephone" required>
                Contact Person Telephone Number
              </FormLabel>
              <OutlinedInput
                id="contact_person_telephone"
                name="contact_person_telephone"
                type="text"
                value={formData.company.contact_person_telephone}
                onChange={handleChange}
                placeholder="123-456-7890"
                autoComplete="tel"
                required
                size="small"
              />
            </FormGrid>
            <FormGrid size={{ xs: 12 }}>
              <FormLabel htmlFor="contact_person_email" required>
                Contact Person Email
              </FormLabel>
              <OutlinedInput
                id="contact_person_email"
                name="contact_person_email"
                type="email"
                value={formData.company.contact_person_email}
                onChange={handleChange}
                placeholder="example@company.com"
                autoComplete="email"
                required
                size="small"
              />
            </FormGrid>
            <FormGrid size={{ xs: 12 }}>
              <FormLabel htmlFor="business_description" required>
                Business Description/Industry
              </FormLabel>
              <OutlinedInput
                id="business_description"
                name="business_description"
                type="text"
                placeholder="Business Description/Industry"
                autoComplete="business_description"
                required
                size="small"
                value={formData.company.business_description}
                onChange={handleChange}
              />
            </FormGrid>

            <FormGrid size={{ xs: 12 }}>
              <FormLabel htmlFor="company_source_of_funds" required>
                Company Source of Funds and Wealth
              </FormLabel>
              <OutlinedInput
                id="company_source_of_funds"
                name="company_source_of_funds"
                type="text"
                placeholder="Company Source of Funds and Wealth"
                autoComplete="company_source_of_funds"
                required
                size="small"
                value={formData.company.company_source_of_funds}
                onChange={handleChange}
              />
            </FormGrid>
            <FormGrid size={{ xs: 12 }}>
              <FormLabel htmlFor="business_relationship_purpose" required>
                Purpose and Intended Nature of Business Relationship with Us
              </FormLabel>
              <OutlinedInput
                id="business_relationship_purpose"
                name="business_relationship_purpose"
                type="text"
                placeholder="Purpose and Intended Nature of Business Relationship with Us"
                autoComplete="business_relationship_purpose"
                required
                size="small"
                value={formData.company.business_relationship_purpose}
                onChange={handleChange}
              />
            </FormGrid>

            <FormControl>
              <FormLabel>
                Are the Activities of the Company Subjected to Licensing (If
                Yes: License Number, Type, and Jurisdiction: )
              </FormLabel>
              <RadioGroup
                name="is_licensed"
                value={formData.company.is_licensed}
                onChange={handleChange}
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
            </FormControl>

            {formData.company.is_licensed === true && (
              <>
                <FormGrid size={{ xs: 6 }}>
                  <FormLabel htmlFor="licenceNumber" required>
                    Licence Number
                  </FormLabel>
                  <OutlinedInput
                    id="licenceNumber"
                    name="licenceNumber"
                    type="text"
                    placeholder="123-456-7890"
                    autoComplete="tel"
                    size="small"
                    // value={formData.licenceNumber}
                    onChange={handleChange}
                  />
                </FormGrid>

                <FormGrid size={{ xs: 6 }}>
                  <FormLabel htmlFor="licenceType" required>
                    Licence Type
                  </FormLabel>
                  <OutlinedInput
                    id="licenceType"
                    name="licenceType"
                    type="text"
                    placeholder="Type of Licence"
                    autoComplete="off"
                    size="small"
                    // value={formData.licenceType}
                    onChange={handleChange}
                  />
                </FormGrid>

                <FormGrid size={{ xs: 12 }}>
                  <FormLabel htmlFor="jurisdictions" required>
                    Jurisdictions
                  </FormLabel>
                  <OutlinedInput
                    id="jurisdictions"
                    name="jurisdictions"
                    type="text"
                    placeholder="Jurisdictions"
                    autoComplete="off"
                    size="small"
                    // value={formData.jurisdictions}
                    onChange={handleChange}
                  />
                </FormGrid>
              </>
            )}
            <FormGrid size={{ xs: 6 }}>
              <FormLabel htmlFor="bank_name" required>
                Bank Name
              </FormLabel>
              <OutlinedInput
                id="bank_name"
                name="bank_name"
                type="text"
                placeholder="Bank name"
                autoComplete="off"
                required
                size="small"
                value={formData.company.bank_name}
                onChange={handleChange}
              />
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
              <FormLabel htmlFor="swift_code" required>
                BIC/SWIFT Code
              </FormLabel>
              <OutlinedInput
                id="swift_code"
                name="swift_code"
                type="text"
                placeholder="BIC/SWIFT Code"
                autoComplete="off"
                required
                size="small"
                value={formData.company.swift_code}
                onChange={handleChange}
              />
            </FormGrid>
            <FormGrid size={{ xs: 12 }}>
              {/* <Test></Test> */}
              {/* <Test onChange={handleCountryChange}></Test> */}
              <FormLabel htmlFor="target_markets" required>
                Target Countries of Operation
              </FormLabel>
              <OutlinedInput
                id="target_markets"
                name="target_markets"
                type="text"
                placeholder="Country 1, Country 2, Country 3"
                autoComplete="off"
                required
                size="small"
                value={formData.company.target_markets.join(", ")}
                onChange={handleChange}
              />
            </FormGrid>
            {/* <Test></Test> */}
            <FormGrid size={{ xs: 12 }}>
              {/* <Test></Test> */}
              {/* <Test onChange={handleCountryChange}></Test> */}
              <FormLabel htmlFor="countries_of_operation" required>
                List of Top 5 Countries of Operation
              </FormLabel>
              <OutlinedInput
                id="countries_of_operation"
                name="countries_of_operation"
                type="text"
                placeholder="Country 1, Country 2, Country 3, Country 4, Country 5"
                autoComplete="off"
                required
                size="small"
                value={formData.company.countries_of_operation.join(",")}
                onChange={handleChange}
              />
            </FormGrid>

            <FormGrid size={{ xs: 12 }}>
              <FormLabel htmlFor="previously_used_payment_gateways" required>
                Previously Used Payment Gateways(if applicable)
              </FormLabel>
              <OutlinedInput
                id="previously_used_payment_gateways"
                name="previously_used_payment_gateways"
                type="text"
                placeholder="PayPal, Stripe, etc."
                autoComplete="off"
                size="small"
                value={formData.company.previously_used_payment_gateways.join(
                  ","
                )}
                onChange={handleChange}
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
    </>
  );
}
