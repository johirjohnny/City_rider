import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Header.css';
import Bg from '../../images/Bg.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));


    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className="navbar">
                        <h1><Link to="/home">City Rider  </Link></h1>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/home">Home</Link>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/destination">Destination</Link>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/login">Blog</Link>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/login">Contact</Link>
                        </Typography>
                        <Button variant="contained" color="secondary"><Link to="/login">Login</Link></Button>
                    </Toolbar>
                </AppBar>
            </div>




        </div>



    );
};

export default Header;