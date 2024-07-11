import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import './ReferModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};

const ReferModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ referrer: '', referee: '', refereeEmail: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/referral', form);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style} className="modal-content">
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Referral Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name (Referrer)"
            name="referrer"
            value={form.referrer}
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Friend's Name (Referee)"
            name="referee"
            value={form.referee}
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Friend's Email (Referee)"
            name="refereeEmail"
            type="email"
            value={form.refereeEmail}
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" type="submit" className="submit-btn" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferModal;
