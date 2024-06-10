import { Result, Schema, db, toResult } from "@/services/db";
import { Typesaurus } from "typesaurus";

export interface User {
  id: number;
  creationTimestamp: Typesaurus.ServerDate;
  username: string;
  rank: number;
  balance: number;
  touches: number;
  wallet?: string;
  social?: SocialLinks;
  online: boolean;
  lastOnline: Typesaurus.ServerDate;
  lang: string;
  first: string;
  last: string;
  referedBy?: number;
  energy: Energy;
  connectionId?: string;
  totalCoinsMined: number;
  totalRefered: number;
  totalReferedCliamed: number;
}
export interface Energy {
  maxEnergy: number;
  energyLeft: number;
}

export interface SocialLinks {
  twitter: string;
  discord: string;
}

export interface AllActiveUserCount {
  count: number;
}

export interface TotalTokenInCirclation {
  total: number;
}

export interface TotalTouchesByAllUser {
  touches: number;
}

export interface AllDailyUser {
  dailyUsers: number;
}

export type UserDoc = Schema["users"]["Doc"];
export type UserResult = Result<User>;

export async function findAllUsers(): Promise<UserResult[]> {
  const usersSnaphot = await db.users.all();
  const users = usersSnaphot.map(user => toResult<User>(user));
  return users;
}

export async function findUser(id: string): Promise<UserResult> {
  const user = await db.users.query($ => $.field("id").eq(Number(id)));
  if (user.length > 0) return toResult<User>(user[0]);
  return toResult<User>(null);
}
