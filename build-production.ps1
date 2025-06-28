# Hugo Production Build Script
# This script ensures the site is built with production settings for proper sitemap generation

Write-Host "🚀 Building Hugo site for production..." -ForegroundColor Green

# Set production environment
$env:HUGO_ENV = "production"

# Clean previous build
Write-Host "🧹 Cleaning previous build..." -ForegroundColor Yellow
if (Test-Path "public") {
    Remove-Item -Recurse -Force "public"
}

# Build with production settings
Write-Host "🔨 Building site..." -ForegroundColor Yellow
hugo --gc --minify

# Verify sitemap generation
Write-Host "✅ Verifying sitemap generation..." -ForegroundColor Yellow
if (Test-Path "public/sitemap.xml") {
    Write-Host "✅ sitemap.xml generated successfully" -ForegroundColor Green
} else {
    Write-Host "❌ sitemap.xml not found" -ForegroundColor Red
}

if (Test-Path "public/sitemap.txt") {
    Write-Host "✅ sitemap.txt generated successfully" -ForegroundColor Green
} else {
    Write-Host "❌ sitemap.txt not found" -ForegroundColor Red
}

if (Test-Path "public/robots.txt") {
    Write-Host "✅ robots.txt generated successfully" -ForegroundColor Green
} else {
    Write-Host "❌ robots.txt not found" -ForegroundColor Red
}

# Show first few lines of sitemap.xml to verify URLs
Write-Host "📋 First few lines of sitemap.xml:" -ForegroundColor Cyan
if (Test-Path "public/sitemap.xml") {
    Get-Content "public/sitemap.xml" | Select-Object -First 10
}

# Show text sitemap content to verify format
Write-Host "📋 Text sitemap content:" -ForegroundColor Cyan
if (Test-Path "public/sitemap.txt") {
    Get-Content "public/sitemap.txt" | ForEach-Object { Write-Host "   $_" -ForegroundColor White }
}

Write-Host "🎉 Build completed! Site ready for deployment." -ForegroundColor Green
Write-Host "📍 Sitemap URLs:" -ForegroundColor Cyan
Write-Host "   - https://mariuszpatek.github.io/code-addict/sitemap.xml" -ForegroundColor White
Write-Host "   - https://mariuszpatek.github.io/code-addict/sitemap.txt" -ForegroundColor White
Write-Host "   - https://mariuszpatek.github.io/code-addict/robots.txt" -ForegroundColor White
