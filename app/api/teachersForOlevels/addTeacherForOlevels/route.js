import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/db';
import TeachersForOlevels from '../../../../lib/models/TeachersForOlevels';

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newTeacher = new TeachersForOlevels(body);
    const savedTeacher = await newTeacher.save();
    return NextResponse.json(savedTeacher, { status: 201 });
  } catch (error) {
    console.error('Error adding teacher:', error);
    return NextResponse.json(
      { error: 'Failed to add teacher' },
      { status: 500 }
    );
  }
}