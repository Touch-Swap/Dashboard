import { getTaskById, deleteTask , updateTask} from "@services/db/task";
import { paginate } from "@util";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, context: { params: {id:string}}) {
  const id =  context.params.id
  if(!id || Number.isNaN(parseInt(id))) return NextResponse.json({error:"Invalid Id"},{status:500})
  const foundTask = await getTaskById(parseInt(id))
  if(!foundTask.exist) return NextResponse.json({error:"Task Not Found"},{status:500})
  return NextResponse.json(foundTask, { status: 200 });
}

export async function DELETE(request: NextRequest, context: { params: {id:string}}) {
  const id =  context.params.id
  if(!id || Number.isNaN(parseInt(id))) return NextResponse.json({error:"Invalid Id"},{status:500})
  const deletedTask = await deleteTask(parseInt(id))
  if(!deletedTask.exist) return NextResponse.json({error:"Task Not Found"},{status:500})
  return NextResponse.json(deletedTask, { status: 200 });
}


export async function PATCH(request: NextRequest, context: { params: {id:string}}) {
  const id =  context.params.id
  if(!id || Number.isNaN(parseInt(id))) return NextResponse.json({error:"Invalid Id"},{status:500})
  const { link, title, reward  } = await request.json();
  if(!link || !title || !reward  ) return NextResponse.json({error:"Invalid Parameter"}, {status : 500})
  const updatedTask = await updateTask(parseInt(id), link,title,reward)
  if(!updatedTask.exist) return NextResponse.json({error:"Task Not Found"},{status:500})
  return NextResponse.json(updatedTask, { status: 200 });
}