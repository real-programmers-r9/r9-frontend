import type { NextPage } from 'next';
import { Typography, Card, CardActions, CardContent, Grid, Container, Button } from '@mui/material';
import useStyles from 'src/styles/mui/main';

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <>
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              The real job for you, R9
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente unde tempora
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
                <Grid item>
                  <Button variant="outlined" color="primary" size="small">
                    #안양
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" size="small">
                    #청소
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            <Grid item>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Heading
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste a deleniti
                    quasi facere doloremque illo non provident sequi placeat?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    view
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Heading
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste a deleniti
                    quasi facere doloremque illo non provident sequi placeat?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    view
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Heading
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste a deleniti
                    quasi facere doloremque illo non provident sequi placeat?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    view
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Home;
