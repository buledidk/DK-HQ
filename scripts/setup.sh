#!/bin/bash

# DK-HQ Setup Script
# Run this script to set up your development environment

set -e

echo "========================================"
echo "DK-HQ Development Environment Setup"
echo "========================================"
echo ""

# Check Node.js version
echo "Checking Node.js version..."
NODE_VERSION=$(node -v 2>/dev/null || echo "not installed")
if [[ "$NODE_VERSION" == "not installed" ]]; then
    echo "Error: Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi
echo "Node.js version: $NODE_VERSION"

# Check pnpm
echo "Checking pnpm..."
if ! command -v pnpm &> /dev/null; then
    echo "pnpm not found. Installing..."
    npm install -g pnpm
fi
echo "pnpm version: $(pnpm -v)"

# Create .env if it doesn't exist
if [ ! -f .env ]; then
    echo ""
    echo "Creating .env file from template..."
    cp .env.example .env
    echo "IMPORTANT: Please edit .env and add your API keys!"
fi

# Install dependencies
echo ""
echo "Installing dependencies..."
pnpm install

echo ""
echo "========================================"
echo "Setup complete!"
echo "========================================"
echo ""
echo "Next steps:"
echo "1. Edit .env and add your API keys"
echo "2. Run 'pnpm dev' to start development"
echo ""
