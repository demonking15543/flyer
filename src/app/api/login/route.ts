import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello, world11!' });
}

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data?.username);

  
  const response =  NextResponse.json({ message: 'Data received' });
  response.cookies.set("user", JSON.stringify(data), { path: '/',      
  maxAge: 600, // 10 minutes in seconds
})
  return response

}
