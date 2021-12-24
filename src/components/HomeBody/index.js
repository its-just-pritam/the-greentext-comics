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
  padding: "50px 0 50px 0",
};

const topBarStyle = ( window.innerWidth > 600 )? {
  backgroundImage: `url(${top_bar})`,
  height: '700px'
} : {
  height: 0
};

export default function HomeBody() {

  // eslint-disable-next-line
  const [spacing, setSpacing] = React.useState(2);
  const cardWidth = ( window.innerWidth > 600 )? 240 : 150

  function showCards(item, index) {
    return (
      <Grid key={index} item>
          <Card sx={{ maxWidth: cardWidth }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={cardWidth}
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
              READ FULL COMIC
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }

  return (
    <div>
      <div style={topBarStyle} ></div>
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
