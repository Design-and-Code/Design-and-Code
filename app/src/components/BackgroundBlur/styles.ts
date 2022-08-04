import { styled } from '@mui/material';

export const BackgroundBlurWrapper = styled('div')(({ theme }) => ({
  zIndex: -1,
  position: "fixed",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
'.blurredCircle1': {
  borderRadius: 9999,
  backgroundColor: theme.palette.primary.blurColor,
  position: "absolute",
  filter: "blur(190px)",
  top: 0,
  left: 0,
  height: 400,
  width: 400,
  [theme.breakpoints.down("sm")]: {
    height: 200,
    width: 200,
  },
},
'.blurredCircle2': {
  borderRadius: 9999,
  backgroundColor: theme.palette.primary.blurColor,
  position: "absolute",
  filter: "blur(190px)",
  bottom: 0,
  right: 0,
  height: 400,
  width: 400,
  [theme.breakpoints.down("sm")]: {
    height: 200,
    width: 200,
  },
}
}))