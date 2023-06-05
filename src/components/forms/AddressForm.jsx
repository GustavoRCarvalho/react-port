import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Divider, TextField } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
import ReactInputMask from "react-input-mask"
import { z } from "zod"
import { TextFieldControllerComponent } from "./TextFieldControllerComponent"
import { cepJustNumbers } from "../common/FormsCommon"

const createAddressFormSchema = z.object({
  title: z.string().nonempty("O campo é obrigatório"),
  firstName: z.string().nonempty("O campo é obrigatório"),
  lastName: z.string().nonempty("O campo é obrigatório"),
  cep: z
    .string()
    .nonempty("O campo é obrigatório")
    .refine((cep) => {
      if (cepJustNumbers(cep).length != 8) {
        return false
      } else {
        return true
      }
    }, "Digite um CEP válido"),
  state: z.string().nonempty("O campo é obrigatório"),
  city: z.string().nonempty("O campo é obrigatório"),
  neighborhood: z.string().nonempty("O campo é obrigatório"),
  street: z.string().nonempty("O campo é obrigatório"),
  addressNumber: z.string().nonempty("O campo é obrigatório"),
  complement: z.string(),
})

const initialValues = {
  title: "",
  firstName: "",
  lastName: "",
  cep: "",
  state: "",
  city: "",
  neighborhood: "",
  street: "",
  addressNumber: "",
  complement: "",
}

export const AddressForm = () => {
  const [outPut, setOutPut] = useState()
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(createAddressFormSchema),
  })

  function createAddress(data) {
    setOutPut(JSON.stringify(data, null, 2))
  }

  function cepConsult(cep) {
    let cepNumbers = cepJustNumbers(cep)
    if (cepNumbers.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepNumbers}/json/`)
        .then((res) => res.json())
        .then((data) => {
          setValue("street", data.logradouro)
          setValue("neighborhood", data.bairro)
          setValue("city", data.localidade)
          setValue("state", data.uf)
        })
    }
  }

  return (
    <div className="FormContainer">
      <form onSubmit={handleSubmit(createAddress)} className="AddressForm">
        <TextField
          {...register("title")}
          type="text"
          variant="outlined"
          margin="normal"
          label="Título*"
          placeholder="Casa, apartamento, trabalho..."
          error={!!errors.firstName}
          fullWidth={true}
        />
        <Divider className="Divider">Responsável</Divider>
        <TextField
          {...register("firstName")}
          type="text"
          variant="outlined"
          margin="normal"
          label="Nome*"
          error={!!errors.firstName}
          className="TextFieldHalf"
        />
        <TextField
          {...register("lastName")}
          type="text"
          variant="outlined"
          margin="normal"
          label="Sobrenome*"
          error={!!errors.lastName}
          className="TextFieldHalf"
        />
        <Divider className="Divider">Endereço</Divider>
        <ReactInputMask
          {...register("cep")}
          mask={"99999-999"}
          maskChar={"_"}
          onChange={({ target: { value } }) => cepConsult(value)}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              type="text"
              variant="outlined"
              margin="normal"
              label="CEP*"
              error={!!errors.cep}
              helperText={errors.cep?.message}
              fullWidth={true}
            />
          )}
        </ReactInputMask>
        <TextFieldControllerComponent
          control={control}
          name="state"
          label="Estado*"
        />
        <TextFieldControllerComponent
          control={control}
          name="city"
          label="Cidade*"
        />
        <TextFieldControllerComponent
          control={control}
          name="neighborhood"
          label="Bairro*"
        />
        <TextFieldControllerComponent
          control={control}
          name="street"
          label="Endereço*"
        />
        <TextFieldControllerComponent
          control={control}
          name="addressNumber"
          label="Número*"
        />
        <TextFieldControllerComponent
          control={control}
          name="complement"
          label="Complemento"
        />
        <Button type="submit" variant="outlined" fullWidth={true}>
          ENVIAR
        </Button>
      </form>
      {outPut}
    </div>
  )
}
