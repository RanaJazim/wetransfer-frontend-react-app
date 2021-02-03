import * as Yup from "yup";

export const createEventSchema = Yup.object({
  title: Yup.string().required(),
  description: Yup.string().required(),
  applyDate: Yup.date().required(),
  applyTime: Yup.string().required(),
  eventDate: Yup.date().required(),
  eventTime: Yup.string().required(),
  location: Yup.string().required(),
  shortenRoutes: Yup.string().required(),
  priceToApply: Yup.number().required(),
  federatedPrice: Yup.number().required(),
  mealPrice: Yup.number().required(),
});

export function createAboutSchema(isImageExist = false) {
  return Yup.object({
    // image: isImageExist ? Yup.mixed().notRequired() : Yup.mixed().required(),
    title: Yup.string().required(),
    description: Yup.string().required(),
  });
}

export const registerEventSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  dateOfBirth: Yup.date().required(),
  gender: Yup.string().required(),
  phone: Yup.string().required(),
  address: Yup.string().required(),
  door: Yup.string().required(),
  floor: Yup.string().required(),
  zipCode: Yup.string().required(),
  nif: Yup.string().required(),
  teamName: Yup.string().required(),
  category: Yup.string().required(),
  companions: Yup.number().required(),
  issue: Yup.string().notRequired(),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(20).required(),
});
