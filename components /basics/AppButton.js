import { LoadingButton } from '@mui/lab'

export default function AppButton({ title = 'App Button', ...otherProps }) {
  const buttonCustomStyle = {
    borderRadius: '80px',
    transition: 'all 0.3s ease',
    background:
      otherProps?.variant == 'contained'
        ? 'linear-gradient(270deg, #0095ed -1.84%, #151ecf 103.16%)'
        : otherProps?.variant == 'outlined'
        ? 'linear-gradient(270deg, #0095ed -1.84%, #151ecf 103.16%)'
        : 'none',
    color:
      otherProps?.variant == 'contained'
        ? 'white'
        : otherProps?.variant == 'outlined'
        ? 'transparent'
        : 'none',
    border:
      otherProps?.variant == 'contained'
        ? 'none'
        : otherProps?.variant == 'outlined'
        ? '1.1px solid #575FF0'
        : 'none',
    backgroundClip: otherProps?.variant == 'outlined' ? 'text' : 'none',
    //hover animation
    '&:hover': {
      background:
        otherProps?.variant == 'contained'
          ? 'linear-gradient(270deg, #0095ed -1.84%, #151ecf 103.16%)'
          : otherProps?.variant == 'outlined'
          ? 'linear-gradient(270deg, #0095ed -1.84%, #151ecf 103.16%)'
          : 'none',
      border:
        otherProps?.variant == 'contained'
          ? '1.1px solid #575FF0'
          : otherProps?.variant == 'outlined'
          ? '1.1px solid transparent'
          : 'none',
      color:
        otherProps?.variant == 'contained'
          ? 'transparent'
          : otherProps?.variant == 'outlined'
          ? 'white'
          : 'none',
      backgroundClip: otherProps?.variant == 'contained' ? 'text' : 'none',
    },
  }
  return (
    <>
      <LoadingButton sx={buttonCustomStyle} {...otherProps}>
        {title}
      </LoadingButton>
    </>
  )
}
