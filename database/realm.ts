import Realm from "realm";
import { UserSchema } from "./schemas/user";

let localRealm: any;

export const getRealm = async () => {
  if (!localRealm) {
    localRealm = await Realm.open({
      path: "localRealm",
      schema: [UserSchema],
      schemaVersion: 1,
    });

    // 🔹 Thêm dữ liệu mặc định khi DB rỗng
    if (localRealm.objects("User").length === 0) {
      localRealm.write(() => {
        localRealm.create("User", {
          id: "1",
          name: "LeminhDang",
          email: "danglem@mail.com",
          phone: 123456789,
          role: "user",
          password: "123456",
        });

        localRealm.create("User", {
          id: "2",
          name: "Đăng Seller",
          email: "sellerdang@mail.com",
          phone: 987654321,
          role: "seller",
          password: "123123123a",
        });
      });
      console.log("✅ Inserted default data into local DB");
    }
  }
  return localRealm;
};
