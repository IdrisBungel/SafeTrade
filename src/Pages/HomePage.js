import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="secondary">
              Sell Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;