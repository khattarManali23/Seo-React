import { TextField } from '@mui/material'
// import React from 'react'

export default function AppSearchBar() {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '80px',
            '&.Mui-focused fieldset legend': {},
          },
        }}
      />
    </div>
  )
}
