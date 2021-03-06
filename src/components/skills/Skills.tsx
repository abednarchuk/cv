import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  LinearProgress,
  Typography,
} from '@material-ui/core'
import { useStyles } from './skills.styles'

export const Skills = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root} elevation={3}>
      <CardHeader title='Skills' className={classes.header} />
      <CardContent>
        <Grid container direction='column'>
          <Grid>
            <Typography variant='body1'>
              <b>HTML</b>
            </Typography>
            <LinearProgress color='primary' variant='determinate' value={82} />
            <Box my={1} />
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              <b>CSS</b>
            </Typography>
            <LinearProgress color='primary' variant='determinate' value={84} />
            <Box my={1} />
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              <b>JAVASCRIPT</b>
            </Typography>
            <LinearProgress color='primary' variant='determinate' value={92} />
            <Box my={1} />
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              <b>TYPESCRIPT</b>
            </Typography>
            <LinearProgress color='primary' variant='determinate' value={85} />
            <Box my={1} />
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              <b>NODE</b>
            </Typography>
            <LinearProgress color='primary' variant='determinate' value={52} />
            <Box my={1} />
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              <b>REACT</b>
            </Typography>
            <LinearProgress variant='determinate' value={69} color='primary' />
            <Box my={1} />
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              <b>REDUX</b>
            </Typography>
            <LinearProgress variant='determinate' value={62} color='primary' />
            <Box my={1} />
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              <b>EXPRESS</b>
            </Typography>
            <LinearProgress variant='determinate' value={62} color='primary' />
            <Box my={1} />
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              <b>GRAPHQL</b>
            </Typography>
            <LinearProgress variant='determinate' value={29} color='primary' />
            <Box my={1} />
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              <b>MONGODB</b>
            </Typography>
            <LinearProgress variant='determinate' value={43} color='primary' />
            <Box my={1} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
