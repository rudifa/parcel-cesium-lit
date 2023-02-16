#! /bin/bash

dir="dist/static"
[ ! -d "$dir" ] && mkdir -p "$dir"

cp -r node_modules/cesium/Build/Cesium/Workers "$dir"
cp -r node_modules/cesium/Build/Cesium/ThirdParty "$dir"
cp -r node_modules/cesium/Build/Cesium/Assets "$dir"
cp -r node_modules/cesium/Build/Cesium/Widgets "$dir"
