import { Grid } from '@mui/material';
import bg from'../../assets/S2.png';
import './Banner.css';
const Banner = () => {
  return (
    <div className="banner_container">
    
        <div className='Description'>
            <h3>Sauvage & Naturel</h3>
            <h1>Miel Naturel</h1>
            <p> 
            Découvrez notre miel frais, biologique et authentique,
             récolté avec soin pour vous offrir le meilleur de la nature.
              Savourez la douceur et les bienfaits de notre miel pur,
               directement de la ruche à votre table. Idéal pour sucrer vos plats,
                vos boissons ou simplement à déguster à la cuillère.
                 Faites le choix de la qualité et de la pureté avec notre miel d'exception.
            </p>
            <div className='about-btn'>
                À PROPOS DE PLUS
            </div>
        </div>
            
      
    </div>
  );
};
export default Banner;
