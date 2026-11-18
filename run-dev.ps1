# Script untuk menjalankan Backend Elysia dan Frontend React secara bersamaan
$env:Path = "C:\Users\ACER\.bun\bin;" + $env:Path

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   Memulai Web Portofolio (Bun + React + PostgreSQL)      " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan

# Jalankan Backend
Write-Host "[1/2] Menjalankan Backend Elysia (Port 5000)..." -ForegroundColor Yellow
$backendJob = Start-Job -ScriptBlock {
    $env:Path = "C:\Users\ACER\.bun\bin;" + $env:Path
    Set-Location "D:\Proyek\Portopolio\backend"
    bun run dev
}

# Tunggu backend siap
Start-Sleep -Seconds 2

# Jalankan Frontend
Write-Host "[2/2] Menjalankan Frontend React Vite (Port 3000)..." -ForegroundColor Yellow
Write-Host "Buka browser Anda di: http://localhost:3000" -ForegroundColor Green
Write-Host "Tekan CTRL + C untuk menghentikan server.`n" -ForegroundColor DarkGray

try {
    Set-Location "D:\Proyek\Portopolio\frontend"
    bun run dev
} finally {
    Write-Host "`nMenutup backend..." -ForegroundColor Red
    Stop-Job $backendJob -ErrorAction SilentlyContinue
    Remove-Job $backendJob -ErrorAction SilentlyContinue
}

