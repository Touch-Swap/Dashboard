import { createTask, getAllTasks } from "@services/db/task";
import { paginate } from "@util";
import { NextResponse, NextRequest } from "next/server";


export async function POST(request: NextRequest) {
  const { link, title, reward  } = await request.json();
  if(!link || !title || !reward  ) return NextResponse.json({error:"Invalid Parameter"}, {status : 500})
  const task =  await createTask(link, title,reward)
  return NextResponse.json(task,{ status: 200 });
}

export async function GET(request: NextRequest) {
  console.log("idiidi")
  let _start =  parseInt(request.nextUrl.searchParams.get("_start") || "0")
  let  _end =  parseInt(request.nextUrl.searchParams.get("_end") || "0")
  const taskes = await getAllTasks()
  const foundTaskes =  paginate(taskes,_start , _end)
  return NextResponse.json(foundTaskes, { status: 200 });
}