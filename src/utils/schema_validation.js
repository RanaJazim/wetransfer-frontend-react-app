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
