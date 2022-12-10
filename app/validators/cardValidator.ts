import * as Joi from 'joi'

export const cardValidation = Joi.object({
  content: Joi.string().required().messages({
    'string.empty': 'please enter a content'
  }),
  list_id: Joi.string().uuid().required().messages({
    'any.required': 'please inform the list to which the task belongs',
    'string.empty': 'please inform the list to which the task belongs',
    'string.guid': 'enter a valid uuid'
  }),
  position_card: Joi.number()
})
