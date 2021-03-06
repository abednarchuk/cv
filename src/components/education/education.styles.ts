import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 610,
    height: 'fit-content',
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  header: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  itemLeft: {
    width: 100,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  itemContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: 'auto',
  },
}))
