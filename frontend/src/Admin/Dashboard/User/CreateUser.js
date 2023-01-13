import {
  AppBar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import GroupIcon from "@mui/icons-material/Group";
import Header from "../../Components/Header";

const CreateUser = () => {
  const [allFilmes, setallFilmes] = useState([]);
  const [allUsers, setallUsers] = useState([]);

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

  return (
    <div>
      <>
        <Header />
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
            sx={{ flexGrow: 1, textAlign: "center", mt: 5 }}
          >
            Criar Utilizadores
          </Typography>
          <div
            style={{
              width: "80%",
              margin: "auto",
              marginTop: "10px",
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
            >
              <Link to="/admin/updateuser">
                <Button color="secondary">Atualizar Utilizador</Button>
              </Link>
              <Link to="/admin/deleteuser">
                <Button color="error">Eliminar Utilizador</Button>
              </Link>
            </ButtonGroup>
          </div>
          <div
            style={{
              width: "80%",
              margin: "auto",
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
              label="Nome do User"
              defaultValue=""
            />
            <TextField
              style={{ marginLeft: "0", marginTop: "20px" }}
              type="password"
              required
              id="outlined-required"
              label="Password do utilizador"
              defaultValue=""
            />
            <Button
              variant="contained"
              size="large"
              style={{
                width: "20%",
                marginLeft: "0",
                marginTop: "50px",
              }}
              color="success"
            >
              Criar Utilizador
            </Button>
          </div>
        </Box>
      </>
    </div>
  );
};

export default CreateUser;
