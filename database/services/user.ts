import { Login } from "@/types";
import { getRealm } from "../realm";

export const login = async ({ email, phone, password }: Login) => {
  const realm = await getRealm();

  let user = null;

  if (email) {
    user = realm
      .objects("User")
      .filtered("email == $0 AND password == $1", email, password)[0];
  } else if (phone) {
    user = realm
      .objects("User")
      .filtered("phone == $0 AND password == $1", phone, password)[0];
  }

  if (user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    };
  }
  return null;
};
