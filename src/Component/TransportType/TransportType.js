import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';



const TransportType = ({ transport }) => {


    const history = useHistory()
    const handleTransport = (transportType) => {
        history.push(`/destination/${transportType}`);

    }
    const buttonCard = {
        width: "200px",
        height: "5px",
        padding: "50px",
        display: "d-flex",
        marginTop: "200px"
    };
    return (
        <div style={buttonCard} className="col-md-3">

            <Button onClick={() => handleTransport(transport.transportType)} variant="contained" color="primary">{transport.imgUrl}</Button>

        </div>
    );
};

export default TransportType;