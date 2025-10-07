import { useRootLoaderData } from "~/root";
import { HTTP } from ".";

export const httpClient = (() => {
  const loader = useRootLoaderData()
  return new HTTP(loader?.env?.baseAPI || "");
})()
