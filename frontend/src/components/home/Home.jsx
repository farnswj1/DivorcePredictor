import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

export default class Home extends React.Component {
  render() {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3">Divorce Predictor</Typography>
        <Typography variant="h6">Will your marriage last? Find out now!</Typography>
        <Box sx={{ mt: 5 }}>
          <Link to="/prediction" >
            <Button variant="contained" size="large">Click Here!</Button>
          </Link>
        </Box>
      </Box>
    );
  }
}
