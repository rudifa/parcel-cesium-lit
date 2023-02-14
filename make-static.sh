#! bash

mkdir dist/static

cp -r node_modules/cesium/Build/Cesium/Workers dist/static
cp -r node_modules/cesium/Build/Cesium/ThirdParty dist/static
cp -r node_modules/cesium/Build/Cesium/Assets dist/static
cp -r node_modules/cesium/Build/Cesium/Widgets dist/static