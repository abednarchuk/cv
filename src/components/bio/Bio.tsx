import { Typography, Avatar, Card, CardHeader, CardContent, Link } from '@material-ui/core'
import { useStyles } from './bio.styles'

export const Bio = () => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.root} elevation={3}>
        <CardHeader
          avatar={<Avatar src='/avatar.jpg' variant='circular' className={classes.avatar} />}
          className={classes.header}
        />
        <CardContent>
          <Typography variant='h6'>Name</Typography>
          <Typography variant='body1' color='textSecondary' gutterBottom>
            Andrii Bednarchuk
          </Typography>
          <Typography variant='h6'>Email</Typography>
          <Typography variant='body1' color='textSecondary' gutterBottom>
            andrii.bednarchuk@gmail.com
          </Typography>
          <Typography variant='h6'>Phone</Typography>
          <Typography variant='body1' color='textSecondary' gutterBottom>
            +380669849627
          </Typography>
          <Typography variant='h6'>GitHub</Typography>
          <Typography variant='body1' color='textSecondary' gutterBottom>
            <Link href='https://github.com/abednarchuk' target='_blank' color='inherit'>
              abednarchuk
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
