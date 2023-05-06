import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Grid,
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableContainer,
  Stack,
} from "@mui/material";
// utils
import Logo from "../../../assets/hercoPowerImages/mobilelogo.png";
// components

import Image from "next/image";
import moment from "moment";

import { useGetOneAddressById } from "services/addressServices";
import { AppData } from "data/app-data";
import { formatCurrency } from "utils/utils-fun";
import Scrollbar from "components/scrollbar/Scrollbar";
import Label from "components/product/Label";

// ----------------------------------------------------------------------

const StyledRowResult = styled(TableRow)(({ theme }) => ({
  "& td": {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

// ----------------------------------------------------------------------

InvoiceDetails.propTypes = {
  invoice: PropTypes.object,
};

export default function InvoiceDetails({ invoice }) {
  if (!invoice) {
    return null;
  }

  const {
    ord_status,
    discount_amt,
    ord_date,
    ord_id,
    ord_value,
    cust_type,
    bill_deliv_address,
    ship_deliv_address,
    ord_product,
    gst,
  } = invoice;
  const { shopAddressIndia, shopContactNoIndia, shopEmailIndia } =
    AppData?.webSiteData;
  const totalPrice = Number(ord_value + gst - discount_amt);
  return (
    <>
      {/* <InvoiceToolbar invoice={invoice} /> */}

      <Card sx={{ pt: 3, px: 3 }}>
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Image
              height={40}
              width={115}
              alt="logo"
              src={Logo}
              // sx={{ maxWidth: 120 }}
            />

            {/* <Typography variant="body2" className="capitalize">
              {shopName}
            </Typography> */}

            <Typography variant="body2" className="capitalize text-xs">
              {shopAddressIndia}
            </Typography>

            <Typography variant="body2" className="capitalize text-xs">
              Phone: {shopContactNoIndia}
            </Typography>
            <Typography variant="body2" className="text-xs">
              {shopEmailIndia}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Box sx={{ textAlign: { sm: "right" } }}>
              <Label
                variant="soft"
                color={
                  (ord_status === "paid" && "success") ||
                  (ord_status === "unpaid" && "warning") ||
                  (ord_status === "overdue" && "error") ||
                  "default"
                }
                sx={{ textTransform: "uppercase", mb: 1 }}
              >
                {ord_status}
              </Label>

              <Typography variant="h6">{ord_id}</Typography>
              <Typography variant="subtitle1">
                {moment(ord_date).format("MMMM DD, yyyy")}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <AddressDetails
              id={ship_deliv_address}
              title={"Shipping Address"}
            />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <AddressDetails id={bill_deliv_address} title={"Billing Address"} />
          </Grid>

          {/* <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography
              paragraph
              variant="overline"
              sx={{ color: 'text.disabled' }}
            >
              Due date
            </Typography>

            <Typography variant="body2">{dueDate}</Typography>
          </Grid> */}
        </Grid>

        <TableContainer sx={{ overflow: "unset" }}>
          <Scrollbar>
            <Table>
              <TableHead
                sx={{
                  borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                  "& th": { backgroundColor: "transparent" },
                }}
              >
                <TableRow>
                  <TableCell width={40}>#</TableCell>

                  <TableCell align="left">Product</TableCell>

                  <TableCell align="left">Qty</TableCell>

                  <TableCell align="right">Unit price</TableCell>

                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {ord_product?.cart?.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      borderBottom: (theme) =>
                        `solid 1px ${theme.palette.divider}`,
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>

                    <TableCell align="left">
                      <Box sx={{ maxWidth: 160 }}>
                        <Typography variant="subtitle2">
                          {row?.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                          noWrap
                        >
                          {row?.[`${cust_type}Rows`][0]?.variantData?.map(
                            (variant, index) => {
                              return (
                                <Stack
                                  key={index}
                                  direction="row"
                                  alignItems="center"
                                  sx={{
                                    typography: "body2",
                                    color: "text.secondary",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {variant?.title}
                                  {" :"}
                                  <Typography
                                    sx={{
                                      typography: "subtitle2",
                                      ml: 0.5,
                                      textTransform: "capitalize",
                                    }}
                                  >
                                    {" "}
                                    {variant?.value}{" "}
                                  </Typography>
                                  {/* <Divider orientation="vertical" sx={{ mx: 1, height: 16 }} /> */}
                                  {/* <ColorPreview /> */}
                                </Stack>
                              );
                            }
                          )}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell align="left">{row.quantity}</TableCell>

                    <TableCell align="right">
                      {formatCurrency(
                        row?.[`${cust_type}Rows`][0]?.perProductPrice
                      )}
                    </TableCell>

                    <TableCell align="right">
                      {formatCurrency(
                        row?.[`${cust_type}Rows`][0]?.perProductPrice *
                          row.quantity
                      )}
                    </TableCell>
                  </TableRow>
                ))}

                <StyledRowResult>
                  <TableCell colSpan={3} />

                  <TableCell align="right" sx={{ typography: "body1" }}>
                    <Box sx={{ mt: 2 }} />
                    Subtotal
                  </TableCell>

                  <TableCell
                    align="right"
                    width={120}
                    sx={{ typography: "body1" }}
                  >
                    <Box sx={{ mt: 2 }} />
                    {formatCurrency(ord_value)}
                  </TableCell>
                </StyledRowResult>

                <StyledRowResult>
                  <TableCell colSpan={3} />

                  <TableCell align="right" sx={{ typography: "body1" }}>
                    Discount
                  </TableCell>

                  <TableCell
                    align="right"
                    width={120}
                    sx={{ color: "error.main", typography: "body1" }}
                  >
                    {(discount_amt && formatCurrency(-discount_amt)) || 0}
                  </TableCell>
                </StyledRowResult>

                <StyledRowResult>
                  <TableCell colSpan={3} />

                  <TableCell align="right" sx={{ typography: "body1" }}>
                    Taxes
                  </TableCell>

                  <TableCell
                    align="right"
                    width={120}
                    sx={{ typography: "body1" }}
                  >
                    {gst && gst + " %"}
                  </TableCell>
                </StyledRowResult>

                <StyledRowResult>
                  <TableCell colSpan={3} />

                  <TableCell align="right" sx={{ typography: "h6" }}>
                    Total
                  </TableCell>

                  <TableCell
                    align="right"
                    width={140}
                    sx={{ typography: "h6" }}
                  >
                    {formatCurrency(totalPrice)}
                  </TableCell>
                </StyledRowResult>
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>

        {/* <Divider sx={{ mt: 5 }} />

        <Grid container>
          <Grid item xs={12} md={9} sx={{ py: 3 }}>
            <Typography variant="subtitle2">NOTES</Typography>

            <Typography variant="body2">
              We appreciate your business. Should you need us to add VAT or
              extra notes let us know!
            </Typography>
          </Grid>

          <Grid item xs={12} md={3} sx={{ py: 3, textAlign: 'right' }}>
            <Typography variant="subtitle2">Have a Question?</Typography>

            <Typography variant="body2">support@minimals.cc</Typography>
          </Grid>
        </Grid> */}
      </Card>
    </>
  );
}

const AddressDetails = ({ id, title }) => {
  const { data, isError, isLoading } = useGetOneAddressById(id);
  if (isLoading) return console.log("isLoading..");
  if (isError) return <h5>Error</h5>;
  const { delivery_address, name, contact_no, email_id } = data;
  return (
    <Stack>
      <Typography paragraph variant="overline" sx={{ color: "text.disabled" }}>
        {title}
      </Typography>

      <Typography variant="body2" className="capitalize">
        {name}
      </Typography>

      <Typography variant="body2" className="capitalize">
        {delivery_address}
      </Typography>

      <Typography variant="body2" className="capitalize">
        Phone: {contact_no}
      </Typography>
      <Typography variant="body2">Email: {email_id}</Typography>
    </Stack>
  );
};
