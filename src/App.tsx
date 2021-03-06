import { useState } from 'react'
import { Box, Grid, IconButton, createMuiTheme } from '@material-ui/core'
import Brightness6Icon from '@material-ui/icons/Brightness6'
import Brightness2Icon from '@material-ui/icons/Brightness2'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { darkTheme, lightTheme } from './theme.styles'

import { useStyles } from './app.styles'

import { Bio } from './components/bio/Bio'
import { Education } from './components/education/Education'
import { Skills } from './components/skills/Skills'
import { Languages } from './components/languages/Languages'
import { Footer } from './components/footer/Footer'

export const App = () => {
  const classes = useStyles()
  const [theme, setTheme] = useState(false)

  const themeIcon = theme ? <Brightness6Icon /> : <Brightness2Icon />
  // @ts-ignore
  const appliedTheme = createMuiTheme(theme ? lightTheme : darkTheme)

  return (
    <ThemeProvider theme={appliedTheme}>
      <Box className={theme ? classes.rootLight : classes.rootDark}>
        <CssBaseline />
        <IconButton className={classes.theme_switch} onClick={() => setTheme(!theme)}>
          {themeIcon}
        </IconButton>
        <Box py={2} />
        <Grid container spacing={3} className={classes.grid}>
          <Grid container item justify='center' spacing={3} className={classes.grid}>
            <Grid item container direction='column' spacing={3} className={classes.widthAuto}>
              <Grid item>
                <Bio />
              </Grid>
              <Grid item>
                <Languages />
              </Grid>
            </Grid>
            <Grid container item direction='column' spacing={3} className={classes.widthAuto}>
              <Grid item>
                <Education />
              </Grid>
              <Grid item>
                <Skills />
              </Grid>
            </Grid>
            <Grid item container justify='center'>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
