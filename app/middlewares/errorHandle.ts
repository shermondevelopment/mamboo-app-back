import { Request, Response, NextFunction } from 'express'

interface ErrorResponse {
  status: number
  message: string
}

export default (
  errorResponse: ErrorResponse,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  res
    .status(errorResponse.status || 500)
    .json({ error: errorResponse.message || 'internal server error' })
}
