import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import "./Advantages.css"
import "../../index.css"


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Advantages() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="containerAd">
        <h1>Ventajas</h1>
        <div id="accordion">
        <Accordion className="accor" expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography style={{fontFamily:'Jura', color:'black', fontWeight:'bold'}} className="accorSum">Conocimientos</Typography>
            </AccordionSummary>
            <AccordionDetails className="accorDet">
            <Typography style={{fontFamily:'Jura', color:'black', fontWeight:'bold'}}>
            Ampliamos el nivel de conocimiento y acción de su empresa para poder abarcar más competencias.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className="accor" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography style={{fontFamily:'Jura', color:'black', fontWeight:'bold'}} className="accorTypo">Predicción</Typography>
            </AccordionSummary>
            <AccordionDetails className="accorDet">
            <Typography style={{fontFamily:'Jura', color:'black', fontWeight:'bold'}}>
            Analizamos el mercado mundial para entender las necesidades y deseos de los niños con el tiempo adecuado para aprovechar la ola de consumo.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className="accor" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography style={{fontFamily:'Jura', color:'black', fontWeight:'bold'}} className="accorTypo">Almacenes Inteligentes</Typography>
            </AccordionSummary>
            <AccordionDetails className="accorDet">
            <Typography style={{fontFamily:'Jura', color:'black', fontWeight:'bold'}}>
            Almacenamos la información para que pueda gestionarla de la forma más eficaz posible.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className="accor" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography style={{fontFamily:'Jura', color:'black', fontWeight:'bold'}} className="accorTypo">Planificación</Typography>
            </AccordionSummary>
            <AccordionDetails className="accorDet">
            <Typography style={{fontFamily:'Jura', color:'black', fontWeight:'bold'}}>
            Hacemos un plan pormenorizado de necesidad de recursos para invertir solo lo necesario y evitar excedentes.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className="accor" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography style={{fontFamily:'Jura', color:'black', fontWeight:'bold'}} className="accorTypo">Mejoras</Typography>
            </AccordionSummary>
            <AccordionDetails className="accorDet">
            <Typography style={{fontFamily:'Jura', color:'black', fontWeight:'bold'}}>
            Asesoramos a su empresa para tomar las mejores decisiones.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className="accor" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography style={{fontFamily:'Jura', color:'black', fontWeight:'bold'}} className="accorTypo">Incremento del ROI</Typography>
            </AccordionSummary>
            <AccordionDetails className="accorDet">
            <Typography style={{fontFamily:'Jura', color:'black', fontWeight:'bold'}}>
            Garantizamos el incremento del ROI (Return on Investment) para unos beneficios sin precedentes.
            </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    </div>
  );
}