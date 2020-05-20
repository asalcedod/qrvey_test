import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css'

export default function OutlinedCard(country) { 
  return (
    <Card className="root" variant="outlined">
      <CardActions>
        <Button size="small">x</Button>
      </CardActions>
      <CardContent>
        <Typography className="tittle" color="textSecondary" gutterBottom>
          {country.name}
        </Typography>
        <Typography variant="pos" color="textSecondary">
          Region: {country.region}
        </Typography>
        <Typography className="pos" color="textSecondary">
          Population: {country.population}
        </Typography>
        <Typography className="pos" color="textSecondary">
          Capital: {country.capital}
        </Typography>
      </CardContent>

    </Card>
  );
}