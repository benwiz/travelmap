#!/bin/bash
# Convert locations.yml to locations.csv

cd "$(dirname "$0")"

{
  echo "name,lat,lng"
  awk '
    /^[[:space:]]*#/ { next }
    /^  - name:/ { name = substr($0, index($0, ":")+2); sub(/ #.*/, "", name) }
    /^    lat:/ { lat = $2 }
    /^    lng:/ { lng = $2; gsub(/0+$/, "", lat); gsub(/0+$/, "", lng); print name "," lat "," lng }
  ' locations.yml
} > locations.csv

echo "Created locations.csv"
