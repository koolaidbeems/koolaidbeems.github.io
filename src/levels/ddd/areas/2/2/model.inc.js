// 0x070074C8 - 0x070074E0

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSP1Triangle, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { water_09007800 } from "../../../../../textures/water"

const ddd_seg7_lights_070074C8 = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x070074E0 - 0x070075E0
const ddd_seg7_vertex_070074E0 = [
    [[ -2149,    205,    512], 0, [     0,    582], [0x9d, 0xe6, 0xb7, 0xff]],
    [[ -2149,  -1732,   -511], 0, [  2012,   4448], [0xc3, 0xc3, 0x5c, 0xff]],
    [[ -2149,  -1732,    512], 0, [     0,   4448], [0xda, 0xda, 0x8e, 0xff]],
    [[ -3173,  -2449,   -511], 0, [  2012,   1790], [0x75, 0x30, 0x00, 0xff]],
    [[ -3173,   -511,    512], 0, [     0,  -2076], [0x49, 0x49, 0xb7, 0xff]],
    [[ -3173,  -2449,    512], 0, [     0,   1790], [0x75, 0x30, 0x00, 0xff]],
    [[ -3173,   -511,   -511], 0, [  2012,  -2076], [0x49, 0x49, 0x49, 0xff]],
    [[   845,  -2756,   -511], 0, [     0,  -9230], [0x00, 0x71, 0x38, 0xff]],
    [[ -2866,  -2756,    512], 0, [  2012,  -1820], [0x30, 0x75, 0x00, 0xff]],
    [[   845,  -2756,    512], 0, [  2012,  -9230], [0x00, 0x38, 0x8f, 0xff]],
    [[ -2866,  -2756,   -511], 0, [     0,  -1820], [0x30, 0x75, 0x00, 0xff]],
    [[ -3173,   1229,    512], 0, [     0,  -1462], [0xcc, 0xa7, 0xb7, 0xff]],
    [[ -2149,    205,   -511], 0, [  2012,    582], [0x99, 0xc4, 0x2a, 0xff]],
    [[ -3173,   1229,   -511], 0, [  2624,  -4528], [0xee, 0xba, 0x68, 0xff]],
    [[ -3173,  -2756,   -511], 0, [  2624,   3426], [0x00, 0x00, 0x7f, 0xff]],
    [[ -2149,  -1732,   -511], 0, [  4668,   1382], [0xc3, 0xc3, 0x5c, 0xff]],
];

// 0x070075E0 - 0x070076C0
const ddd_seg7_vertex_070075E0 = [
    [[ -3173,   1229,    512], 0, [     0,  -1462], [0xcc, 0xa7, 0xb7, 0xff]],
    [[ -3173,   1229,   -511], 0, [  2012,  -1462], [0xee, 0xba, 0x68, 0xff]],
    [[ -2149,    205,   -511], 0, [  2012,    582], [0x99, 0xc4, 0x2a, 0xff]],
    [[   845,  -1732,    512], 0, [  2012,  -9230], [0x00, 0x8f, 0xc8, 0xff]],
    [[ -2149,  -1732,   -511], 0, [     0,  -3252], [0xc3, 0xc3, 0x5c, 0xff]],
    [[   845,  -1732,   -511], 0, [     0,  -9230], [0x00, 0xc8, 0x71, 0xff]],
    [[ -2149,  -1732,    512], 0, [  2012,  -3252], [0xda, 0xda, 0x8e, 0xff]],
    [[ -2149,    205,    512], 0, [  4668,  -2484], [0x9d, 0xe6, 0xb7, 0xff]],
    [[ -3173,  -2756,    512], 0, [  2624,   3426], [0x00, 0x00, 0x81, 0xff]],
    [[ -3173,   1229,    512], 0, [  2624,  -4528], [0xcc, 0xa7, 0xb7, 0xff]],
    [[ -2149,  -1732,    512], 0, [  4668,   1382], [0xda, 0xda, 0x8e, 0xff]],
    [[ -3173,   1229,   -511], 0, [  2624,  -4528], [0xee, 0xba, 0x68, 0xff]],
    [[ -2149,  -1732,   -511], 0, [  4668,   1382], [0xc3, 0xc3, 0x5c, 0xff]],
    [[ -2149,    205,   -511], 0, [  4668,  -2484], [0x99, 0xc4, 0x2a, 0xff]],
];

