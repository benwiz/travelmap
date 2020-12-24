# travelmap
## What

Map of my travels

## How

Google Maps API, yaml configuration file

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

- Start over New Orleans
- Passive drift, maybe across a specific set of coordinates
- use dotted continents like github's homepage
- add travel lines, can even be between random cities
- read https://github.blog/2020-12-21-how-we-built-the-github-globe/
- consider mutating the magnitude and color

- Later
  - Google Timeline or Overland locations

- Locations
  - Ask Grandma about locations we visited in Denmark
  - Ask Mom about locations we visited in France - I think I'm missing one or two places in central France
  - Ask Mom about locations we visited in Costa Rica
  - Check one of my old passports for the various Carribbean islands
  - Ask Dad which Florida key we were on for Grandma's birthday, currently set to Key West
