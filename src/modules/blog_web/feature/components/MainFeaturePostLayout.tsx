import React from 'react';
import {
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Hidden,
  CardMedia,
  makeStyles,
} from '@material-ui/core';
import { Payload } from '../utils';

interface Props {
  data?: Payload;
}
const MainFeaturePostLayout: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <CardActionArea>
      <Card
        style={{
          maxWidth: '100%',
          position: 'relative',
        }}
      >
        <Hidden xsDown>
          <CardMedia
            image={data?.image}
            title={data?.imageTitle}
            component="img"
            alt="Contemplative Reptile"
            style={{ height: 435 }}
          />
        </Hidden>{' '}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data?.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data?.description}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
export default MainFeaturePostLayout;
