$message = $args[0]
Write-Host $message
if (Test-Path Alias:curl) { Remove-Item Alias:curl }
curl "https://leetcard.jacoblin.cool/wuuconix?theme=unicorn&font=Electrolize&ext=heatmap&site=cn" -o stats.svg
Write-Host "svg curl ok"
git add .
git commit -m "$message"
git push