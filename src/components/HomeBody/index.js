import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import top_bar from '../../home/images/top_bar.png';
import Grid from '@mui/material/Grid';
import { comicVars } from '../../data/comiclist';

const mystyle = {
  padding: "50px 0 50px 0"
};

export default function HomeBody() {

  const [spacing, setSpacing] = React.useState(2);

  function showCards(item, index) {
    return (
      <Grid key={index} item>
          <Card sx={{ maxWidth: 360 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="360"
              image={item.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="black">
                {item.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              SHARE
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }

  return (
    <div>
      <img src={top_bar} alt='Top Bar'/>
      <div style={mystyle}>
        <Grid sx={{ flexGrow: 1 }} container spacing={5}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              {comicVars.map((item, index) => (
                showCards(item, index)
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
