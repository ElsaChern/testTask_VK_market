import { Alert, AlertTitle } from "@mui/material"

const Error = () => {
  return (
    <Alert severity="error" variant="outlined">
      <AlertTitle>Ошибка</AlertTitle>
      Что-то пошло не так. Пожалуйста, попробуйте еще раз позднее
    </Alert>
  )
}

export default Error
