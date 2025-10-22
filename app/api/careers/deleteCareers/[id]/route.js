import { NextResponse } from 'next/server';
import connectDB from '../../../../../lib/db';
import Careers from '../../../../../lib/models/Careers';

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    
    const deletedCareer = await Careers.findByIdAndDelete(id);
    
    if (!deletedCareer) {
      return NextResponse.json(
        { error: 'Career not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Career deleted successfully' });
  } catch (error) {
    console.error('Error deleting career:', error);
    return NextResponse.json(
      { error: 'Failed to delete career' },
      { status: 500 }
    );
  }
}