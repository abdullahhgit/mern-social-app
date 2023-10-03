import { AppBar, Grid, Typography, Grow, Container} from '@mui/material'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

function App() {

  return (
    <Container maxWidth="lg" >
      <AppBar className="appBar" sx={{
        borderRadius: "15px",
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }} position= 'static'  color= 'inherit'>
        <Typography className="heading" variant= 'h2' align= 'center' sx={{
          color: 'rgba(0,183,255, 1)',
        }}>Memories</Typography>
        <img className="image" src={memories} alt="logo" style={{marginLeft: "15px"}} height='60' />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={2}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
