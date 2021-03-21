import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FakeData from '../FakeData/FakeData'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const Destination = () => {





    const [transport, setTransport] = useState([]);
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
    const [destination, setDestination] = useState({
        from: '',
        to: ''
    });
    const { transportType } = useParams();
    useEffect(() => {
        setTransport(FakeData);
    }, [])
    const selectedTransport = transport.find(trans => trans.transportType === transportType);
    console.log(selectedTransport);
    const handleSubmit = (e) => {
        setShow(true);
        e.preventDefault();
    }
    const handleChange = (e) => {
        const newDestination = { ...destination };
        newDestination[e.target.name] = e.target.value;
        //console.log(newUserInfo);
        setDestination(newDestination);

    }

    return (
        <div>
            <h1>This is {transportType}</h1>
            {
                show && (
                    <div>
                        <div>
                            <h2>
                                {
                                    destination.from
                                }
                            </h2>
                            <h2>
                                {
                                    destination.to
                                }
                            </h2>
                        </div>
                        <h1>
                            {selectedTransport.transportType}
                        </h1>
                    </div>
                )
            }
            {
                !show && (
                    <form >
                        <TextField name="from" onChange={handleChange} id="standard-basic" label="From" />
                        <br />
                        <TextField name="to" onChange={handleChange} id="standard-basic" label="To" />
                        <br />
                        <br />
                        <Button onClick={handleSubmit} name={transportType} variant="contained" color="primary" > Search </Button>
                    </form>
                )
            }


            <div>
                <h3>{search} </h3>
            </div>

            <div>
                <LoadScript
                    googleMapsApiKey="AIzaSyBu-AKKZLxnJ9tOQkoADLkA0OlUExEfQck"
                >
                    <GoogleMap
                        mapContainerStyle={{ width: '300px', height: '300px' }}
                        center={{ lat: -3.745, lng: -38.523 }}
                        zoom={10}
                    >
                        { /* Child components, such as markers, info windows, etc. */}
                        <></>
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>


    );
};

export default Destination;