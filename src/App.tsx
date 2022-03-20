import { Box, Container, Typography } from '@mui/material';
import { Scenario } from './components/Scenario';

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          BDD Acceptance criteria
        </Typography>
      </Box>
      <Scenario title="Scenario 1" />
      <Scenario title="Scenario 2" />
    </Container>
  );
}

export default App;
