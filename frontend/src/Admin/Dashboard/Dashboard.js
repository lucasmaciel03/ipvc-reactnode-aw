import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import GroupIcon from '@mui/icons-material/Group';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';



function Dashboard() {
  const [allFilmes, setallFilmes] = useState([]);
  const [allUsers, setallUsers] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:4243/api/films/countFilms';
    axios.get(url).then((res) => {
      setallFilmes(res.data);
    });
  }, []);

  useEffect(() => {
    const url = 'http://localhost:4243/api/users/allUsers';
    axios.get(url).then((res) => {
      setallUsers(res.data);
    });
  }, []);

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };



  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ color: 'black', bgcolor: 'white' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MovieAL
            </Typography>
            <Link to="/admin">
              <Button color="inherit" >
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
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch', mt: '10%', ml: '10%' },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', mt: 5 }}>
          Create Filmes
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="Nome do Filme"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Nome do Filme"
          defaultValue=""
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>

  )
}

export default Dashboard