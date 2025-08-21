import { getRealm } from "../realm";

export const getAllCategory = async () => {
  const realm = await getRealm();
  return realm.objects("Category");
};
