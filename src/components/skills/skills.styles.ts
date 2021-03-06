import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 610,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    height: 'fit-content',
    '& .MuiLinearProgress-root': {
      height: 8,
    },
  },
  header: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  html: {
    backgroundColor: 'rgba(255,77,0,0.3)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'rgba(255,77,0,1)',
    },
  },
  css: {
    backgroundColor: 'rgba(50,114,209,0.3)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'rgba(50,114,209,1)',
    },
  },
  javascript: {
    backgroundColor: 'rgba(162, 181, 14,0.3)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'rgba(162, 181, 14,1)',
    },
  },
  react: {
    backgroundColor: 'rgba(0,255,247,0.3)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'rgba(0,255,247,1)',
    },
  },
  redux: {
    backgroundColor: 'rgba(123,0,255,0.3)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'rgba(123,0,255,1)',
    },
  },
  node: {
    backgroundColor: 'rgba(0,209,45,0.3)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'rgba(0,209,45,1)',
    },
  },
  express: {
    backgroundColor: 'rgba(144,189,128,0.3)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'rgba(144,189,128,1)',
    },
  },
  graphql: {
    backgroundColor: 'rgba(222,77,247,0.3)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'rgba(222,77,247,1)',
    },
  },
  mongodb: {
    backgroundColor: 'rgba(106,189,113,0.3)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'rgba(106,189,113,1)',
    },
  },
}))
