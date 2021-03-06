import { Card, CardContent, CardHeader, Grid, Typography, Icon, Box } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import { useStyles } from './languages.styles'

export const Languages = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root} elevation={3}>
      <CardHeader title='Languages' className={classes.header} />
      <CardContent>
        <Grid container>
          <Grid container item xs={5} alignItems='center'>
            <Typography variant='h6'>Fluent</Typography>
            <Icon>
              <ArrowDropDownIcon />
            </Icon>
          </Grid>
          <Grid container item direction='column' xs={12} alignContent='flex-start'>
            <Box pl={4}>
              <Typography variant='body1' color='textSecondary'>
                English
              </Typography>
              <Typography variant='body1' color='textSecondary'>
                Ukrainian
              </Typography>
              <Typography variant='body1' color='textSecondary'>
                Polish
              </Typography>
              <Typography variant='body1' color='textSecondary'>
                Russian
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
