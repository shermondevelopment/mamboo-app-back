import * as Joi from 'joi'

export const listValidator = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'please enter a title',
    'string.base': 'title must be a string'
  })
})
