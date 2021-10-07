import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
      width: '90%',
      marginTop:'13rem',
      marginLeft:'5%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(25),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  
  const Items = [
    {
        name:"1",
        details:["108 Bespoke"]
    },
    {
        name:"2",
        details:[]
    },
    {
        name:"3",
        details:[]
    },
    {
        name:"4",
        details:[]
    },
    {
        name:"5",
        details:[]
    },
    {
        name:"6",
        details:[]
    },
    {
        name:"7",
        details:[]
    },
    {
        name:"8",
        details:[]
    },
    {
        name:"9",
        details:[]
    },

      {
          name:"A",
          details:["Anjima Boro","Asht-8"]
      },
      {
        name:"B",
        details:[]
    },
    {
        name:"C",
        details:[]
    },
    {
        name:"D",
        details:[]
    },
    {
        name:"F",
        details:[]
    },
    {
        name:"G",
        details:["Garvili by Apoorva Bhatnagar"]
    },
    {
        name:"H",
        details:[]
    },
    {
        name:"I",
        details:[]
    },
    {
        name:"J",
        details:[]
    },
    {
        name:"K",
        details:["Kavana"]
    },
    {
        name:"L",
        details:[]
    },
    {
        name:"M",
        details:[]
    },
    {
        name:"N",
        details:[]
    },
    {
        name:"O",
        details:["Oodeypore"]
    },
    {
        name:"P",
        details:[]
    },
    {
        name:"Q",
        details:[]
    },
    {
        name:"R",
        details:[]
    },
    {
        name:"S",
        details:[]
    },
    {
        name:"T",
        details:["The Haberdasher Co","The Alter","Thanva by Deepika"]
    },
    {
        name:"U",
        details:[]
    },
    {
        name:"V",
        details:[]
    },{
        name:"X",
        details:[]
    },
    {
        name:"Y",
        details:[]
    },
    {
        name:"Z",
        details:[]
    },
  ]

function Designerdetails() {
    const classes = useStyles();
    return (

        
        <div className={classes.root}>

            <div  style={{fontWeight:"500",fontSize:"4rem",marginBottom:"2rem",fontFamily:"Playfair Display"}}>Designers</div>
            {Items.map((item,key)=>(
                <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}><div style={{fontWeight:"500",fontSize:"4rem",fontFamily:"Playfair Display"}}>{item.name}</div></Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                   
                       {item.details.map((sub,key)=>(
                           <div style={{fontWeight:"500",fontSize:"1.8rem",letterSpacing:"0.1rem",fontFamily:"Playfair Display"}}>
                               <Link to={`search/brand/${sub}`}>
                                    {sub}
                               </Link>
                            </div>
                       ))}
                   
                </Typography>
                </AccordionDetails>
            </Accordion>
            )
              
            )}

        
        
    </div>
    )
}

export default Designerdetails
