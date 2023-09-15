import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../Layout";

export const NavBarPanel = ({ tipo = -1, nombre }) => {
    const navigate = useNavigate();
    const { logoutUser } = useContext(userContext)

  const listBedelia = ["home", "usuario", "estudiante", "carrera"];
  const listDecano = ["home"];

  const [links, setLinks] = useState({
    listado: [],
    titulo: "",
  });

  useEffect(() => {
    tipo === 0 && setLinks({ titulo: "Panel bedelia", listado: listBedelia });
    tipo === 1 && setLinks({ titulo: "Panel decano", listado: listDecano });
  }, [tipo]);


  const cerrarSesion = (e)=>{
    e.preventDefault();
    logoutUser();
    navigate("/")
  }

  return (
    <Nav>
      <hr style={{ color: "darkgray" }} />
      <Navbar.Text
        style={{ color: "darkgray", fontWeight: "bold" }}
      >
        {links.titulo}
      </Navbar.Text>
      {links.listado.map((e, k) => (
        <Nav.Link as={Link} key={k}>
          {e}
        </Nav.Link>
      ))}
      <Nav.Link style={{ color: "orange", fontWeight: "bold" }} onClick={cerrarSesion}>
        Logout
      </Nav.Link>
    </Nav>
  );
};