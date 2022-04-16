import { Box, Button, Container, Typography } from '@mui/material';
import { add, Scenario, selectAllScenariosIds } from './components/Scenario';
import { ScenariosTools } from './components/ScenariosTools/ScenariosTools';
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  const bddScenariosIds = useAppSelector(selectAllScenariosIds);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          BDD Acceptance criteria
        </Typography>
      </Box>

      <ScenariosTools />

      {bddScenariosIds.map((id) => <Scenario key={id} id={id} />)}
      
      {bddScenariosIds.length > 0 && <ScenariosTools />}
    </Container>
  );
}

export default App;
