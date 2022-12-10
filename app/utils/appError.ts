const AppError = (status: number, message: string) => {
  throw {
    status,
    message
  }
}

export default AppError