// 0x070076C0 - 0x070077B0
const ddd_seg7_vertex_070076C0 = [
    [[ -6041,  -4607,    512], 0, [ -3096,   7120], [0x33, 0x33, 0x99, 0xff]],
    [[ -5017,   1229,    512], 0, [ -1052,  -4528], [0x12, 0xba, 0x98, 0xff]],
    [[ -5017,  -4607,    512], 0, [ -1052,   7120], [0xcd, 0x67, 0xcd, 0xff]],
    [[   845,  -2756,    512], 0, [ 10648,   3426], [0x00, 0x38, 0x8f, 0xff]],
    [[ -2149,  -1732,    512], 0, [  4668,   1382], [0xda, 0xda, 0x8e, 0xff]],
    [[   845,  -1732,    512], 0, [ 10648,   1382], [0x00, 0x8f, 0xc8, 0xff]],
    [[ -3173,  -2756,    512], 0, [  2624,   3426], [0x00, 0x00, 0x81, 0xff]],
    [[   845,  -1732,   -511], 0, [ 10648,   1382], [0x00, 0xc8, 0x71, 0xff]],
    [[ -3173,  -2756,   -511], 0, [  2624,   3426], [0x00, 0x00, 0x7f, 0xff]],
    [[   845,  -2756,   -511], 0, [ 10648,   3426], [0x00, 0x71, 0x38, 0xff]],
    [[ -2149,  -1732,   -511], 0, [  4668,   1382], [0xc3, 0xc3, 0x5c, 0xff]],
    [[ -3173,   1229,    512], 0, [  2624,  -4528], [0xcc, 0xa7, 0xb7, 0xff]],
    [[ -3173,   -511,    512], 0, [  2624,  -1054], [0x49, 0x49, 0xb7, 0xff]],
    [[ -5017,   -511,    512], 0, [ -1052,  -1054], [0x99, 0x33, 0xcd, 0xff]],
    [[ -6041,    205,    512], 0, [ -3096,  -2484], [0x71, 0xd2, 0xdf, 0xff]],
];

