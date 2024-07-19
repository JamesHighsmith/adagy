import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Grid, Paper, CircularProgress } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import StopIcon from '@mui/icons-material/Stop';

const RobotControlPage: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/robot/status/');
        setStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };

    fetchStatus();
  }, []);

  const moveRobot = async (direction: string) => {
    setLoading(true);
    try {
      await axios.post(`http://localhost:8000/api/robot/move/`, { direction });
      alert(`Robot moved ${direction}!`);
    } catch (error) {
      console.error(`Error moving robot ${direction}:`, error);
    }
    setLoading(false);
  };

  return (
    <Container
      style={{
        backgroundColor: '#121212',
        color: '#ffffff',
        minHeight: '100vh',
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Robot Control Page
      </Typography>
      <Paper
        elevation={3}
        style={{
          padding: '16px',
          marginBottom: '16px',
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
          textAlign: 'center',
          width: '100%',
          maxWidth: '600px',
        }}
      >
        <Typography variant="h6">Status: {status || 'Loading...'}</Typography>
      </Paper>
      {loading ? (
        <CircularProgress style={{ color: '#ffffff' }} />
      ) : (
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Typography variant="h6">Control Panel</Typography>
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ArrowUpwardIcon />}
              fullWidth
              onClick={() => moveRobot('forward')}
            >
              Move Forward
            </Button>
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ArrowBackIcon />}
              fullWidth
              onClick={() => moveRobot('left')}
            >
              Move Left
            </Button>
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ArrowForwardIcon />}
              fullWidth
              onClick={() => moveRobot('right')}
            >
              Move Right
            </Button>
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<ArrowDownwardIcon />}
              fullWidth
              onClick={() => moveRobot('backward')}
            >
              Move Backward
            </Button>
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<StopIcon />}
              fullWidth
              onClick={() => moveRobot('stop')}
            >
              Stop
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default RobotControlPage;
