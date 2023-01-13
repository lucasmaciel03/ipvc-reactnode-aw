import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";

const CreateUser = () => {
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
            Criar Categorias
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
            <Link to="/admin/updatecategory">
              <Button color="secondary">Atualizar Categoria</Button>
            </Link>
            <Link to="/admin/deletecategory">
              <Button color="error">Eliminar Categoria</Button>
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
              color = "success"
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
