import { Card, CardContent, Typography, Button } from '@material-ui/core'
import { useStyles } from './footer.styles'

export const Footer = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>
          Made with
          <Button href='https://reactjs.org/' target='_blank' color='inherit'>
            React
          </Button>
          and
          <Button href='https://material-ui.com/' target='_blank' color='inherit'>
            Material-UI
          </Button>
        </Typography>
      </CardContent>
    </Card>
  )
}
