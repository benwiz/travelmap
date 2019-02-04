# travelmap

Map of my travels

## How to run locally

```sh
http-server
```

```sh
open http://localhost:8080
```

## How to deploy

Just push to master

## Ideas

- Maybe track dates. Consider `first_visited` or an array of all dates.
- Have a `trip` array so that markers can be grouped into trips (e.g. "Asia trip with marg")
- Consider importing Overland data, make it so only visible at certain zoom level or just make the dots small enough. Overland data is GeoJSON which should be easy to import. Maybe just want a Python/Node.js script that imports the data then commits to github, eventually maybe lambda and s3, but not to start.
- https://mapstyle.withgoogle.com/

## To Do

- Style map (there is an [online wizard](https://mapstyle.withgoogle.com/) to do this)
  - Better markers

- Later
  - Google Timeline or Overland locations

- Locations
  - Ask Grandma about locations we visited in Denmark
  - Ask Mom about locations we visited in France - I think I'm missing one or two places in central France
  - Ask Mom about locations we visited in Costa Rica
  - Check one of my old passports for the various Carribbean islands
  - Ask Dad which Florida key we were on for Grandma's birthday, currently set to Key West
