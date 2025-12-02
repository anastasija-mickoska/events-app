import * as admin from "firebase-admin";
import serviceAccount from "../../events-web-app-service-account.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const adminAuth = admin.auth();
export const adminDB = admin.firestore();
