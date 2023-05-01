import { Button, TextField } from '@mui/material';
import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';


const Home = () => {
  const [address, setAddress] = useState('');
  const [serverData, setServerData] = useState<any>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (address === '')
      return;
    console.log(address);
    getServerData();
  };

  const getServerData = async () => {
    const API_URL: string = 'https://www.api.gameservertracker.io/minecraft';

    fetch(`${API_URL}/${address}`)
      .then((response) => response.json())
      .then((data) => setServerData(data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 6, pb: 6 }}>
        <Typography variant="h3" gutterBottom style={{ textAlign: 'center' }}>
          Tracker
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Track your favorite server (Minecraft, CS, CS:GO, Garry's Mod, FiveM, RedM.)
        </Typography>
        <Box mt={3}>
          <Grid
            container
            direction="column-reverse"
            justifyContent="space-evenly"
            alignItems="center"
          >
          </Grid>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate mt={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Server address"
            name="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            startIcon={<GpsNotFixedIcon />}
            sx={{ mt: 3, mb: 2 }}
          >
            Track it
          </Button>
        </Box>
      </Container>
    </div>
  )
}

export default Home