import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import TeachersForOlevels from '../../../lib/models/TeachersForOlevels';

export async function GET() {
  try {
    await connectDB();
    const teachers = await TeachersForOlevels.find({});
    return NextResponse.json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch teachers' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newTeacher = new TeachersForOlevels(body);
    const savedTeacher = await newTeacher.save();
    return NextResponse.json(savedTeacher, { status: 201 });
  } catch (error) {
    console.error('Error creating teacher:', error);
    return NextResponse.json(
      { error: 'Failed to create teacher' },
      { status: 500 }
    );
  }
}