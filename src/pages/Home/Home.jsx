import Navbar from "./../../components/Navbar/Navbar";
import Banner from "./../../components/Banner/Banner";
import { Grid } from '@mui/material';
const Home = () => {
  return (
    <div className="Home">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Navbar />
        <Banner />
        <h1>QUI NOUS SOMMES</h1>
      </Grid>
    </div>
  );
};
export default Home;
