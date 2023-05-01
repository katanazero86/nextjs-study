import {object, string} from "yup";

export const mailFormSchema = object({
    from: string().email().required(),
    subject: string().required(),
    text: string().required()
});