import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_0700D688 } from "./model.inc"
export const ttm_geo_0008F8 = [
{ command: Geo.node_culling_radius, args: [3000] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-2100, 8000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_0700D688] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
