import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Careers from '../../../lib/models/Careers';

export async function GET() {
  try {
    await connectDB();
    const careers = await Careers.find({});
    return NextResponse.json(careers);
  } catch (error) {
    console.error('Error fetching careers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch careers' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newCareer = new Careers(body);
    const savedCareer = await newCareer.save();
    return NextResponse.json(savedCareer, { status: 201 });
  } catch (error) {
    console.error('Error creating career:', error);
    return NextResponse.json(
      { error: 'Failed to create career' },
      { status: 500 }
    );
  }
}