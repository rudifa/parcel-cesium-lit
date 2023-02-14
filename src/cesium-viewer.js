import {LitElement, html, css, unsafeCSS} from 'lit-element';

import * as Cesium from 'cesium';

import widgetStylesRaw from 'cesium/Build/Cesium/Widgets/widgets.css';
const widgetStyles = css`
  ${unsafeCSS(widgetStylesRaw)}
`;
// The URL on your server where CesiumJS's static files are hosted.
window.CESIUM_BASE_URL = 'static/';

// Your access token can be found at: https://ion.cesium.com/tokens.
// This is the default access token from your ion account
Cesium.Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwMDY5YjNjNy05ZDZjLTQ5YjUtODBhOC03MGY4Njc3MzUyMDEiLCJpZCI6MTEyNTc3LCJpYXQiOjE2NjY4MTYyNjB9.fd9TA4pMsDaKBWE1lSEBvYB34xR-R1anLfSG-vSVI4c';

// Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain(),
});
// // Add Cesium OSM Buildings, a global 3D buildings layer.
// const buildingTileset = viewer.scene.primitives.add(
//   Cesium.createOsmBuildings()
// );
// // Fly the camera to San Francisco at the given longitude, latitude, and height.
// viewer.camera.flyTo({
//   destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
//   orientation: {
//     heading: Cesium.Math.toRadians(0.0),
//     pitch: Cesium.Math.toRadians(-15.0),
//   },
// });

export class CesiumViewer extends LitElement {
  //   firstUpdated() {
  //     const cesiumContainer = this.renderRoot.getElementById('cesiumContainer');
  //     console.log(`firstUpdated cesiumContainer:`, cesiumContainer);
  //     this.viewer = new Cesium.Viewer(cesiumContainer, {
  //       terrainProvider: Cesium.createWorldTerrain(),
  //     });
  //     this.flyTo();
  //   }
  render() {
    return html`
      <h1>Hello World!</h1>
      <p>from cesium-viewer.js</p>
      <!-- <div id="cesiumContainer"></div> -->
    `;
  }
}
customElements.define('cesium-viewer', CesiumViewer);
