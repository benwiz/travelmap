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

## Data

- http://www.temis.nl/data/topo/dem2grid.html (https://web.archive.org/web/20200620165537/http://www.temis.nl/data/topo/dem2grid.html)

The data files provide the terrain height in the form of a 2-dimensional array without longitude-latitude coordinates -- these coordinates must be constructed by the user on the basis of the grid specifications. The first line of the unformatted and ascii data files provides the following information:

    nlon  nlat  nfac  nocean  nland

where:

    nlon   = actual number of longitudes <= mlon
    nlat   = actual number of latitudes <= mlat
    nfac   = resolution specifier: resolution is nfac/120 degrees
             in latitude and longitude range
             [the number is used in the file names]
    nocean = value in the array indicating an ocean data point
             [this usually is -9999]
    nland  = part of the nfac*nfac averaged data points that
             have to be land for the average data point in the
             height array to be defined as land

These and some additional things are also mentioned in the attributes of th HDF file.

The terrain height is given in the form of nlon by nlat grid cells of the specified size with centre coordinates rlon, rlat that can be computed as follows:

   rlon(i) = -180 + D(i)    i=1,2,...,nlon
   rlat(i) =  +90 - D(i)    i=1,2,...,nlat
      D(i) = ( 2*i - 1 ) * nfac / 240

  - http://www.temis.nl/data/gmted2010/index.php

## To Do

- start over New Orleans
- share vendor resources between 2d and 3d
- could be cool to show day/night, could probably do this with Three.js
- add travel lines, can even be between random cities or over mouse hovers
- read https://github.blog/2020-12-21-how-we-built-the-github-globe/
- consider mutating the magnitude and color

- Later
  - Google Timeline or Overland locations

- Locations
  - Ask Mom about locations we visited in France - I think I'm missing one or two places in central France
  - Ask Mom about locations we visited in Costa Rica
  - Check one of my old passports for the various Carribbean islands
  - Ask Dad which Florida key we were on for Grandma's birthday, currently set to Key West
