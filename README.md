# Intro to Parcel.js

[An Introduction to Parcel.js, the No-Config Web Application Bundler](https://www.codeinwp.com/blog/introduction-to-parcel-js/)

[Parcel](https://parceljs.org/)

[CesiumJS Quickstart](https://cesium.com/learn/cesiumjs-learn/cesiumjs-quickstart/#step-2-set-up-the-cesiumjs-client)

Configuring CESIUM_BASE_URL

CesiumJS requires a few static files to be hosted on your server, like web workers and SVG icons. Configure your module bundler to copy the following four directories and serve them as static files:

```
node_modules/cesium/Build/Cesium/Workers
node_modules/cesium/Build/Cesium/ThirdParty
node_modules/cesium/Build/Cesium/Assets
node_modules/cesium/Build/Cesium/Widgets
```

The window.CESIUM_BASE_URL global variable must be set before CesiumJS is imported. It must point to the URL where those four directories are served.

### TODO

- incorporate copying Cesium assets into the parcel build procedures.
- move the CreditDisplay styles into Widget styles.
