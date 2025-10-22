import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Gallery from '../../../lib/models/Gallery';

export async function GET() {
  try {
    await connectDB();
    const galleryItems = await Gallery.find({});
    return NextResponse.json(galleryItems);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery items' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newGalleryItem = new Gallery(body);
    const savedGalleryItem = await newGalleryItem.save();
    return NextResponse.json(savedGalleryItem, { status: 201 });
  } catch (error) {
    console.error('Error creating gallery item:', error);
    return NextResponse.json(
      { error: 'Failed to create gallery item' },
      { status: 500 }
    );
  }
}