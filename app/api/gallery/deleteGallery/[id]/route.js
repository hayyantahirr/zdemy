import { NextResponse } from 'next/server';
import connectDB from '../../../../../lib/db';
import Gallery from '../../../../../lib/models/Gallery';

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    
    const deletedGalleryItem = await Gallery.findByIdAndDelete(id);
    
    if (!deletedGalleryItem) {
      return NextResponse.json(
        { error: 'Gallery item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    return NextResponse.json(
      { error: 'Failed to delete gallery item' },
      { status: 500 }
    );
  }
}