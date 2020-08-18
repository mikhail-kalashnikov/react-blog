import React from 'react';
import {
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Hidden,
  CardMedia,
} from '@material-ui/core';
import { Payload, mainPayload } from '../utils';

interface Props {
  data?: mainPayload;
}
const FeaturePostLayout: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <>
      {data?.items.map((item) => (
        <CardActionArea component="a" href="#">
          <Card
            style={{
              display: 'flex',
              alignContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <div style={{ flex: 1 }}>
              <CardContent>
                <Typography component="h6" variant="h6">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {item.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {`${item.description.slice(0, 100)}...`}
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia image={item.image} title={item.imageTitle} style={{ width: 80 }} />
            </Hidden>
          </Card>
        </CardActionArea>
      ))}
    </>
  );
};
export default FeaturePostLayout;
