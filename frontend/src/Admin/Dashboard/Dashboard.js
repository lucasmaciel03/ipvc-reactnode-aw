import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import GroupIcon from "@mui/icons-material/Group";
import axios from "axios";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CategoryIcon from "@mui/icons-material/Category";
import jwtDecode from "jwt-decode";

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
    const url = "http://localhost:4243/api/films/countFilms";
    axios.get(url).then((res) => {
      setallFilmes(res.data);
    });
  }, []);

  useEffect(() => {
    const url = "http://localhost:4243/api/categories/countCategories";
    axios.get(url).then((res) => {
      setCountCategories(res.data);
    });
  }, []);

  useEffect(() => {
    const url = "http://localhost:4243/api/users/allUsers";
    axios.get(url).then((res) => {
      setallUsers(res.data);
    });
  }, []);

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    const url = "http://localhost:4243/api/films/getAllCategory";
    axios.get(url).then((res) => {
      setAllCategories(res.data);
    });
  }, []);

  return (
    <>
      <Box sx={{ gridColumn: "1 / 13" }}>
        <AppBar position="static" sx={{ color: "black", bgcolor: "white" }}>
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
          "& .MuiTextField-root": {
            m: 1,
            width: "25ch",
            mt: "10%",
            ml: "10%",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center", mt: 3, marginBottom: 0 }}
        >
          Criar Filmes
        </Typography>
        <div
          style={{
            width: "80%",
            margin: "auto",
            marginTop: "-90px",
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            style={{ marginLeft: "0" }}
            required
            type="text"
            id="outlined-required"
            label="Nome do Filme"
          />
          <TextField
            style={{ marginLeft: "0", marginTop: "20px" }}
            type="password"
            required
            select
            id="outlined-select-currency"
            label="Categoria do filme"
            value={currency}
            onChange={handleChange}
          >
            {allCategories.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ marginLeft: "0", marginTop: "20px" }}
            type="text"
            required
            id="outline-required"
            label="Descrição"
          ></TextField>
          <span style={{ marginBottom: "-20px", marginTop: "15px" }}>
            Data Lançamento
          </span>
          <TextField
            style={{ marginLeft: "0", marginTop: "20px" }}
            type="date"
            required
            id="outline-required"
          ></TextField>
          <TextField
            style={{ marginLeft: "0", marginTop: "20px" }}
            type="number"
            required
            id="outline-required"
            label="Duração"
            inputProps={{ min: 1, max: 5 }}
            min={1}
            max={5}
          ></TextField>
          <TextField
            style={{ marginLeft: "0", marginTop: "20px" }}
            type="text"
            required
            id="outline-required"
            label="Caminho imagem"
          ></TextField>
          <TextField
            style={{ marginLeft: "0", marginTop: "20px" }}
            type="number"
            required
            id="outline-required"
            label="Preço"
            inputProps={{ min: 1, max: 5 }}
            min={1}
          ></TextField>
          <Button
            variant="contained"
            size="large"
            style={{
              width: "20%",
              marginLeft: "0",
              marginTop: "50px",
            }}
          >
            Criar filme
          </Button>
        </div>
      </Box>
    </>
  );
}

export default Dashboard;
