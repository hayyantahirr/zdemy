import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/db';
import Careers from '../../../../lib/models/Careers';

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newCareer = new Careers(body);
    const savedCareer = await newCareer.save();
    return NextResponse.json(savedCareer, { status: 201 });
  } catch (error) {
    console.error('Error adding career:', error);
    return NextResponse.json(
      { error: 'Failed to add career' },
      { status: 500 }
    );
  }
}