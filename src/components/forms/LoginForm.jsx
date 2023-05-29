import { Alert, Button, TextField } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const createUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  password: z.string().min(6, "A senha precisa de no minimo 6 caracteres"),
})

export const Login = () => {
  const [output, setOutPut] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  })

  function createUser(data) {
    setOutPut(JSON.stringify(data, null, 2))
  }

  return (
    <div className="FormContainer">
      <form onSubmit={handleSubmit(createUser)} className="Form">
        <TextField
          {...register("email")}
          type="email"
          margin="normal"
          label="Email"
          variant="outlined"
        />
        {errors.email && (
          <Alert className="Alert" severity="warning">
            {errors.email.message}
          </Alert>
        )}
        <TextField
          {...register("password")}
          type="password"
          margin="normal"
          label="Senha"
          variant="outlined"
        />
        {errors.password && (
          <Alert className="Alert" severity="warning">
            {errors.password.message}
          </Alert>
        )}
        <Button type="submit" variant="outlined">
          ENVIAR
        </Button>
      </form>
      {output}
    </div>
  )
}
