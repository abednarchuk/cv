import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  theme_switch: {
    position: 'absolute',
    top: 20,
    right: 30,
  },
  bio: {
    marginTop: 30,
  },
  avatar: {
    height: 200,
    width: 200,
  },
  header_grid: {
    width: '50%',
  },
  header_grid_item: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '5px 0 5px 0',
    '& .material-icons': {
      marginRight: 10,
    },
  },
  skills: {
    marginTop: 30,
    margin: 'auto',
  },
  skills_paper: {
    paddingBottom: 20,
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
