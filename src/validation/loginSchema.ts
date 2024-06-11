import Joi from "joi";

export const loginSchema = Joi.object({
    username: Joi.string()
        .min(4)
        .max(8)
        .required()
        .messages({
            'string.empty': `This field cannot be empty`,
            'string.min': `Username should have a minimum length of 4`,
            'string.max': `Username should have a maximum length of 8`,
            'any.required': `This field is required`
        }),
    password: Joi.string()
        .min(6)
        .max(12)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/)
        .required()
        .messages({
            'string.empty': `This field cannot be empty`,
            'string.min': `Password should have a minimum length of 6`,
            'string.max': `Password should have a maximum length of 12`,
            'object.regex': `Password should have one uppercase, one lowercase, one digit, and one special character`,
            "string.pattern.base": "Password should have one uppercase, one lowercase, one digit, and one special character",
            'any.required': `This field is required`
        }),
});