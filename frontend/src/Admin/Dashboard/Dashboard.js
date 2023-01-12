import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import GroupIcon from '@mui/icons-material/Group';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CategoryIcon from '@mui/icons-material/Category';
import jwtDecode from 'jwt-decode';



function Dashboard() {
  const [allFilmes, setallFilmes] = useState([]);
  const [allUsers, setallUsers] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [countCategories, setCountCategories] = useState([]);
  const [userID, setUserID] = useState();
  const navi = useNavigate();
  useEffect(() => {
    const hasToken = localStorage.getItem("token");
    if (hasToken) {
      const info = jwtDecode(hasToken);
      setUserID(info.idUser);

      // console.log(info);
    } else {
      navi("/login");
    }
  }, [navi]);

  useEffect(() => {
    const url = 'http://localhost:4243/api/films/countFilms';
    axios.get(url).then((res) => {
      setallFilmes(res.data);
    });
  }, []);

  useEffect(() => {
    const url = 'http://localhost:4243/api/categories/countCategories';
    axios.get(url).then((res) => {
      setCountCategories(res.data);
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

  useEffect(() => {
    const url = 'http://localhost:4243/api/films/getAllCategory';
    axios.get(url).then((res) => {
      setAllCategories(res.data);
    });
  }, []);


  return (
    <>
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
        <Box
          component="form"
          sx={{
            gridColumn: '1 / 13',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridGap: '1rem',
            '& .MuiTextField-root': { width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5" component="div" sx={{ textAlign: 'center', gridColumn: '1 / 13' }}>
            Create Filmes
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridGap: '1rem',
             
          }}>
            <TextField
              required
              id="outlined-required"
              label="Nome do Filme"
              defaultValue=""
              sx={{ gridColumn: '1 / 13' }}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Categoria:"
              value={currency}
              onChange={handleChange}
              helperText="Escolha a categoria do Filme"
              sx={{ gridColumn: '1 / 13' }}
            >
              {allCategories.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-required"
              label="Descrição"
              defaultValue=""
              sx={{ gridColumn: '1 / 13' }}
            />
            <TextField
              required
              id="outlined-required"
              label="Data de Lançamento"
              defaultValue=""
              sx={{ gridColumn: '1 / 13' }}
            />
            <TextField
              required
              id="outlined-required"
              label="Tempo de Duração"
              defaultValue=""
              sx={{ gridColumn: '1 / 13' }}
            />
            <TextField
              required
              id="outlined-required"
              label="Imagem"
              defaultValue=""
              sx={{ gridColumn: '1 / 13' }}
            />
            <TextField
              required
              id="outlined-required"
              label="Preço"
              defaultValue=""
              sx={{ gridColumn: '1 / 13', }}
            />
            <Button variant="contained" color="primary" sx={{ gridColumn: '1 / 13' }}>
              Create Filme
            </Button>
          </Box>
        </Box>
      </Box>

    </>

  )
}

export default Dashboard