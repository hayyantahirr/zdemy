import { NextResponse } from 'next/server';
import connectDB from '../../../../../lib/db';
import TeachersForOlevels from '../../../../../lib/models/TeachersForOlevels';

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    
    const deletedTeacher = await TeachersForOlevels.findByIdAndDelete(id);
    
    if (!deletedTeacher) {
      return NextResponse.json(
        { error: 'Teacher not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    console.error('Error deleting teacher:', error);
    return NextResponse.json(
      { error: 'Failed to delete teacher' },
      { status: 500 }
    );
  }
}