import { Rectangle, Viewer } from "cesium";

declare module "cesium-navigation-es6" {
    export interface NavigationOptions {
        // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
        defaultResetView?: Rectangle
        // 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
        enableCompass?: boolean
        // 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
        enableZoomControls?: boolean
        // 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
        enableDistanceLegend?: boolean
        // 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
        enableCompassOuterRing?: boolean
        //修改重置视图的tooltip
        resetTooltip?: string
        //修改放大按钮的tooltip
        zoomInTooltip?: string;
        //修改缩小按钮的tooltip
        zoomOutTooltip?: string

        compassOuterRingSvg?: string
        compassRotationMarkerSvg?: string
        compassGyroSvg?: string
        //自定义按钮
        resetSvg?: string
        zoomInSvg?: string
        zoomOutSvg?: string
    }
    class CesiumNavigation {
        constructor(viewer: Viewer, options: NavigationOptions)
    }
    export = CesiumNavigation;
}