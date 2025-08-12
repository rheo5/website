#!/bin/bash

# Replace 'your-username' with your actual GitHub username
GITHUB_USERNAME="your-username"
REPO_NAME="rachelheo.dev"

echo "Setting up GitHub remote and pushing code..."
git remote add origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git
git branch -M main
git push -u origin main

echo ""
echo "After pushing, you need to:"
echo "1. Go to your repository on GitHub"
echo "2. Click on 'Settings' tab"
echo "3. Scroll down to 'Pages' section"
echo "4. Under 'Source', select 'GitHub Actions'"
echo "5. The workflow will automatically deploy your site"
echo ""
echo "Your website will be available at: https://rachelheo.dev"
echo "(Make sure your domain DNS is configured to point to GitHub Pages)"
