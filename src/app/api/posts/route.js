// src/app/api/blogs/route.js
import connectDB from '../../../lib/mongodb';
import Blog from '../../../models/Blog1';

export async function GET(req, res) {
  await connectDB();

  try {
    const blogs = await Blog.find({});

    return new Response(JSON.stringify({ success: true, data: blogs }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  }
}

export async function POST(req, res) {
  await connectDB();

  try {
    const body = await req.json();

    const blog = await Blog.create(body);
    return new Response(JSON.stringify({ success: true, data: blog }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  }
}
