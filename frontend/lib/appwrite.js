import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.chorevest.chorevest",
  projectId: "6647bf080027306b43a5",
  databaseId: "6647c0fa00051fa2ec23",
  userCollectionId: "664a08e2001b1d375859",
  choreCollectionId: "6647c14400256c2ba4ca",
  storageId: "6647c366000cd7c2e1c3",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function createUser(email, password, firstName, lastName) {
  try {
    const newAccount = await account.create(
      ID.unique,
      email,
      password,
      firstName,
      lastName
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(firstName);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        firstName: firstName,
        lastName: lastName,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
