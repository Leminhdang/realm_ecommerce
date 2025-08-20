import Realm from "realm";
import { CategorySchema } from "./schemas/category";
import { ProductSchema } from "./schemas/product";
import { UserSchema } from "./schemas/user";

let realmInstance: any;

export const getRealm = async () => {
  if (!realmInstance) {
    realmInstance = await Realm.open({
      path: "myrealm",
      schema: [ProductSchema, UserSchema, CategorySchema],
      schemaVersion: 1,
    });
  }
  return realmInstance;
};
