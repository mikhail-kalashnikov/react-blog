import React from 'react';
import { Container, Typography } from '@material-ui/core';

const DefaultFooter: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        Footer1
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Footer2
      </Typography>
    </Container>
  );
};
export default DefaultFooter;
