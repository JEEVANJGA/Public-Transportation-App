 # Public Transportation App

## Requirements
You must build an application that allows users to select a departure and arrival train station. The user will then see information about the two stations. The information you provide may include connected stations on the path, arrival & departure times, or any other information you deem important for the user. Initially, the application should load a default train schedule, this can be a general schedule, a live schedule, or simply a transit map - many public transportation agencies offer this information via an API, as a GTFS file (for example, CalTrain or the My511.org transit data feed), or as an image. When the application is online the user should be able to see up to date information from the transit authority of choice. When offline the user should be able to continue to interact with the site in some capacity (e.g. The user has full access to the general schedule or the user is able to see route information they have accessed while online.)

an application that allows users to select a departure and arrival train station. The user will then see information about the two stations.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
