# Docker Hub Search

forked from [clarkbw/npm-package-search](https://github.com/clarkbw/npm-package-search)

![howtouse](https://user-images.githubusercontent.com/28535536/77992428-002a1000-7361-11ea-9f71-ae7834de570d.gif)

A WebExtension that uses the keyword `docker` to trigger a search of the Docker images in Docker Hub.


## Development

Requirements:
- MacOS 10.15.4
- Node.js 12.14.0
- yarn 1.22.0

Here's how you can get setup to develop.

```bash
yarn install
yarn run build:watch
```

To generate extension xpi

```bash
yarn run build
```

Here are some example results from the MDN Search.

* alpine search: https://registry.hub.docker.com/v1/search?q=alpine

Follow the instructions for developing [WebExtensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions).


## License

MPL v2
