import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import './App.css';

export default function App() {
  return (
    <div style={{}}>
      <h3>Card </h3>
      <Card style={{ width: 400, backgroundColor: 'cyan' }}>
        <CardContent>
          <Typography
            style={{ fontSize: 15 }}
            color="textSecondary"
            gutterBottom
          >
            Hello inside CardContent
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Enjoy</Button>
        </CardActions>
      </Card>
    </div>
  );
}
