import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import GroupIcon from '@mui/icons-material/Group';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CategoryIcon from '@mui/icons-material/Category';
import { AppBar, Badge, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    const [allFilmes, setallFilmes] = useState([]);
    const [allUsers, setallUsers] = useState([]);
    const [countCategories, setAllCategories] = useState([]);

    useEffect(() => {
        const url = "http://localhost:4243/api/films/countFilms";
        axios.get(url).then((res) => {
            setallFilmes(res.data);
        });
    }, []);

    useEffect(() => {
        const url = "http://localhost:4243/api/users/allUsers";
        axios.get(url).then((res) => {
            setallUsers(res.data);
        });
    }, []);


    useEffect(() => {
        const url = 'http://localhost:4243/api/films/getAllCategory';
        axios.get(url).then((res) => {
            setAllCategories(res.data);
        });
    }, []);

    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridGap: '1rem',
        }}>
            <Box sx={{ gridColumn: '1 / 13' }}>
                <AppBar position="static" sx={{ color: 'black', bgcolor: 'white' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            MovieAL
                        </Typography>
                        <Link to="/admin">
                            <Button color="inherit">
                                <Badge badgeContent={allFilmes} color="secondary">
                                    <LocalMoviesIcon />
                                </Badge>
                            </Button>
                        </Link>
                        <Link to="/admin/utilizadores">
                            <Button color="inherit">
                                <Badge badgeContent={allUsers} color="primary">
                                    <GroupIcon />
                                </Badge>
                            </Button>
                        </Link>
                        <Link to="/admin/utilizadores">
                            <Button color="inherit">
                                <Badge badgeContent={countCategories} color="error">
                                    <CategoryIcon />
                                </Badge>
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
    )
}

export default Header;