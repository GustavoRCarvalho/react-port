import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"

export const TextFieldControllerComponent = ({
  name,
  label,
  fullWidth = false,
  placeholder = "",
  control,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <TextField
          type="text"
          variant="outlined"
          value={value}
          onChange={onChange}
          inputRef={ref}
          margin="normal"
          label={label}
          placeholder={placeholder}
          error={!!error}
          className="TextFieldHalf"
          fullWidth={fullWidth}
        />
      )}
    />
  )
}
