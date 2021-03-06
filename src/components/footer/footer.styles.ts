import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    maxWidth: 900,
    width: '100%',
    textAlign: 'center',
    '& .MuiCardContent-root': {
      padding: 5,
    },
  },
}))
