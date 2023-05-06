// import React from 'react'
import PropTypes from "prop-types";
// @mui
import {
  Grid,
  Card,
  Typography,
  Stack,
  Box,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
// import { useGetAllAddressById } from "../services/addressServices";
import { AppButton } from "../../basics";
import { useTheme } from "@emotion/react";
import { BiPlus } from "react-icons/bi";
import LoadingScreen from "../../basics/LoadingScreen";
import { useGetAllAddressById } from "services/addressServices";

function BillingAndShippingAccordion({
  expanded,
  userData,
  handleOpen,
  handleChangeAccordion,
  onCreateShipping,
  onCreateBilling,
  shippingAddress,
}) {
  const { data, isError, isLoading } = useGetAllAddressById(userData?._id);

  const theme = useTheme();

  const handleSameAsShipping = (event) => {
    if (event.target.checked) {
      onCreateBilling(shippingAddress);
    }
  };

  if (isLoading) return <LoadingScreen />;

  if (isError) return <div>Error</div>;
  return (
    <Card
      sx={{
        p: 1,
        background: theme.palette.background.neutral,
      }}
    >
      <Accordion
        sx={{
          p: 2,
          background: theme.palette.background.paper,
        }}
        expanded={expanded === "shippingAccordion"}
        onChange={handleChangeAccordion("shippingAccordion")}
      >
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="shippingAccordion-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle1">Shipping Address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" justifyContent="end" sx={{ mb: 1 }}>
            <AppButton
              size="small"
              variant="soft"
              onClick={handleOpen}
              startIcon={<BiPlus />}
              title={"Add New addresss"}
            />
          </Stack>
          <Grid container spacing={3}>
            {data?.map((address, index) => {
              return (
                <Grid key={index} item xs={12} md={6}>
                  <AddressItem
                    address={address}
                    handleAddressChange={() => onCreateShipping(address)}
                    handleOpen={() => handleOpen(address)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          p: 2,
          background: theme.palette.background.paper,
        }}
        expanded={expanded === "billingAccordion"}
        onChange={handleChangeAccordion("billingAccordion")}
      >
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="subtitle1">Billing Address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            display={"flex"}
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
            sx={{ mb: 1 }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <FormControlLabel
                label={"Same as Shipping Address"}
                control={<Checkbox onChange={handleSameAsShipping} />}
              />
            </Box>
            <AppButton
              size="small"
              variant="soft"
              onClick={handleOpen}
              startIcon={<BiPlus />}
              title={"Add New addresss"}
            />
          </Stack>
          <Grid container spacing={3}>
            {data?.map((address, index) => {
              return (
                <Grid key={index} item xs={12} md={6}>
                  <AddressItem
                    address={address}
                    handleAddressChange={() => onCreateBilling(address)}
                    handleOpen={() => handleOpen(address)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}

export default BillingAndShippingAccordion;
//---------------------------------------------------------------------------------------------------------------

AddressItem.propTypes = {
  address: PropTypes.object,
  handleSetShippingAddress: PropTypes.func,
  onCreateBilling: PropTypes.func,
};
function AddressItem({ address, handleAddressChange, handleOpen }) {
  const { name, delivery_address, address_title, contact_no, shipping_status } =
    address;

  return (
    <Card
      className="max-h-address-max min-h-address-min relative"
      sx={{
        p: 2,
      }}
    >
      <Stack
        spacing={2}
        alignItems={{
          md: "flex-end",
        }}
        direction={{
          xs: "column",
          md: "row",
        }}
      >
        <Stack flexGrow={1} spacing={1}>
          <Stack direction="row" alignItems="center">
            <Typography variant="subtitle1" className="capitalize">
              {name}
              <Box
                component="span"
                sx={{ ml: 0.5, typography: "body2", color: "text.secondary" }}
                className="capitalize"
              >
                ({address_title})
              </Box>
            </Typography>

            {shipping_status && (
              <Typography color="info" sx={{ ml: 1 }}>
                Default
              </Typography>
            )}
          </Stack>

          <Typography variant="body2" className="capitalize">
            {delivery_address}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {contact_no}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        flexShrink={0}
        sx={{ mt: 1 }}
        className="absolute left-0 pl-3 bottom-3 w-full space-x-2"
      >
        <AppButton
          variant="outlined"
          size="small"
          color="inherit"
          onClick={handleOpen}
          title={"Edit"}
        />
        <AppButton
          variant="contained"
          size="small"
          onClick={handleAddressChange}
          title={"Deliver to this Address"}
        />
      </Stack>
    </Card>
  );
}
