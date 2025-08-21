import { getRealm } from "../realm";

export const getAllProducts = async () => {
  const realm = await getRealm();
  return realm.objects("Product");
};

export const getProductByCategoryID = async (id: number) => {
  const realm = await getRealm();
  const product = realm.objects("UsProducter").filtered(`catId == ${id}`);
  return product;
};
