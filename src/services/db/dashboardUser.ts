import { db, toResult, Result, Schema } from "@/services/db";
import "@/services/firebase";

export interface DashboardUser {
  name: string;
  email: string;
  roles: string[];
  avatar: string;
  password: string;
}

export type DashboardUserDoc = Schema["dashUser"]["Doc"];
export type DashboardUserResult = Result<DashboardUser>;

export async function createUser(
  name: string,
  email: string,
  roles: string[],
  avatar: string,
  password: string
): Promise<DashboardUserResult> {
   const user = await db.dashUser.add({ name , email, roles, avatar, password });
   return toResult<DashboardUser>(await db.dashUser.get(user.id));
}

export async function updateUser(
  name: string,
  email: string,
  roles: string[],
  avatar: string,
  password: string
): Promise<DashboardUserResult> {
   const usersFound = await db.dashUser.query($ => $.field("email").eq(email));
   if (usersFound.length === 0) return toResult(null);
   usersFound[0].update({ name, email, roles, avatar, password });
   return toResult<DashboardUser>(await db.dashUser.get(usersFound[0].ref.id));
}

export async function deleteUser(email: string): Promise<DashboardUserResult> {
   const usersFound = await db.dashUser.query($ => $.field("email").eq(email));
   if (usersFound.length === 0) return toResult(null);
   let user = toResult<DashboardUser>(await db.dashUser.get(usersFound[0].ref.id));
   await db.dashUser.remove(usersFound[0].ref.id);
   return user;
}

export async function getAllUsers(): Promise<DashboardUserResult[]> {
  return (await db.dashUser.all()).map(value => toResult(value));
}

export async function getUserByEmail(email: string): Promise<DashboardUserResult> {
    const usersFound = await db.dashUser.query($ => $.field("email").eq(email));
    if (usersFound.length === 0) return toResult(null);
    return toResult<DashboardUser>(usersFound[0]);
}
