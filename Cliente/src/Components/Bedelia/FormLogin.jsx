import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Layout";
import { jwtDecode } from "jwt-decode";
import { setLocalUser } from "./../../Helpers/localstorage";
import { loginToken } from "../../Helpers/usuario";
import { ShowNotification, ShowNotificationError } from "../../Helpers/utils";

const initForm = {
  email: "",
  password: "",
};
export const FormLogin = () => {
  const { loginUser } = useContext(userContext);
  const [form, setForm] = useState(initForm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.email === "") return;
    if (form.password === "") return;

    const token = await loginToken(form.email, form.password);
    if (token) {
      const data = jwtDecode(token);
      ShowNotification(`Bienvenido ${data.nombre} ${data.apellido}`);
      loginUser(data);
      setLocalUser(data);
      navigate("/panel");
    } else {
      ShowNotificationError("El usuario no es valido");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Usuario"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Contraseña"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
  );
};
