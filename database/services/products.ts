import { getRealm } from "../realm";

export const getAllProducts = async () => {
  const realm = await getRealm();
  return realm.objects("Product");
};
