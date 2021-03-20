import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';



const TransportType = ({transport}) => {
    
      
        const history = useHistory()
          const handleTransport = (transportType) => {
              history.push(`/destination/${transportType}`);
          
        }
        const buttonCard = {
            width: "100px",
            height : "50px",
            padding: "5px",
            display:"d-flex"
        };
    return (
        <div style ={buttonCard} className = "col-md-3">

            <Button onClick={() => handleTransport(transport.transportType)}   variant="contained" color="primary">{transport.imgUrl  }</Button>

        </div>
    );
};

export default TransportType;