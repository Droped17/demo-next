import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string().trim().min(3).max(10).required().messages({
    "string.min": "Username must be at least 5 characters",
    "string.max": "Username cannot exceed 10 characters",
    "any.required": "Please Enter Your Username",
  }),
  password: Joi.string()
    .trim()
    .min(8)
    .max(50)
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

export default registerSchema;
