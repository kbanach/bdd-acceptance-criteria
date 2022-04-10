import { Box, Button, Container, Typography } from '@mui/material';
import { add, Scenario, selectAllScenariosIds } from './components/Scenario';
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  const bddScenariosIds = useAppSelector(selectAllScenariosIds);
  const dispatch = useAppDispatch();

  const addScenario = () => dispatch(add())

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          BDD Acceptance criteria
        </Typography>
      </Box>
      <Button onClick={addScenario} variant="outlined">New scenario</Button>
      {bddScenariosIds.map((id) => <Scenario key={id} id={id} />)}
      {bddScenariosIds.length > 0 && <Button onClick={addScenario} variant="outlined">New scenario</Button>}
    </Container>
  );
}

export default App;
