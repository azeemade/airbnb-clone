import { useEffect } from "react";
import { generateCoordinates } from "./function";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

export const Map = () => {
  useEffect(() => {
    const data = generateCoordinates();
    let root = am5.Root.new("chart-div");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        projection: am5map.geoNaturalEarth1(),
        homeZoomLevel: 3.5,
      })
    );

    // Create polygon series
    chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );
    let pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        latitudeField: "latitude",
        longitudeField: "longitude",
      })
    );
    pointSeries.bullets.push(function () {
      let circle = am5.Circle.new(root, {
        radius: 5,
        fill: am5.color(0xff0000),
        tooltipText: `${price}`,
      });

      circle.states.create("hover", {
        fill: am5.color(0x00ff00),
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });
    pointSeries.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chart-div" style={{ width: "100%", height: "500px" }}></div>;
};
