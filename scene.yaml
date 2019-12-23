cameras:
    camera1:
        type: perspective

lights:
    light1:
        type: directional
        direction: [0, 1, -.5]
        diffuse: .3
        ambient: 1

sources:
    nextzen:
        type: MVT
        url: https://tile.nextzen.org/tilezen/vector/v1/512/all/{z}/{x}/{y}.mvt
        url_params:
            api_key: NaqqS33fTUmyQcvbuIUCKA
        tile_size: 512
        max_zoom: 16

layers:
    earth:
        data: { source: nextzen }
        draw:
            polygons:
                order: function() { return feature.sort_rank; }
                color: '#ddeeee'

    landuse:
        data: { source: nextzen }
        draw:
            polygons:
                order: function() { return feature.sort_rank; }
                color: '#aaffaa'

    water:
        data: { source: nextzen }
        draw:
            polygons:
                order: function() { return feature.sort_rank; }
                color: '#88bbee'

    roads:
        data: { source: nextzen }
        filter:
            not: { kind: [path, rail, ferry] }
        draw:
            lines:
                order: function() { return feature.sort_rank; }
                color: gray
                width: 8
                cap: round
        highway:
            filter:
                kind: highway
            draw:
                lines:
                    order: function() { return feature.sort_rank; }
                    color: '#cc6666'
                    width: 12
                    outline:
                        color: grey
                        width: 1.5
        minor_road:
            filter:
                kind: minor_road
            draw:
                lines:
                    order: function() { return feature.sort_rank; }
                    color: lightgrey
                    width: 5

    buildings:
        data: { source: nextzen }
        draw:
            polygons:
                order: function() { return feature.sort_rank; }
                color: |
                    function () {
                        var h = feature.height || 20;
                        h = Math.min((h + 50)/ 255, .8); // max brightness: .8
                        h = Math.max(h, .4); // min brightness: .4
                        return [h, h, h];
                    }
        3d-buildings:
            filter: { $zoom: { min: 15 } }
            draw:
                polygons:
                    extrude: function () { return feature.height > 20 || $zoom >= 16; }
