import React, { useState } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import ReferModal from './ReferModal';
import './HeroSection.css';

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="hero-section">
      <Container className="hero-content">
        <Typography variant="h3" className="hero-title" gutterBottom>
          Refer & Earn
        </Typography>
        <Button variant="contained" className="refer-button" onClick={handleOpen}>
          Refer Now
        </Button>
      </Container>
      <ReferModal open={open} onClose={handleClose} />
    </Box>
  );
};

export default HeroSection;
