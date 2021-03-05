import { Typography, Grid, Avatar, Box, Paper } from '@material-ui/core'
import { useStyles } from './bio.styles'

export const Bio = () => {
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.root} elevation={2}>
        <Grid container direction='column'>
          <Grid item>
            <Avatar src='/avatar.jpg' className={classes.avatar} />
          </Grid>
          <Box my={1} />
          <Grid item className={classes.bioInfo}>
            <Typography variant='h6'>Name</Typography>
          </Grid>
          <Grid item className={classes.bioInfo}>
            <Typography variant='body1' color='textSecondary' gutterBottom>
              Andrii Bednarchuk
            </Typography>
          </Grid>
          <Grid item className={classes.bioInfo}>
            <Typography variant='h6'>Email</Typography>
          </Grid>
          <Grid item className={classes.bioInfo}>
            <Typography variant='body1' color='textSecondary' gutterBottom>
              andrii.bednarchuk@gmail.com
            </Typography>
          </Grid>
          <Grid item className={classes.bioInfo}>
            <Typography variant='h6'>Phone</Typography>
          </Grid>
          <Grid item className={classes.bioInfo}>
            <Typography variant='body1' color='textSecondary' gutterBottom>
              +380669849627
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}
