#!/bin/bash

echo "Building portfolio for production..."
npm run build

if [ $? -eq 0 ]; then
    echo "Build successful! Deploying to Vercel..."
    vercel
else
    echo "Build failed. Please check the errors above."
    exit 1
fi