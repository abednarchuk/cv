import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 275,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  header: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
}))
