message=$1
echo $message
curl "https://leetcard.jacoblin.cool/wuuconix?theme=unicorn&font=Electrolize&ext=heatmap&site=cn" -o stats.svg \
&& echo "svg curl ok" \
&& git add . && git commit -m "$message" \
&& git push