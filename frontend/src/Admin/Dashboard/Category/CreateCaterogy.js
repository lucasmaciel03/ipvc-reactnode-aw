import {
  AppBar,
  Badge,
  Box,
  Button,
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
        <Box sx={{ flexGrow: 1 }}>
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
            sx={{ flexGrow: 1, textAlign: "center", mt: 5 }}
          >
            Criar Categorias
          </Typography>
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
              label="Nome da Categoria"
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
            >
              Criar Categoria
            </Button>
          </div>
        </Box>
      </>
    </div>
  );
};

export default CreateUser;
