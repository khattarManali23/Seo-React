import PropTypes from 'prop-types';
import { useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
// next
import { useRouter } from 'next/router';
// @mui
import {
  Box,
  Stack,
  Button,
  Dialog,
  Tooltip,
  IconButton,
  DialogActions,
  CircularProgress,
} from '@mui/material';

//
import InvoicePDF from './InvoicePDF';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// ----------------------------------------------------------------------

InvoiceToolbar.propTypes = {
  invoice: PropTypes.object,
};

export default function InvoiceToolbar({ invoice }) {
  const { push } = useRouter();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    push(PATH_DASHBOARD.invoice.edit(invoice.id));
  };

  return (
    <>
      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ sm: 'center' }}
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1}>
          <Tooltip title="Edit">
            <IconButton onClick={handleEdit}>
              <AiOutlineCloseCircle/>
            </IconButton>
          </Tooltip>

          <Tooltip title="View">
            <IconButton onClick={handleOpen}>
              <AiOutlineCloseCircle />
            </IconButton>
          </Tooltip>

          <PDFDownloadLink
            document={<InvoicePDF invoice={invoice} />}
            fileName={invoice.invoiceNumber}
            style={{ textDecoration: 'none' }}
          >
            {({ loading }) => (
              <Tooltip title="Download">
                <IconButton>
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    <AiOutlineCloseCircle/>
                  )}
                </IconButton>
              </Tooltip>
            )}
          </PDFDownloadLink>

          <Tooltip title="Print">
            <IconButton>
              <AiOutlineCloseCircle />
            </IconButton>
          </Tooltip>

          <Tooltip title="Send">
            <IconButton>
              <AiOutlineCloseCircle/>
            </IconButton>
          </Tooltip>

          <Tooltip title="Share">
            <IconButton>
              <AiOutlineCloseCircle />
            </IconButton>
          </Tooltip>
        </Stack>

        <Button
          color="inherit"
          variant="outlined"
          startIcon={<AiOutlineCloseCircle/>}
          sx={{ alignSelf: 'flex-end' }}
        >
          Mark as Paid
        </Button>
      </Stack>

      <Dialog fullScreen open={open}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <DialogActions
            sx={{
              zIndex: 9,
              padding: '12px !important',
              boxShadow: (theme) => theme.customShadows.z8,
            }}
          >
            <Tooltip title="Close">
              <IconButton color="inherit" onClick={handleClose}>
                <AiOutlineCloseCircle />
              </IconButton>
            </Tooltip>
          </DialogActions>
          <Box sx={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
            <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
              <InvoicePDF invoice={invoice} />
            </PDFViewer>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
