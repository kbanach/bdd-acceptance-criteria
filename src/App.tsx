import { Box, Button, Container, Typography } from '@mui/material';
import { add, Scenario, selectAllScenarios } from './components/Scenario';
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  const bddScenarios = useAppSelector(selectAllScenarios);
  const dispatch = useAppDispatch();

  const addScenario = () => dispatch(add({ id: '' + Date.now(), title: '<title placeholder>' }))

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          BDD Acceptance criteria
        </Typography>
      </Box>
      <Button onClick={addScenario}>Add scenario</Button>

      {bddScenarios.map(({ title, id }) => <Scenario key={id} title={title} />)}

    </Container>
  );
}

export default App;
