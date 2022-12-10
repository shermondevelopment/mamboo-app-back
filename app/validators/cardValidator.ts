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

export const cardUpdateValidation = Joi.object({
  content: Joi.string()
    .messages({
      'string.empty': 'please enter a content'
    })
    .allow(null),
  list_id: Joi.string()
    .uuid()
    .messages({
      'string.empty': 'please inform the list to which the task belongs',
      'string.guid': 'enter a valid uuid'
    })
    .allow(null),
  position_card: Joi.number().allow(null)
})
