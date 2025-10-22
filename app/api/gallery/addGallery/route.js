import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/db';
import Gallery from '../../../../lib/models/Gallery';

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newGalleryItem = new Gallery(body);
    const savedGalleryItem = await newGalleryItem.save();
    return NextResponse.json(savedGalleryItem, { status: 201 });
  } catch (error) {
    console.error('Error adding gallery item:', error);
    return NextResponse.json(
      { error: 'Failed to add gallery item' },
      { status: 500 }
    );
  }
}