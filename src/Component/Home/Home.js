import React from 'react';
import Bike from '../../images/Frame.png'
import Bus from '../../images/Frame-1.png'
import Car from '../../images/Frame-2.png'
import Train from '../../images/Group.png'
import './Home.css'
import Destination from '../Destination/Destination'
import Header from '../Header/Header';
import Bg from '../../images/Bg.png'
import { List } from '@material-ui/core';
import TransportType from '../TransportType/TransportType';

const Home = () => {

    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }

    const transport = [
        {
            id: '1',
            imgUrl: <img className="transportImg" src={Bike} alt="" />,
            transportType: 'Bike',

        },
        {

            id: '2',
            imgUrl: < img className="transportImg" src={Car} alt="" />,
            transportType: 'Car',

        },
        {
            id: '3',
            imgUrl: <img className="transportImg" src={Bus} alt="" />,
            transportType: 'Bus',

        },
        {

            id: '4',
            imgUrl: <img className="transportImg" src={Train} alt="" />,
            transportType: 'Train',

        }
    ]

    return (
        <div style={{ backgroundImage: `url(${Bg})` } } className="header  row d-flex justify-content-center align-item-center">

            {
                transport.map(transport => <TransportType key={transport.id} transport={transport}></TransportType>)
            }
        </div>
    );
};

export default Home;