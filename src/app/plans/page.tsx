import { redirect } from "next/navigation";

/** Legacy path — meal plans live at /meal-plans */
export default function PlansRedirectPage() {
  redirect("/meal-plans");
}
