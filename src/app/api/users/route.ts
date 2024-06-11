import { getAllUsers, createUser } from "@services/db/dashboardUser";
import { NextResponse, NextRequest } from "next/server";
import { paginate } from "@util";


export async function POST(request: NextRequest) {
  const { name, email, roles, avatar, password  } = await request.json();
  if(!name || !email || !roles || !avatar || !password  ) return NextResponse.json({error:"Invalid Parameter"}, {status : 500})
  const user =  await createUser(name, email,roles,avatar,password)
  return NextResponse.json(user,{ status: 200 });
}
