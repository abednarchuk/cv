import { Card, CardContent, CardHeader, Typography, Grid, Icon } from '@material-ui/core'
import { useStyles } from './education.styles'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

export const Education = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root} elevation={3}>
      <CardHeader title='Education' className={classes.header} />
      <CardContent>
        <Grid container>
          <Grid container item>
            <Grid container item className={classes.itemLeft}>
              <Typography variant='body2'>2012-2016</Typography>
              <Icon>
                <ArrowRightIcon />
              </Icon>
            </Grid>
            <Grid container item className={classes.itemContent}>
              <Typography variant='subtitle1'>
                UNIVERSITY of INFORMATION TECHNOLOGY and MANAGEMENT
              </Typography>
              <Typography variant='body2' align='right' color='textSecondary'>
                In Rzeszow, POLAND
              </Typography>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item container className={classes.itemLeft}>
              <Typography variant='body2'>status</Typography>
              <Icon>
                <ArrowRightIcon />
              </Icon>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>Graduate work unfinished</Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
