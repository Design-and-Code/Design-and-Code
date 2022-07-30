import { Button, styled } from '@mui/material';

export const OutlineButton = styled(Button)(({ theme }) => ({
  borderRadius: 80,
  height: 'fit-content',
  textTransform: 'unset',
  border: `2px solid ${theme.palette.primary.gradient1}`,
  color: theme.palette.text.primary,
  background: theme.palette.primary.mainGradient,
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
    padding: '0.6rem 40px !important',
  },
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
}));

export const ContainedButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.mainGradient,
  color: theme.palette.text.primary,
  borderRadius: 80,
  height: 'fit-content',
  textTransform: 'unset',
  [theme.breakpoints.down('sm')]: {
    padding: '0.6rem 40px',
  },
}));
