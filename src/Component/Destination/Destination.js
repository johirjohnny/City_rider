import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams } from 'react-router';



const Destination = () => {
    const [search, setSearch] = useState('');
    const { transportType} = useParams();
    const handleChange = () => {
        const transportSearch = '' ;
        if ({transportType} === 'Car'){ 
            transportSearch = "Car Car";
        }
        if ({transportType} === 'Bike'){ 
            transportSearch = "Bike Bike";
        }
        if ({transportType} === 'Bus'){ 
            transportSearch = "Bus Bus";
        }
        if (transportType){
            setSearch (search)
        }
    }

    return (
        <div>
            <h1>This is {transportType}</h1>
            <form >
                <TextField name="text" onChange={handleChange} id="standard-basic" label="From" />
                <br />
                <TextField name="text" onChange={handleChange} id="standard-basic" label="To" />
                <br />
                <br/> 
                <Button type="submit" variant="contained" color="primary" value=""> Search </Button>
            </form>

            <div>
                <h3>{search} </h3>
            </div>
        </div>
        
    );
};

export default Destination;