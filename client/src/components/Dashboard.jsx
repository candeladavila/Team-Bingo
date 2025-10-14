import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function Dashboard() {
  return (
    <Container style={{ marginTop: 16 }}>
      <Box>
        <Typography variant="h4" gutterBottom>Dashboard</Typography>
        <Typography color="textSecondary">Componente dashboard provisional — contenido mínimo para evitar errores tras merge.</Typography>
      </Box>
    </Container>
  );
}
