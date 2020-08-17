import React from 'react';
import {
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Hidden,
  CardMedia,
} from '@material-ui/core';
import { Payload } from '../utils';

interface Props {
  data?: Payload;
}
const FeaturePostLayout: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <CardActionArea component="a" href="#">
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-between',
          marginBottom: 10,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <CardContent>
            <Typography component="h2" variant="h5">
              {data?.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {data?.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {data?.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia image={data?.image} title={data?.imageTitle} style={{ width: 160 }} />
        </Hidden>
      </Card>
    </CardActionArea>
  );
};
export default FeaturePostLayout;
