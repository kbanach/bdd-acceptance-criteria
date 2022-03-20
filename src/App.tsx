import { Box, Button, Container, Typography } from '@mui/material';
import { add, Scenario, selectAllScenarios, selectAllScenariosIds } from './components/Scenario';
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  const bddScenarios = useAppSelector(selectAllScenariosIds);
  const dispatch = useAppDispatch();

  const addScenario = () => dispatch(add())

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          BDD Acceptance criteria
        </Typography>
      </Box>
      <Button onClick={addScenario}>New scenario</Button>

      {bddScenarios.map((id) => <Scenario key={id} id={id} />)}

    </Container>
  );
}

export default App;
