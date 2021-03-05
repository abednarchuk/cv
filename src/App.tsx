import { useEffect, useState } from 'react'
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  Icon,
  LinearProgress,
  Switch,
  IconButton,
  createMuiTheme,
  Paper,
} from '@material-ui/core'
import Brightness6Icon from '@material-ui/icons/Brightness6'
import Brightness2Icon from '@material-ui/icons/Brightness2'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { darkTheme, lightTheme } from './theme.styles'

import { useStyles } from './app.styles'
import { Bio } from './components/bio/Bio'

export const App = () => {
  const classes = useStyles()
  const [theme, setTheme] = useState(false)

  const themeIcon = theme ? <Brightness6Icon /> : <Brightness2Icon />
  // @ts-ignore
  const appliedTheme = createMuiTheme(theme ? lightTheme : darkTheme)

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Bio />
      {/* <Container maxWidth='md' className={classes.bio}>
        <IconButton className={classes.theme_switch} onClick={() => setTheme(!theme)}>
          {themeIcon}
        </IconButton>

        <Grid container direction='column'>
          <Bio />
          <Grid item>
            <Typography variant='h4' align='center'>
              SKILLS
            </Typography>
          </Grid>
          <Paper className={classes.skills_paper} elevation={3}>
            <Grid item container className={classes.skills}>
              <Grid item md={2} sm={2} xs={false} />
              <Grid item md={8} sm={8} xs={12}>
                <Typography variant='body1'>HTML</Typography>
                <LinearProgress
                  className={classes.html}
                  variant='determinate'
                  value={82}
                  valueBuffer={0}
                />
              </Grid>
              <Grid item md={2} sm={2} xs={false} />
            </Grid>
            <Grid item container className={classes.skills}>
              <Grid item md={2} sm={2} xs={false} />
              <Grid item md={8} sm={8} xs={12}>
                <Typography variant='body1'>CSS</Typography>
                <LinearProgress
                  variant='determinate'
                  color='secondary'
                  value={84}
                  valueBuffer={0}
                  className={classes.css}
                />
              </Grid>
              <Grid item md={2} sm={2} xs={false} />
            </Grid>
            <Grid item container className={classes.skills}>
              <Grid item md={2} sm={2} xs={false} />
              <Grid item md={8} sm={8} xs={12}>
                <Typography variant='body1'>JAVASCRIPT</Typography>
                <LinearProgress
                  variant='determinate'
                  value={79}
                  valueBuffer={0}
                  className={classes.javascript}
                />
              </Grid>
              <Grid item md={2} sm={2} xs={false} />
            </Grid>
            <Grid item container className={classes.skills}>
              <Grid item md={2} sm={2} xs={false} />
              <Grid item md={8} sm={8} xs={12}>
                <Typography variant='body1'>NODE</Typography>
                <LinearProgress
                  variant='determinate'
                  color='secondary'
                  value={52}
                  valueBuffer={0}
                  className={classes.node}
                />
              </Grid>
              <Grid item md={2} sm={2} xs={false} />
            </Grid>
            <Grid item container className={classes.skills}>
              <Grid item md={2} sm={2} xs={false} />
              <Grid item md={8} sm={8} xs={12}>
                <Typography variant='body1'>REACT</Typography>
                <LinearProgress
                  variant='determinate'
                  color='secondary'
                  value={69}
                  valueBuffer={0}
                  className={classes.react}
                />
              </Grid>
              <Grid item md={2} sm={2} xs={false} />
            </Grid>
            <Grid item container className={classes.skills}>
              <Grid item md={2} sm={2} xs={false} />
              <Grid item md={8} sm={8} xs={12}>
                <Typography variant='body1'>REDUX</Typography>
                <LinearProgress
                  variant='determinate'
                  value={62}
                  valueBuffer={0}
                  className={classes.redux}
                />
              </Grid>
              <Grid item md={2} sm={2} xs={false} />
            </Grid>
            <Grid item container className={classes.skills}>
              <Grid item md={2} sm={2} xs={false} />
              <Grid item md={8} sm={8} xs={12}>
                <Typography variant='body1'>EXPRESS</Typography>
                <LinearProgress
                  variant='determinate'
                  value={62}
                  valueBuffer={0}
                  className={classes.express}
                />
              </Grid>
              <Grid item md={2} sm={2} xs={false} />
            </Grid>
            <Grid item container className={classes.skills}>
              <Grid item md={2} sm={2} xs={false} />
              <Grid item md={8} sm={8} xs={12}>
                <Typography variant='body1'>GRAPHQL</Typography>
                <LinearProgress
                  variant='determinate'
                  value={29}
                  valueBuffer={0}
                  className={classes.graphql}
                />
              </Grid>
              <Grid item md={2} sm={2} xs={false} />
            </Grid>
            <Grid item container className={classes.skills}>
              <Grid item md={2} sm={2} xs={false} />
              <Grid item md={8} sm={8} xs={12}>
                <Typography variant='body1'>MONGODB</Typography>
                <LinearProgress
                  variant='determinate'
                  color='secondary'
                  value={43}
                  valueBuffer={0}
                  className={classes.mongodb}
                />
              </Grid>
              <Grid item md={2} sm={2} xs={false} />
            </Grid>
          </Paper>
        </Grid> 
        </Container>
        
        */}
    </ThemeProvider>
  )
}
