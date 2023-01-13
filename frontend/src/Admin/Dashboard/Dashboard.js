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
import Header from "../Components/Header";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
} from "@mui/material";

function Dashboard() {
  const [allCategories, setAllCategories] = useState([]);


  useEffect(() => {
    const url = "http://localhost:4243/api/films/getAllCategory";
    axios.get(url).then((res) => {
      setAllCategories(res.data);
    });
  }, []);

  // connect to api for add filmes

  return (
    <div>

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
          sx={{ flexGrow: 1, textAlign: "center", mt: 3, marginBottom: 0 }}
        >
          Criar Filmes
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
            <Link to="/admin/updatefilmes">
              <Button color="secondary">Atualizar Filmes</Button>
            </Link>
            <Link to="/admin/eliminarfilmes">
              <Button color="error">Eliminar Filmes</Button>
            </Link>
          </ButtonGroup>
        </div>
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
              marginBottom: "50px",
            }}
            color = "success"
          >
            Criar filme
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default Dashboard;
