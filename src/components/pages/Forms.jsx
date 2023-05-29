import { AddressForm } from "../forms/AddressForm"
import { ColorForm } from "../forms/ColorForm"
import { Login } from "../forms/LoginForm"
import "./Forms.css"

export const Forms = () => {
  return (
    <div className="container">
      <span>Login</span>
      <Login />
      <span>Color List</span>
      <ColorForm />
      <span>Formulário de Endereço</span>
      <AddressForm />
    </div>
  )
}
