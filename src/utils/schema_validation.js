import * as Yup from "yup";

export const createEventSchema = Yup.object({
  image: Yup.mixed().required(),
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

export const createAboutSchema = Yup.object({
  image: Yup.mixed().required(),
  title: Yup.string().required(),
  description: Yup.string().required(),
});

export const registerEventSchema = Yup.object({
  email: Yup.string().email().required(),
  dateOfBirth: Yup.date().required(),
  gender: Yup.string().required(),
  phone: Yup.string().required(),
  address: Yup.string().required(),
  door: Yup.string().required(),
  floor: Yup.string().required(),
  zipCode: Yup.string().required(),
  nif: Yup.string().required(),
  category: Yup.string().required(),
  selectedEvent: Yup.string().required(),
  companions: Yup.number().required(),
  issue: Yup.string().notRequired(),
});
