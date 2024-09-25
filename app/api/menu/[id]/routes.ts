import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (res:NextResponse, req: NextRequest) => {
    try {
      const client = await clientPromise;
      const db = client.db("mydatabase");
      const menuItems = await db.collection("menu").find({}).toArray()
  
      return NextResponse.json({ success: true, data: menuItems });
    } catch (e: any) {
      return NextResponse.json({ success: false, message: e.message }, { status: 500 });
    }
  };