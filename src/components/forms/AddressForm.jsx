import { Button, Divider, TextField } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
import ReactInputMask from "react-input-mask"

export const AddressForm = () => {
  const [outPut, setOutPut] = useState()
  const { register, handleSubmit } = useForm({})

  function createAddress(data) {
    setOutPut(JSON.stringify(data, null, 2))
  }

  return (
    <div className="FormContainer">
      <form onSubmit={handleSubmit(createAddress)} className="AddressForm">
        <Divider className="Divider">Título</Divider>
        <TextField
          {...register("title")}
          type="text"
          variant="outlined"
          margin="normal"
          placeholder="Casa, apartamento, trabalho..."
          fullWidth={true}
        />
        <Divider className="Divider">Responsável</Divider>
        <TextField
          {...register("firstName")}
          type="text"
          variant="outlined"
          margin="normal"
          label="Nome*"
          className="TextFieldHalf"
        />
        <TextField
          {...register("lastName")}
          type="text"
          variant="outlined"
          margin="normal"
          label="Sobrenome*"
          className="TextFieldHalf"
        />
        <Divider className="Divider">Endereço</Divider>
        <ReactInputMask mask={"99999-999"} {...register("cep")} maskChar={"_"}>
          {() => (
            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              label="CEP*"
              fullWidth={true}
            />
          )}
        </ReactInputMask>
        <TextField
          {...register("state")}
          type="text"
          variant="outlined"
          margin="normal"
          label="Estado*"
          className="TextFieldHalf"
        />
        <TextField
          {...register("city")}
          type="text"
          variant="outlined"
          margin="normal"
          label="Cidade*"
          className="TextFieldHalf"
        />
        <TextField
          {...register("neighborhood")}
          type="text"
          variant="outlined"
          margin="normal"
          label="Bairro*"
          className="TextFieldHalf"
        />
        <TextField
          {...register("street")}
          type="text"
          variant="outlined"
          margin="normal"
          label="Endereço*"
          className="TextFieldHalf"
        />
        <TextField
          {...register("number")}
          type="text"
          variant="outlined"
          margin="normal"
          label="Número*"
          className="TextFieldHalf"
        />
        <TextField
          {...register("complement")}
          type="text"
          variant="outlined"
          margin="normal"
          label="Complemento"
          className="TextFieldHalf"
        />
        <Button type="submit" variant="outlined">
          ENVIAR
        </Button>
      </form>
      {outPut}
    </div>
  )
}