// 0x070077B0 - 0x070078B0
const ddd_seg7_vertex_070077B0 = [
    [[ -5017,   -511,   -511], 0, [ -1052,  -1054], [0xd6, 0x54, 0x54, 0xff]],
    [[ -3173,   1229,   -511], 0, [  2624,  -4528], [0xee, 0xba, 0x68, 0xff]],
    [[ -5017,   1229,   -511], 0, [ -1052,  -4528], [0x34, 0xa7, 0x49, 0xff]],
    [[ -3173,   -511,   -511], 0, [  2624,  -1054], [0x49, 0x49, 0x49, 0xff]],
    [[ -5017,  -4607,   -511], 0, [ -1052,   7120], [0xac, 0x2a, 0x54, 0xff]],
    [[ -6041,    205,   -511], 0, [ -3096,  -2484], [0x4f, 0xe0, 0x5d, 0xff]],
    [[ -6041,  -4607,   -511], 0, [ -3096,   7120], [0x33, 0x67, 0x33, 0xff]],
    [[ -6041,  -4607,   -204], 0, [  9576,   -440], [0x7f, 0x00, 0x00, 0xff]],
    [[ -6041,  -4607,   -511], 0, [  9576,  -1054], [0x33, 0x67, 0x33, 0xff]],
    [[ -6041,  -4300,   -511], 0, [  8960,  -1054], [0x7f, 0x00, 0x00, 0xff]],
    [[ -6041,  -3583,   -511], 0, [  7532,  -1054], [0x7f, 0x00, 0x00, 0xff]],
    [[ -6041,    205,    512], 0, [     0,    990], [0x71, 0xd2, 0xdf, 0xff]],
    [[ -6041,  -3583,    512], 0, [  7532,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[ -6041,  -4300,    512], 0, [  8960,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[ -6041,  -4607,    512], 0, [  9576,    990], [0x33, 0x33, 0x99, 0xff]],
    [[ -6041,  -4607,    205], 0, [  9576,    376], [0x7f, 0x00, 0x00, 0xff]],
];

// 0x070078B0 - 0x070079A0
const ddd_seg7_vertex_070078B0 = [
    [[ -6041,  -3890,   -511], 0, [  8144,  -1054], [0x7f, 0x00, 0x00, 0xff]],
    [[ -6041,  -3583,   -511], 0, [  7532,  -1054], [0x7f, 0x00, 0x00, 0xff]],
    [[ -6041,  -3583,   -204], 0, [  7532,   -440], [0x7f, 0x00, 0x00, 0xff]],
    [[ -6041,  -3583,    205], 0, [  7532,    376], [0x7f, 0x00, 0x00, 0xff]],
    [[ -6041,  -3583,    512], 0, [  7532,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[ -6041,  -3890,    512], 0, [  8144,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[ -6041,    205,   -511], 0, [     0,  -1054], [0x4f, 0xe0, 0x5d, 0xff]],
    [[ -6041,    205,    512], 0, [     0,    990], [0x71, 0xd2, 0xdf, 0xff]],
    [[ -3173,   -511,    512], 0, [  2012,  -1208], [0x49, 0x49, 0xb7, 0xff]],
    [[ -3173,   -511,   -511], 0, [     0,  -1208], [0x49, 0x49, 0x49, 0xff]],
    [[ -5017,   -511,   -511], 0, [     0,   2470], [0xd6, 0x54, 0x54, 0xff]],
    [[ -5017,  -4607,    512], 0, [  2012,   2470], [0xcd, 0x67, 0xcd, 0xff]],
    [[ -6041,  -4607,   -511], 0, [     0,   4514], [0x33, 0x67, 0x33, 0xff]],
    [[ -6041,  -4607,    512], 0, [  2012,   4514], [0x33, 0x33, 0x99, 0xff]],
    [[ -5017,  -4607,   -511], 0, [     0,   2470], [0xac, 0x2a, 0x54, 0xff]],
];

// 0x070079A0 - 0x07007A80
const ddd_seg7_vertex_070079A0 = [
    [[ -6041,    205,    512], 0, [     0,    582], [0x71, 0xd2, 0xdf, 0xff]],
    [[ -5017,   1229,   -511], 0, [  2012,  -1462], [0x34, 0xa7, 0x49, 0xff]],
    [[ -5017,   1229,    512], 0, [     0,  -1462], [0x12, 0xba, 0x98, 0xff]],
    [[ -6041,    205,   -511], 0, [  2012,    582], [0x4f, 0xe0, 0x5d, 0xff]],
    [[ -5017,   1229,    512], 0, [  2012,   2470], [0x12, 0xba, 0x98, 0xff]],
    [[ -3173,   1229,   -511], 0, [     0,  -1208], [0xee, 0xba, 0x68, 0xff]],
    [[ -3173,   1229,    512], 0, [  2012,  -1208], [0xcc, 0xa7, 0xb7, 0xff]],
    [[ -5017,   1229,   -511], 0, [     0,   2470], [0x34, 0xa7, 0x49, 0xff]],
    [[ -3173,  -2449,   -511], 0, [  2012,   -252], [0x75, 0x30, 0x00, 0xff]],
    [[ -3173,  -2449,    512], 0, [     0,   -252], [0x75, 0x30, 0x00, 0xff]],
    [[ -2866,  -2756,    512], 0, [     0,    362], [0x30, 0x75, 0x00, 0xff]],
    [[ -3173,   -511,    512], 0, [  2012,  -1208], [0x49, 0x49, 0xb7, 0xff]],
    [[ -5017,   -511,   -511], 0, [     0,   2470], [0xd6, 0x54, 0x54, 0xff]],
    [[ -5017,   -511,    512], 0, [  2012,   2470], [0x99, 0x33, 0xcd, 0xff]],
];

// 0x07007A80 - 0x07007AF0
const ddd_seg7_vertex_07007A80 = [
    [[ -5017,   -511,    512], 0, [     0,  -4120], [0x99, 0x33, 0xcd, 0xff]],
    [[ -5017,  -4607,   -511], 0, [  2012,   4054], [0xac, 0x2a, 0x54, 0xff]],
    [[ -5017,  -4607,    512], 0, [     0,   4054], [0xcd, 0x67, 0xcd, 0xff]],
    [[ -5017,   -511,   -511], 0, [  2012,  -4120], [0xd6, 0x54, 0x54, 0xff]],
    [[ -3173,  -2449,   -511], 0, [  2012,   -252], [0x75, 0x30, 0x00, 0xff]],
    [[ -2866,  -2756,    512], 0, [     0,    362], [0x30, 0x75, 0x00, 0xff]],
    [[ -2866,  -2756,   -511], 0, [  2012,    362], [0x30, 0x75, 0x00, 0xff]],
];

// 0x07007AF0 - 0x07007CB8
const ddd_seg7_dl_07007AF0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, water_09007800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPLight(ddd_seg7_lights_070074C8.l, 1),
    gsSPLight(ddd_seg7_lights_070074C8.a, 2),
    gsSPVertex(ddd_seg7_vertex_070074E0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12,  0, 0x0),
    gsSP2Triangles( 0, 12,  1, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(ddd_seg7_vertex_070075E0, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSPVertex(ddd_seg7_vertex_070076C0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0,  1, 11, 12, 0x0),
    gsSP2Triangles( 1, 12, 13, 0x0,  0, 14,  1, 0x0),
    gsSPVertex(ddd_seg7_vertex_070077B0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  2,  5, 0x0,  4,  5,  6, 0x0),
    gsSP2Triangles( 7,  8,  9, 0x0, 10, 11, 12, 0x0),
    gsSP1Triangle(13, 14, 15, 0x0),
    gsSPVertex(ddd_seg7_vertex_070078B0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 1,  6,  7, 0x0,  8,  9, 10, 0x0),
    gsSP2Triangles(11, 12, 13, 0x0, 11, 14, 12, 0x0),
    gsSPVertex(ddd_seg7_vertex_070079A0, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSPVertex(ddd_seg7_vertex_07007A80, 7, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP1Triangle( 4,  5,  6, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07007CB8 - 0x07007D18
export const ddd_seg7_dl_07007CB8 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(ddd_seg7_dl_07007AF0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 2021-05-31 10:29:05 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)