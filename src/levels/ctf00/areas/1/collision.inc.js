import {
    COL_INIT,
    COL_VERTEX_INIT,
    COL_VERTEX,
    COL_TRI_INIT,
    COL_TRI,
    COL_TRI_STOP,
    COL_TRI_SPECIAL,
    COL_SPECIAL_INIT,
    COL_WATER_BOX,
    COL_WATER_BOX_INIT,
    COL_END,
    SPECIAL_OBJECT,
    SPECIAL_OBJECT_WITH_YAW,

    SURFACE_DEFAULT,
    SURFACE_HANGABLE,
    SURFACE_WATER,
    SURFACE_FLOWING_WATER,
    SURFACE_SLIPPERY,
    SURFACE_VERY_SLIPPERY,
    SURFACE_VERTICAL_WIND,
    SURFACE_NOT_SLIPPERY,
    SURFACE_WALL_MISC,
    SURFACE_NOISE_DEFAULT,
    SURFACE_NOISE_SLIPPERY,
    SURFACE_NO_CAM_COLLISION,
    SURFACE_CLOSE_CAMERA,
	SURFACE_SHALLOW_QUICKSAND,
    SURFACE_CAMERA_ROTATE_LEFT,
	SURFACE_HARD,
	SURFACE_0004,
	SURFACE_DEATH_PLANE
	
} from "../../../../include/surface_terrains"

export const ctf00_area_1_collision = [
	...COL_INIT(),
	...COL_VERTEX_INIT(380),
	...COL_VERTEX(-506, 207, -7594),
	...COL_VERTEX(-192, 207, -7257),
	...COL_VERTEX(-157, 207, -7683),
	...COL_VERTEX(-506, 207, -7930),
	...COL_VERTEX(2, 207, -7683),
	...COL_VERTEX(37, 207, -7257),
	...COL_VERTEX(172, 107, -7089),
	...COL_VERTEX(-327, 107, -7089),
	...COL_VERTEX(-775, 107, -7538),
	...COL_VERTEX(-157, 207, -7842),
	...COL_VERTEX(2, 207, -7842),
	...COL_VERTEX(351, 207, -7594),
	...COL_VERTEX(621, 107, -7538),
	...COL_VERTEX(621, 107, -7986),
	...COL_VERTEX(351, 207, -7930),
	...COL_VERTEX(-775, 107, -7986),
	...COL_VERTEX(-192, 207, -8267),
	...COL_VERTEX(37, 207, -8267),
	...COL_VERTEX(-327, 107, -8435),
	...COL_VERTEX(172, 107, -8435),
	...COL_VERTEX(-1584, 107, -7278),
	...COL_VERTEX(461, 107, -9215),
	...COL_VERTEX(-615, 107, -9215),
	...COL_VERTEX(-1584, 107, -8246),
	...COL_VERTEX(461, 107, -6309),
	...COL_VERTEX(-615, 107, -6309),
	...COL_VERTEX(1429, 107, -7278),
	...COL_VERTEX(1429, 107, -8246),
	...COL_VERTEX(461, 1482, -6309),
	...COL_VERTEX(-615, 1482, -6309),
	...COL_VERTEX(-1584, 1482, -7278),
	...COL_VERTEX(461, 1482, -9215),
	...COL_VERTEX(1429, 1482, -8246),
	...COL_VERTEX(1429, 1482, -7278),
	...COL_VERTEX(-1584, 1482, -8246),
	...COL_VERTEX(-615, 1482, -9215),
	...COL_VERTEX(-658, 1482, -9406),
	...COL_VERTEX(527, 1714, -9343),
	...COL_VERTEX(560, 1482, -9406),
	...COL_VERTEX(-1754, 1482, -7214),
	...COL_VERTEX(-1698, 1714, -8289),
	...COL_VERTEX(-1754, 1482, -8310),
	...COL_VERTEX(-644, 1714, -6181),
	...COL_VERTEX(-1698, 1714, -7235),
	...COL_VERTEX(1656, 1482, -8310),
	...COL_VERTEX(1581, 1714, -7235),
	...COL_VERTEX(1656, 1482, -7214),
	...COL_VERTEX(1581, 1714, -8289),
	...COL_VERTEX(-644, 1714, -9343),
	...COL_VERTEX(560, 1482, -6118),
	...COL_VERTEX(527, 1714, -6181),
	...COL_VERTEX(-658, 1482, -6118),
	...COL_VERTEX(1202, 2000, -8182),
	...COL_VERTEX(-573, 2000, -9023),
	...COL_VERTEX(1202, 2000, -7342),
	...COL_VERTEX(361, 2000, -6501),
	...COL_VERTEX(-573, 2000, -6501),
	...COL_VERTEX(361, 2000, -9023),
	...COL_VERTEX(-1413, 2000, -8182),
	...COL_VERTEX(-1413, 2000, -7342),
	...COL_VERTEX(430, 2212, -7919),
	...COL_VERTEX(-338, 2212, -8283),
	...COL_VERTEX(430, 2212, -7555),
	...COL_VERTEX(66, 2212, -7192),
	...COL_VERTEX(-338, 2212, -7192),
	...COL_VERTEX(66, 2212, -8283),
	...COL_VERTEX(-702, 2212, -7919),
	...COL_VERTEX(-702, 2212, -7555),
	...COL_VERTEX(-658, 107, -6118),
	...COL_VERTEX(560, 107, -6118),
	...COL_VERTEX(-5997, 106, 4026),
	...COL_VERTEX(-5795, 100, 4661),
	...COL_VERTEX(-5795, 100, 3835),
	...COL_VERTEX(-506, 207, 7777),
	...COL_VERTEX(-157, 207, 7865),
	...COL_VERTEX(-192, 207, 7440),
	...COL_VERTEX(-506, 207, 8113),
	...COL_VERTEX(2, 207, 7865),
	...COL_VERTEX(37, 207, 7440),
	...COL_VERTEX(172, 107, 7272),
	...COL_VERTEX(-327, 107, 7272),
	...COL_VERTEX(-775, 107, 7720),
	...COL_VERTEX(-157, 207, 8024),
	...COL_VERTEX(2, 207, 8024),
	...COL_VERTEX(351, 207, 7777),
	...COL_VERTEX(621, 107, 7720),
	...COL_VERTEX(621, 107, 8169),
	...COL_VERTEX(351, 207, 8113),
	...COL_VERTEX(-775, 107, 8169),
	...COL_VERTEX(-192, 207, 8450),
	...COL_VERTEX(37, 207, 8450),
	...COL_VERTEX(-327, 107, 8618),
	...COL_VERTEX(172, 107, 8618),
	...COL_VERTEX(-1584, 107, 7461),
	...COL_VERTEX(461, 107, 9397),
	...COL_VERTEX(-615, 107, 9397),
	...COL_VERTEX(-1584, 107, 8429),
	...COL_VERTEX(461, 107, 6492),
	...COL_VERTEX(-615, 107, 6492),
	...COL_VERTEX(1429, 107, 7461),
	...COL_VERTEX(1429, 107, 8429),
	...COL_VERTEX(461, 1482, 6492),
	...COL_VERTEX(-1584, 1482, 7461),
	...COL_VERTEX(-615, 1482, 6492),
	...COL_VERTEX(461, 1482, 9397),
	...COL_VERTEX(1429, 1482, 7461),
	...COL_VERTEX(1429, 1482, 8429),
	...COL_VERTEX(-1584, 1482, 8429),
	...COL_VERTEX(-615, 1482, 9397),
	...COL_VERTEX(-658, 1482, 9589),
	...COL_VERTEX(560, 1482, 9589),
	...COL_VERTEX(527, 1714, 9526),
	...COL_VERTEX(-1754, 1482, 7397),
	...COL_VERTEX(-1754, 1482, 8493),
	...COL_VERTEX(-1698, 1714, 8472),
	...COL_VERTEX(-1698, 1714, 7418),
	...COL_VERTEX(-644, 1714, 6364),
	...COL_VERTEX(1656, 1482, 8493),
	...COL_VERTEX(1656, 1482, 7397),
	...COL_VERTEX(1581, 1714, 7418),
	...COL_VERTEX(1581, 1714, 8472),
	...COL_VERTEX(-644, 1714, 9526),
	...COL_VERTEX(560, 1482, 6301),
	...COL_VERTEX(527, 1714, 6364),
	...COL_VERTEX(-658, 1482, 6301),
	...COL_VERTEX(1202, 2000, 8365),
	...COL_VERTEX(-573, 2000, 9206),
	...COL_VERTEX(361, 2000, 6684),
	...COL_VERTEX(1202, 2000, 7524),
	...COL_VERTEX(-573, 2000, 6684),
	...COL_VERTEX(361, 2000, 9206),
	...COL_VERTEX(-1413, 2000, 8365),
	...COL_VERTEX(-1413, 2000, 7524),
	...COL_VERTEX(430, 2212, 8102),
	...COL_VERTEX(-338, 2212, 8466),
	...COL_VERTEX(66, 2212, 7374),
	...COL_VERTEX(430, 2212, 7738),
	...COL_VERTEX(-338, 2212, 7374),
	...COL_VERTEX(66, 2212, 8466),
	...COL_VERTEX(-702, 2212, 8102),
	...COL_VERTEX(-702, 2212, 7738),
	...COL_VERTEX(560, 107, 6301),
	...COL_VERTEX(-658, 107, 6301),
	...COL_VERTEX(-5997, 106, 6625),
	...COL_VERTEX(-5795, 105, 10418),
	...COL_VERTEX(5638, 100, 3835),
	...COL_VERTEX(5638, 100, 4661),
	...COL_VERTEX(5840, 106, 4026),
	...COL_VERTEX(5840, 106, 6625),
	...COL_VERTEX(5638, 105, 10418),
	...COL_VERTEX(5638, 100, -4479),
	...COL_VERTEX(5638, 100, -3652),
	...COL_VERTEX(5840, 106, -3844),
	...COL_VERTEX(5840, 106, -6442),
	...COL_VERTEX(5638, 105, -10235),
	...COL_VERTEX(-5795, 100, -4479),
	...COL_VERTEX(-5997, 106, -3844),
	...COL_VERTEX(-5795, 100, -3652),
	...COL_VERTEX(-5997, 106, -6442),
	...COL_VERTEX(-5795, 105, -10235),
	...COL_VERTEX(1974, -887, 9962),
	...COL_VERTEX(-2013, -887, -9780),
	...COL_VERTEX(1974, -887, -9780),
	...COL_VERTEX(-2013, -887, 9962),
	...COL_VERTEX(-1652, -3846, 14085),
	...COL_VERTEX(-1652, -3846, 12723),
	...COL_VERTEX(-462, -3846, 12723),
	...COL_VERTEX(-2179, -4909, 14085),
	...COL_VERTEX(-2071, -4905, 11993),
	...COL_VERTEX(1613, -3846, 12723),
	...COL_VERTEX(4062, -1823, 13978),
	...COL_VERTEX(1613, -3846, 14085),
	...COL_VERTEX(5424, -992, 12720),
	...COL_VERTEX(4076, 75, 10372),
	...COL_VERTEX(4062, -992, 12720),
	...COL_VERTEX(4062, -1823, 12720),
	...COL_VERTEX(5424, -1823, 13978),
	...COL_VERTEX(4062, -992, 13978),
	...COL_VERTEX(423, -3846, 12723),
	...COL_VERTEX(423, -3846, 14085),
	...COL_VERTEX(2032, -4905, 11993),
	...COL_VERTEX(-4101, -1823, 13978),
	...COL_VERTEX(-4115, 75, 10372),
	...COL_VERTEX(-5463, -992, 12720),
	...COL_VERTEX(-4101, -992, 12720),
	...COL_VERTEX(-5463, -1823, 13978),
	...COL_VERTEX(-4101, -1823, 12720),
	...COL_VERTEX(-4101, -992, 13978),
	...COL_VERTEX(-5463, -992, 13978),
	...COL_VERTEX(-5463, -1823, 12720),
	...COL_VERTEX(-462, -3846, 14085),
	...COL_VERTEX(5424, -1823, 12720),
	...COL_VERTEX(5424, -992, 13978),
	...COL_VERTEX(2140, -4909, 14085),
	...COL_VERTEX(-5247, -707, 9903),
	...COL_VERTEX(-5464, 75, 10372),
	...COL_VERTEX(-4329, -707, 9903),
	...COL_VERTEX(4290, -707, 9903),
	...COL_VERTEX(5208, -704, 9897),
	...COL_VERTEX(5425, 75, 10372),
	...COL_VERTEX(-1652, -3846, -13902),
	...COL_VERTEX(-462, -3846, -12540),
	...COL_VERTEX(-1652, -3846, -12540),
	...COL_VERTEX(-2179, -4909, -13902),
	...COL_VERTEX(-2071, -4905, -11811),
	...COL_VERTEX(1613, -3846, -12540),
	...COL_VERTEX(1613, -3846, -13902),
	...COL_VERTEX(4062, -1823, -13796),
	...COL_VERTEX(5424, -992, -12537),
	...COL_VERTEX(4062, -992, -12537),
	...COL_VERTEX(4076, 75, -10189),
	...COL_VERTEX(4062, -1823, -12537),
	...COL_VERTEX(5424, -1823, -13796),
	...COL_VERTEX(4062, -992, -13796),
	...COL_VERTEX(423, -3846, -13902),
	...COL_VERTEX(423, -3846, -12540),
	...COL_VERTEX(2032, -4905, -11811),
	...COL_VERTEX(-4101, -1823, -13796),
	...COL_VERTEX(-4115, 75, -10189),
	...COL_VERTEX(-4101, -992, -12537),
	...COL_VERTEX(-5463, -992, -12537),
	...COL_VERTEX(-5463, -1823, -13796),
	...COL_VERTEX(-4101, -1823, -12537),
	...COL_VERTEX(-4101, -992, -13796),
	...COL_VERTEX(-5463, -992, -13796),
	...COL_VERTEX(-5463, -1823, -12537),
	...COL_VERTEX(-462, -3846, -13902),
	...COL_VERTEX(5424, -1823, -12537),
	...COL_VERTEX(5424, -992, -13796),
	...COL_VERTEX(2140, -4909, -13902),
	...COL_VERTEX(-5247, -707, -9721),
	...COL_VERTEX(-5464, 75, -10189),
	...COL_VERTEX(-4329, -707, -9721),
	...COL_VERTEX(4290, -707, -9721),
	...COL_VERTEX(5208, -704, -9714),
	...COL_VERTEX(5425, 75, -10189),
	...COL_VERTEX(-1584, 1327, -8246),
	...COL_VERTEX(-1584, 1327, -7278),
	...COL_VERTEX(-615, 1327, -6309),
	...COL_VERTEX(461, 1327, -6309),
	...COL_VERTEX(-615, 1327, -9215),
	...COL_VERTEX(461, 1327, -9215),
	...COL_VERTEX(1429, 1327, -7278),
	...COL_VERTEX(1429, 1327, -8246),
	...COL_VERTEX(5930, 106, -1876),
	...COL_VERTEX(5930, 106, 2059),
	...COL_VERTEX(7459, 106, 2059),
	...COL_VERTEX(5638, 100, -2249),
	...COL_VERTEX(5638, 100, 2431),
	...COL_VERTEX(-7616, 106, -6442),
	...COL_VERTEX(-7616, 106, -3844),
	...COL_VERTEX(7459, 106, -6442),
	...COL_VERTEX(7459, 106, -3844),
	...COL_VERTEX(7459, 106, -1876),
	...COL_VERTEX(-1584, 1327, 8429),
	...COL_VERTEX(-1584, 1327, 7461),
	...COL_VERTEX(-615, 1327, 6492),
	...COL_VERTEX(461, 1327, 6492),
	...COL_VERTEX(-615, 1327, 9397),
	...COL_VERTEX(461, 1327, 9397),
	...COL_VERTEX(1429, 1327, 8429),
	...COL_VERTEX(1429, 1327, 7461),
	...COL_VERTEX(9215, 106, 6625),
	...COL_VERTEX(9215, 106, -6442),
	...COL_VERTEX(-7616, 106, 4026),
	...COL_VERTEX(-7616, 106, 6625),
	...COL_VERTEX(7459, 106, 6625),
	...COL_VERTEX(7459, 106, 4026),
	...COL_VERTEX(-5795, 2491, -3652),
	...COL_VERTEX(5638, 2491, 3835),
	...COL_VERTEX(5638, 2491, -3652),
	...COL_VERTEX(-9371, 106, 6625),
	...COL_VERTEX(-9371, 106, -6442),
	...COL_VERTEX(-5795, 2491, 3835),
	...COL_VERTEX(-7616, 106, 2059),
	...COL_VERTEX(-6086, 106, -1876),
	...COL_VERTEX(-7616, 106, -1876),
	...COL_VERTEX(-6086, 106, 2059),
	...COL_VERTEX(-5795, 100, -2249),
	...COL_VERTEX(-5795, 100, 2431),
	...COL_VERTEX(-5795, 2491, 4661),
	...COL_VERTEX(5638, 2491, -4479),
	...COL_VERTEX(-2013, -4210, 8437),
	...COL_VERTEX(1974, -4210, -8254),
	...COL_VERTEX(-2013, -4210, -8254),
	...COL_VERTEX(1974, -4210, 8437),
	...COL_VERTEX(-3632, -4905, 8118),
	...COL_VERTEX(-3632, -4905, 11993),
	...COL_VERTEX(3475, -4905, 8118),
	...COL_VERTEX(3475, -4905, 11993),
	...COL_VERTEX(3475, -4905, -7935),
	...COL_VERTEX(3475, -4905, -11811),
	...COL_VERTEX(-3632, -4905, -7935),
	...COL_VERTEX(-3632, -4905, -11811),
	...COL_VERTEX(560, 107, -9406),
	...COL_VERTEX(1656, 1327, -8310),
	...COL_VERTEX(1656, 107, -8310),
	...COL_VERTEX(-658, 1327, -6118),
	...COL_VERTEX(-658, 107, -9406),
	...COL_VERTEX(560, 1327, -9406),
	...COL_VERTEX(-658, 1327, -9406),
	...COL_VERTEX(1656, 1327, -7214),
	...COL_VERTEX(1656, 107, -7214),
	...COL_VERTEX(560, 1327, -6118),
	...COL_VERTEX(-1754, 107, -7214),
	...COL_VERTEX(-1754, 1327, -7214),
	...COL_VERTEX(-1754, 107, -8310),
	...COL_VERTEX(-1754, 1327, -8310),
	...COL_VERTEX(-3632, -4905, 3616),
	...COL_VERTEX(-5795, -382, 2251),
	...COL_VERTEX(5638, 2491, 91),
	...COL_VERTEX(5337, -382, 3980),
	...COL_VERTEX(3475, -4905, 3616),
	...COL_VERTEX(3475, -4905, -3433),
	...COL_VERTEX(-3632, -4905, -3433),
	...COL_VERTEX(-5795, 2491, 91),
	...COL_VERTEX(-7616, -377, -6380),
	...COL_VERTEX(-5972, -378, -3906),
	...COL_VERTEX(-7678, -377, -3906),
	...COL_VERTEX(-5494, -382, -3797),
	...COL_VERTEX(-5938, -379, -6380),
	...COL_VERTEX(-5494, -378, -7895),
	...COL_VERTEX(5816, -378, -3906),
	...COL_VERTEX(7459, -377, -6380),
	...COL_VERTEX(7521, -377, -3906),
	...COL_VERTEX(5337, -382, -3797),
	...COL_VERTEX(5781, -379, -6380),
	...COL_VERTEX(-9309, -377, -6380),
	...COL_VERTEX(-7678, -377, -1814),
	...COL_VERTEX(-6056, -378, -1814),
	...COL_VERTEX(-5795, -382, -2068),
	...COL_VERTEX(9152, -377, -6380),
	...COL_VERTEX(7521, -377, -1814),
	...COL_VERTEX(5899, -378, -1814),
	...COL_VERTEX(5638, -382, -2068),
	...COL_VERTEX(5337, -378, 8078),
	...COL_VERTEX(5337, -378, -7895),
	...COL_VERTEX(560, 107, 9589),
	...COL_VERTEX(1656, 107, 8493),
	...COL_VERTEX(1656, 1327, 8493),
	...COL_VERTEX(-658, 1327, 6301),
	...COL_VERTEX(-658, 107, 9589),
	...COL_VERTEX(560, 1327, 9589),
	...COL_VERTEX(-658, 1327, 9589),
	...COL_VERTEX(1656, 107, 7397),
	...COL_VERTEX(1656, 1327, 7397),
	...COL_VERTEX(560, 1327, 6301),
	...COL_VERTEX(-1754, 107, 7397),
	...COL_VERTEX(-1754, 1327, 7397),
	...COL_VERTEX(-1754, 107, 8493),
	...COL_VERTEX(-1754, 1327, 8493),
	...COL_VERTEX(-5494, -378, 8078),
	...COL_VERTEX(-7616, -377, 6562),
	...COL_VERTEX(-7678, -377, 4089),
	...COL_VERTEX(-5972, -378, 4089),
	...COL_VERTEX(-5494, -382, 3980),
	...COL_VERTEX(-5938, -379, 6562),
	...COL_VERTEX(5816, -378, 4089),
	...COL_VERTEX(7521, -377, 4089),
	...COL_VERTEX(7459, -377, 6562),
	...COL_VERTEX(5781, -379, 6562),
	...COL_VERTEX(-9309, -377, 6562),
	...COL_VERTEX(-7678, -377, 1997),
	...COL_VERTEX(-6056, -378, 1997),
	...COL_VERTEX(7521, -377, 1997),
	...COL_VERTEX(9152, -377, 6562),
	...COL_VERTEX(5899, -378, 1997),
	...COL_VERTEX(5638, -382, 2251),
	...COL_VERTEX(-5857, -382, 91),
	...COL_VERTEX(-3632, -4905, 91),
	...COL_VERTEX(5701, -382, 91),
	...COL_VERTEX(3475, -4905, 91),
	...COL_VERTEX(1974, -1875, -9326),
	...COL_VERTEX(-2013, -4030, -8337),
	...COL_VERTEX(-2013, -4030, 8519),
	...COL_VERTEX(1974, -1875, 9509),
	...COL_VERTEX(28168, -13732, -28133),
	...COL_VERTEX(-28169, -13732, 28096),
	...COL_VERTEX(28168, -13732, 28167),
	...COL_VERTEX(-28167, -13732, -28133),
	...COL_TRI_INIT(SURFACE_NOT_SLIPPERY, 356),
	...COL_TRI(0, 1, 2),
	...COL_TRI(3, 0, 2),
	...COL_TRI(1, 4, 2),
	...COL_TRI(1, 5, 4),
	...COL_TRI(6, 1, 7),
	...COL_TRI(6, 5, 1),
	...COL_TRI(7, 1, 8),
	...COL_TRI(3, 2, 9),
	...COL_TRI(10, 4, 11),
	...COL_TRI(5, 11, 4),
	...COL_TRI(12, 5, 6),
	...COL_TRI(13, 11, 12),
	...COL_TRI(13, 14, 11),
	...COL_TRI(8, 3, 15),
	...COL_TRI(3, 9, 16),
	...COL_TRI(16, 9, 10),
	...COL_TRI(16, 10, 17),
	...COL_TRI(15, 16, 18),
	...COL_TRI(18, 16, 17),
	...COL_TRI(10, 14, 17),
	...COL_TRI(18, 17, 19),
	...COL_TRI(19, 17, 13),
	...COL_TRI(4, 9, 2),
	...COL_TRI(15, 20, 8),
	...COL_TRI(13, 21, 19),
	...COL_TRI(19, 22, 18),
	...COL_TRI(15, 22, 23),
	...COL_TRI(7, 24, 6),
	...COL_TRI(8, 25, 7),
	...COL_TRI(12, 24, 26),
	...COL_TRI(13, 26, 27),
	...COL_TRI(0, 8, 1),
	...COL_TRI(10, 11, 14),
	...COL_TRI(15, 3, 16),
	...COL_TRI(28, 29, 30),
	...COL_TRI(31, 32, 33),
	...COL_TRI(34, 35, 31),
	...COL_TRI(36, 37, 38),
	...COL_TRI(39, 40, 41),
	...COL_TRI(39, 42, 43),
	...COL_TRI(44, 45, 46),
	...COL_TRI(38, 47, 44),
	...COL_TRI(41, 48, 36),
	...COL_TRI(49, 45, 50),
	...COL_TRI(51, 50, 42),
	...COL_TRI(37, 52, 47),
	...COL_TRI(40, 53, 48),
	...COL_TRI(50, 54, 55),
	...COL_TRI(42, 55, 56),
	...COL_TRI(47, 54, 45),
	...COL_TRI(48, 57, 37),
	...COL_TRI(43, 58, 40),
	...COL_TRI(43, 56, 59),
	...COL_TRI(57, 60, 52),
	...COL_TRI(58, 61, 53),
	...COL_TRI(55, 62, 63),
	...COL_TRI(56, 63, 64),
	...COL_TRI(54, 60, 62),
	...COL_TRI(53, 65, 57),
	...COL_TRI(59, 66, 58),
	...COL_TRI(56, 67, 59),
	...COL_TRI(65, 66, 67),
	...COL_TRI(24, 68, 69),
	...COL_TRI(70, 71, 72),
	...COL_TRI(4, 10, 9),
	...COL_TRI(15, 23, 20),
	...COL_TRI(13, 27, 21),
	...COL_TRI(19, 21, 22),
	...COL_TRI(15, 18, 22),
	...COL_TRI(7, 25, 24),
	...COL_TRI(8, 20, 25),
	...COL_TRI(12, 6, 24),
	...COL_TRI(13, 12, 26),
	...COL_TRI(0, 3, 8),
	...COL_TRI(14, 13, 17),
	...COL_TRI(12, 11, 5),
	...COL_TRI(33, 28, 31),
	...COL_TRI(28, 30, 31),
	...COL_TRI(30, 34, 31),
	...COL_TRI(36, 48, 37),
	...COL_TRI(39, 43, 40),
	...COL_TRI(39, 51, 42),
	...COL_TRI(44, 47, 45),
	...COL_TRI(38, 37, 47),
	...COL_TRI(41, 40, 48),
	...COL_TRI(49, 46, 45),
	...COL_TRI(51, 49, 50),
	...COL_TRI(37, 57, 52),
	...COL_TRI(40, 58, 53),
	...COL_TRI(50, 45, 54),
	...COL_TRI(42, 50, 55),
	...COL_TRI(47, 52, 54),
	...COL_TRI(48, 53, 57),
	...COL_TRI(43, 59, 58),
	...COL_TRI(43, 42, 56),
	...COL_TRI(57, 65, 60),
	...COL_TRI(58, 66, 61),
	...COL_TRI(55, 54, 62),
	...COL_TRI(56, 55, 63),
	...COL_TRI(54, 52, 60),
	...COL_TRI(53, 61, 65),
	...COL_TRI(59, 67, 66),
	...COL_TRI(56, 64, 67),
	...COL_TRI(63, 67, 64),
	...COL_TRI(67, 63, 65),
	...COL_TRI(63, 62, 65),
	...COL_TRI(62, 60, 65),
	...COL_TRI(66, 65, 61),
	...COL_TRI(24, 25, 68),
	...COL_TRI(73, 74, 75),
	...COL_TRI(76, 74, 73),
	...COL_TRI(75, 74, 77),
	...COL_TRI(75, 77, 78),
	...COL_TRI(79, 80, 75),
	...COL_TRI(79, 75, 78),
	...COL_TRI(80, 81, 75),
	...COL_TRI(76, 82, 74),
	...COL_TRI(83, 84, 77),
	...COL_TRI(78, 77, 84),
	...COL_TRI(85, 79, 78),
	...COL_TRI(86, 85, 84),
	...COL_TRI(86, 84, 87),
	...COL_TRI(81, 88, 76),
	...COL_TRI(76, 89, 82),
	...COL_TRI(89, 83, 82),
	...COL_TRI(89, 90, 83),
	...COL_TRI(88, 91, 89),
	...COL_TRI(91, 90, 89),
	...COL_TRI(83, 90, 87),
	...COL_TRI(91, 92, 90),
	...COL_TRI(92, 86, 90),
	...COL_TRI(77, 74, 82),
	...COL_TRI(88, 81, 93),
	...COL_TRI(86, 92, 94),
	...COL_TRI(92, 91, 95),
	...COL_TRI(88, 96, 95),
	...COL_TRI(80, 79, 97),
	...COL_TRI(81, 80, 98),
	...COL_TRI(85, 99, 97),
	...COL_TRI(86, 100, 99),
	...COL_TRI(73, 75, 81),
	...COL_TRI(83, 87, 84),
	...COL_TRI(88, 89, 76),
	...COL_TRI(101, 102, 103),
	...COL_TRI(104, 105, 106),
	...COL_TRI(107, 104, 108),
	...COL_TRI(109, 110, 111),
	...COL_TRI(112, 113, 114),
	...COL_TRI(112, 115, 116),
	...COL_TRI(117, 118, 119),
	...COL_TRI(110, 117, 120),
	...COL_TRI(113, 109, 121),
	...COL_TRI(122, 123, 119),
	...COL_TRI(124, 116, 123),
	...COL_TRI(111, 120, 125),
	...COL_TRI(114, 121, 126),
	...COL_TRI(123, 127, 128),
	...COL_TRI(116, 129, 127),
	...COL_TRI(120, 119, 128),
	...COL_TRI(121, 111, 130),
	...COL_TRI(115, 114, 131),
	...COL_TRI(115, 132, 129),
	...COL_TRI(130, 125, 133),
	...COL_TRI(131, 126, 134),
	...COL_TRI(127, 135, 136),
	...COL_TRI(129, 137, 135),
	...COL_TRI(128, 136, 133),
	...COL_TRI(126, 130, 138),
	...COL_TRI(132, 131, 139),
	...COL_TRI(129, 132, 140),
	...COL_TRI(138, 140, 139),
	...COL_TRI(97, 141, 142),
	...COL_TRI(143, 144, 71),
	...COL_TRI(77, 82, 83),
	...COL_TRI(88, 93, 96),
	...COL_TRI(86, 94, 100),
	...COL_TRI(92, 95, 94),
	...COL_TRI(88, 95, 91),
	...COL_TRI(80, 97, 98),
	...COL_TRI(81, 98, 93),
	...COL_TRI(85, 97, 79),
	...COL_TRI(86, 99, 85),
	...COL_TRI(73, 81, 76),
	...COL_TRI(87, 90, 86),
	...COL_TRI(85, 78, 84),
	...COL_TRI(105, 104, 101),
	...COL_TRI(101, 104, 102),
	...COL_TRI(102, 104, 107),
	...COL_TRI(109, 111, 121),
	...COL_TRI(112, 114, 115),
	...COL_TRI(112, 116, 124),
	...COL_TRI(117, 119, 120),
	...COL_TRI(110, 120, 111),
	...COL_TRI(113, 121, 114),
	...COL_TRI(122, 119, 118),
	...COL_TRI(124, 123, 122),
	...COL_TRI(111, 125, 130),
	...COL_TRI(114, 126, 131),
	...COL_TRI(123, 128, 119),
	...COL_TRI(116, 127, 123),
	...COL_TRI(120, 128, 125),
	...COL_TRI(121, 130, 126),
	...COL_TRI(115, 131, 132),
	...COL_TRI(115, 129, 116),
	...COL_TRI(130, 133, 138),
	...COL_TRI(131, 134, 139),
	...COL_TRI(127, 136, 128),
	...COL_TRI(129, 135, 127),
	...COL_TRI(128, 133, 125),
	...COL_TRI(126, 138, 134),
	...COL_TRI(132, 139, 140),
	...COL_TRI(129, 140, 137),
	...COL_TRI(135, 137, 140),
	...COL_TRI(140, 138, 135),
	...COL_TRI(135, 138, 136),
	...COL_TRI(136, 138, 133),
	...COL_TRI(139, 134, 138),
	...COL_TRI(97, 142, 98),
	...COL_TRI(71, 70, 143),
	...COL_TRI(145, 146, 147),
	...COL_TRI(147, 146, 148),
	...COL_TRI(148, 146, 149),
	...COL_TRI(149, 71, 144),
	...COL_TRI(150, 151, 152),
	...COL_TRI(152, 153, 150),
	...COL_TRI(153, 154, 150),
	...COL_TRI(155, 156, 157),
	...COL_TRI(158, 156, 155),
	...COL_TRI(158, 155, 159),
	...COL_TRI(159, 150, 154),
	...COL_TRI(149, 146, 71),
	...COL_TRI(159, 155, 150),
	...COL_TRI(160, 161, 162),
	...COL_TRI(160, 163, 161),
	...COL_TRI(164, 165, 166),
	...COL_TRI(167, 165, 168),
	...COL_TRI(169, 170, 171),
	...COL_TRI(172, 173, 174),
	...COL_TRI(175, 176, 170),
	...COL_TRI(176, 177, 170),
	...COL_TRI(177, 172, 174),
	...COL_TRI(177, 178, 179),
	...COL_TRI(169, 174, 175),
	...COL_TRI(177, 171, 170),
	...COL_TRI(180, 167, 168),
	...COL_TRI(181, 165, 164),
	...COL_TRI(182, 183, 184),
	...COL_TRI(185, 186, 181),
	...COL_TRI(187, 185, 181),
	...COL_TRI(183, 187, 184),
	...COL_TRI(188, 189, 185),
	...COL_TRI(166, 187, 190),
	...COL_TRI(184, 165, 186),
	...COL_TRI(191, 192, 176),
	...COL_TRI(164, 187, 181),
	...COL_TRI(178, 190, 179),
	...COL_TRI(193, 169, 171),
	...COL_TRI(168, 169, 180),
	...COL_TRI(171, 167, 193),
	...COL_TRI(194, 183, 195),
	...COL_TRI(196, 184, 186),
	...COL_TRI(189, 196, 186),
	...COL_TRI(174, 197, 175),
	...COL_TRI(198, 172, 191),
	...COL_TRI(191, 197, 198),
	...COL_TRI(167, 164, 165),
	...COL_TRI(169, 175, 170),
	...COL_TRI(172, 199, 173),
	...COL_TRI(175, 191, 176),
	...COL_TRI(176, 192, 177),
	...COL_TRI(177, 192, 172),
	...COL_TRI(177, 174, 178),
	...COL_TRI(169, 178, 174),
	...COL_TRI(177, 179, 171),
	...COL_TRI(180, 193, 167),
	...COL_TRI(181, 186, 165),
	...COL_TRI(182, 195, 183),
	...COL_TRI(185, 189, 186),
	...COL_TRI(187, 188, 185),
	...COL_TRI(183, 188, 187),
	...COL_TRI(188, 183, 189),
	...COL_TRI(166, 184, 187),
	...COL_TRI(184, 166, 165),
	...COL_TRI(191, 172, 192),
	...COL_TRI(164, 190, 187),
	...COL_TRI(178, 166, 190),
	...COL_TRI(193, 180, 169),
	...COL_TRI(168, 165, 169),
	...COL_TRI(171, 164, 167),
	...COL_TRI(194, 189, 183),
	...COL_TRI(196, 182, 184),
	...COL_TRI(189, 194, 196),
	...COL_TRI(174, 173, 197),
	...COL_TRI(198, 199, 172),
	...COL_TRI(191, 175, 197),
	...COL_TRI(200, 201, 202),
	...COL_TRI(203, 204, 202),
	...COL_TRI(205, 206, 207),
	...COL_TRI(208, 209, 210),
	...COL_TRI(211, 207, 212),
	...COL_TRI(212, 207, 213),
	...COL_TRI(213, 209, 208),
	...COL_TRI(213, 214, 215),
	...COL_TRI(205, 211, 209),
	...COL_TRI(213, 207, 206),
	...COL_TRI(216, 204, 203),
	...COL_TRI(217, 200, 202),
	...COL_TRI(218, 219, 220),
	...COL_TRI(221, 217, 222),
	...COL_TRI(223, 217, 221),
	...COL_TRI(220, 219, 223),
	...COL_TRI(224, 221, 225),
	...COL_TRI(201, 226, 223),
	...COL_TRI(219, 222, 202),
	...COL_TRI(227, 212, 228),
	...COL_TRI(200, 217, 223),
	...COL_TRI(215, 214, 226),
	...COL_TRI(229, 206, 205),
	...COL_TRI(204, 216, 205),
	...COL_TRI(206, 229, 203),
	...COL_TRI(230, 231, 220),
	...COL_TRI(232, 222, 219),
	...COL_TRI(225, 222, 232),
	...COL_TRI(209, 211, 233),
	...COL_TRI(234, 227, 208),
	...COL_TRI(227, 234, 233),
	...COL_TRI(203, 202, 200),
	...COL_TRI(205, 207, 211),
	...COL_TRI(208, 210, 235),
	...COL_TRI(211, 212, 227),
	...COL_TRI(212, 213, 228),
	...COL_TRI(213, 208, 228),
	...COL_TRI(213, 215, 209),
	...COL_TRI(205, 209, 215),
	...COL_TRI(213, 206, 214),
	...COL_TRI(216, 203, 229),
	...COL_TRI(217, 202, 222),
	...COL_TRI(218, 220, 231),
	...COL_TRI(221, 222, 225),
	...COL_TRI(223, 221, 224),
	...COL_TRI(220, 223, 224),
	...COL_TRI(224, 225, 220),
	...COL_TRI(201, 223, 219),
	...COL_TRI(219, 202, 201),
	...COL_TRI(227, 228, 208),
	...COL_TRI(200, 223, 226),
	...COL_TRI(215, 226, 201),
	...COL_TRI(229, 205, 216),
	...COL_TRI(204, 205, 202),
	...COL_TRI(206, 203, 200),
	...COL_TRI(230, 220, 225),
	...COL_TRI(232, 219, 218),
	...COL_TRI(225, 232, 230),
	...COL_TRI(209, 233, 210),
	...COL_TRI(234, 208, 235),
	...COL_TRI(227, 233, 211),
	...COL_TRI_INIT(SURFACE_VERY_SLIPPERY, 128),
	...COL_TRI(22, 236, 23),
	...COL_TRI(23, 237, 20),
	...COL_TRI(238, 28, 239),
	...COL_TRI(21, 240, 22),
	...COL_TRI(27, 241, 21),
	...COL_TRI(27, 242, 243),
	...COL_TRI(20, 238, 25),
	...COL_TRI(26, 239, 242),
	...COL_TRI(237, 29, 238),
	...COL_TRI(239, 33, 242),
	...COL_TRI(236, 30, 237),
	...COL_TRI(242, 32, 243),
	...COL_TRI(236, 35, 34),
	...COL_TRI(241, 35, 240),
	...COL_TRI(243, 31, 241),
	...COL_TRI(14, 17, 14),
	...COL_TRI(12, 12, 5),
	...COL_TRI(11, 11, 5),
	...COL_TRI(12, 5, 5),
	...COL_TRI(63, 64, 64),
	...COL_TRI(66, 61, 61),
	...COL_TRI(244, 245, 246),
	...COL_TRI(245, 247, 248),
	...COL_TRI(156, 249, 250),
	...COL_TRI(251, 152, 252),
	...COL_TRI(22, 240, 236),
	...COL_TRI(23, 236, 237),
	...COL_TRI(238, 29, 28),
	...COL_TRI(1, 1, 0),
	...COL_TRI(21, 241, 240),
	...COL_TRI(27, 243, 241),
	...COL_TRI(26, 26, 242),
	...COL_TRI(243, 27, 27),
	...COL_TRI(27, 26, 242),
	...COL_TRI(20, 237, 238),
	...COL_TRI(26, 24, 239),
	...COL_TRI(237, 30, 29),
	...COL_TRI(239, 28, 33),
	...COL_TRI(236, 34, 30),
	...COL_TRI(242, 33, 32),
	...COL_TRI(236, 240, 35),
	...COL_TRI(241, 31, 35),
	...COL_TRI(10, 11, 11),
	...COL_TRI(243, 32, 31),
	...COL_TRI(15, 3, 3),
	...COL_TRI(12, 11, 12),
	...COL_TRI(11, 12, 11),
	...COL_TRI(28, 29, 29),
	...COL_TRI(34, 35, 35),
	...COL_TRI(245, 244, 247),
	...COL_TRI(244, 246, 253),
	...COL_TRI(156, 158, 249),
	...COL_TRI(251, 153, 152),
	...COL_TRI(95, 96, 254),
	...COL_TRI(96, 93, 255),
	...COL_TRI(256, 257, 101),
	...COL_TRI(94, 95, 258),
	...COL_TRI(100, 94, 259),
	...COL_TRI(100, 260, 261),
	...COL_TRI(93, 98, 256),
	...COL_TRI(99, 261, 257),
	...COL_TRI(255, 256, 103),
	...COL_TRI(257, 261, 105),
	...COL_TRI(254, 255, 102),
	...COL_TRI(261, 260, 106),
	...COL_TRI(254, 107, 108),
	...COL_TRI(259, 258, 108),
	...COL_TRI(260, 259, 104),
	...COL_TRI(87, 87, 90),
	...COL_TRI(85, 78, 85),
	...COL_TRI(84, 78, 84),
	...COL_TRI(85, 78, 78),
	...COL_TRI(135, 137, 137),
	...COL_TRI(139, 134, 134),
	...COL_TRI(251, 262, 263),
	...COL_TRI(70, 264, 265),
	...COL_TRI(266, 267, 147),
	...COL_TRI(95, 254, 258),
	...COL_TRI(96, 255, 254),
	...COL_TRI(256, 101, 103),
	...COL_TRI(75, 73, 75),
	...COL_TRI(94, 258, 259),
	...COL_TRI(100, 259, 260),
	...COL_TRI(99, 261, 99),
	...COL_TRI(260, 100, 100),
	...COL_TRI(100, 261, 99),
	...COL_TRI(93, 256, 255),
	...COL_TRI(99, 257, 97),
	...COL_TRI(255, 103, 102),
	...COL_TRI(257, 105, 101),
	...COL_TRI(254, 102, 107),
	...COL_TRI(261, 106, 105),
	...COL_TRI(254, 108, 258),
	...COL_TRI(259, 108, 104),
	...COL_TRI(83, 84, 84),
	...COL_TRI(260, 104, 106),
	...COL_TRI(88, 76, 76),
	...COL_TRI(85, 85, 84),
	...COL_TRI(84, 84, 85),
	...COL_TRI(101, 103, 103),
	...COL_TRI(107, 108, 108),
	...COL_TRI(268, 269, 270),
	...COL_TRI(271, 249, 272),
	...COL_TRI(70, 265, 143),
	...COL_TRI(266, 147, 148),
	...COL_TRI(273, 146, 145),
	...COL_TRI(270, 155, 157),
	...COL_TRI(274, 275, 276),
	...COL_TRI(277, 278, 275),
	...COL_TRI(279, 247, 278),
	...COL_TRI(251, 266, 262),
	...COL_TRI(268, 273, 269),
	...COL_TRI(271, 265, 249),
	...COL_TRI(273, 280, 146),
	...COL_TRI(270, 281, 155),
	...COL_TRI(274, 277, 275),
	...COL_TRI(277, 279, 278),
	...COL_TRI(279, 248, 247),
	...COL_TRI(282, 283, 284),
	...COL_TRI(282, 285, 283),
	...COL_TRI(286, 287, 282),
	...COL_TRI(288, 285, 289),
	...COL_TRI(290, 291, 283),
	...COL_TRI(292, 284, 293),
	...COL_TRI(284, 291, 293),
	...COL_TRI(282, 289, 285),
	...COL_TRI(284, 283, 291),
	...COL_TRI(282, 287, 289),
	...COL_TRI_INIT(SURFACE_DEFAULT, 260),
	...COL_TRI(294, 295, 296),
	...COL_TRI(25, 297, 68),
	...COL_TRI(298, 299, 294),
	...COL_TRI(299, 44, 295),
	...COL_TRI(300, 38, 299),
	...COL_TRI(296, 301, 302),
	...COL_TRI(24, 303, 239),
	...COL_TRI(304, 297, 305),
	...COL_TRI(302, 303, 69),
	...COL_TRI(306, 305, 307),
	...COL_TRI(298, 307, 300),
	...COL_TRI(307, 36, 300),
	...COL_TRI(295, 46, 301),
	...COL_TRI(303, 51, 297),
	...COL_TRI(297, 39, 305),
	...COL_TRI(301, 49, 303),
	...COL_TRI(307, 39, 41),
	...COL_TRI(239, 297, 238),
	...COL_TRI(308, 279, 309),
	...COL_TRI(239, 303, 297),
	...COL_TRI(247, 270, 310),
	...COL_TRI(278, 268, 157),
	...COL_TRI(311, 288, 312),
	...COL_TRI(157, 268, 270),
	...COL_TRI(151, 247, 313),
	...COL_TRI(278, 157, 314),
	...COL_TRI(247, 315, 278),
	...COL_TRI(316, 317, 318),
	...COL_TRI(319, 320, 321),
	...COL_TRI(322, 323, 324),
	...COL_TRI(325, 326, 322),
	...COL_TRI(317, 250, 318),
	...COL_TRI(316, 158, 320),
	...COL_TRI(327, 249, 316),
	...COL_TRI(250, 328, 318),
	...COL_TRI(276, 329, 328),
	...COL_TRI(330, 275, 278),
	...COL_TRI(157, 317, 319),
	...COL_TRI(252, 322, 324),
	...COL_TRI(153, 323, 326),
	...COL_TRI(251, 331, 323),
	...COL_TRI(253, 324, 332),
	...COL_TRI(333, 253, 332),
	...COL_TRI(334, 244, 333),
	...COL_TRI(322, 151, 325),
	...COL_TRI(294, 299, 295),
	...COL_TRI(25, 238, 297),
	...COL_TRI(298, 300, 299),
	...COL_TRI(299, 38, 44),
	...COL_TRI(300, 36, 38),
	...COL_TRI(296, 295, 301),
	...COL_TRI(24, 69, 303),
	...COL_TRI(304, 68, 297),
	...COL_TRI(302, 301, 303),
	...COL_TRI(306, 304, 305),
	...COL_TRI(298, 306, 307),
	...COL_TRI(307, 41, 36),
	...COL_TRI(295, 44, 46),
	...COL_TRI(303, 49, 51),
	...COL_TRI(297, 51, 39),
	...COL_TRI(301, 46, 49),
	...COL_TRI(307, 305, 39),
	...COL_TRI(311, 312, 145),
	...COL_TRI(247, 151, 270),
	...COL_TRI(278, 315, 268),
	...COL_TRI(159, 154, 161),
	...COL_TRI(288, 335, 149),
	...COL_TRI(247, 310, 315),
	...COL_TRI(316, 320, 317),
	...COL_TRI(319, 317, 320),
	...COL_TRI(322, 326, 323),
	...COL_TRI(325, 336, 326),
	...COL_TRI(317, 156, 250),
	...COL_TRI(316, 249, 158),
	...COL_TRI(327, 272, 249),
	...COL_TRI(250, 276, 328),
	...COL_TRI(276, 275, 329),
	...COL_TRI(330, 329, 275),
	...COL_TRI(157, 156, 317),
	...COL_TRI(252, 152, 322),
	...COL_TRI(153, 251, 323),
	...COL_TRI(253, 252, 324),
	...COL_TRI(333, 244, 253),
	...COL_TRI(334, 247, 244),
	...COL_TRI(322, 152, 151),
	...COL_TRI(337, 338, 339),
	...COL_TRI(98, 142, 340),
	...COL_TRI(341, 337, 342),
	...COL_TRI(342, 339, 117),
	...COL_TRI(343, 342, 110),
	...COL_TRI(338, 344, 345),
	...COL_TRI(97, 257, 346),
	...COL_TRI(347, 348, 340),
	...COL_TRI(344, 141, 346),
	...COL_TRI(349, 350, 348),
	...COL_TRI(341, 343, 350),
	...COL_TRI(350, 343, 109),
	...COL_TRI(339, 345, 118),
	...COL_TRI(346, 340, 124),
	...COL_TRI(340, 348, 112),
	...COL_TRI(345, 346, 122),
	...COL_TRI(350, 113, 112),
	...COL_TRI(257, 256, 340),
	...COL_TRI(257, 340, 346),
	...COL_TRI(144, 351, 286),
	...COL_TRI(311, 335, 288),
	...COL_TRI(248, 310, 269),
	...COL_TRI(279, 72, 273),
	...COL_TRI(145, 312, 248),
	...COL_TRI(279, 308, 72),
	...COL_TRI(248, 279, 315),
	...COL_TRI(352, 353, 354),
	...COL_TRI(355, 351, 356),
	...COL_TRI(357, 358, 359),
	...COL_TRI(311, 357, 360),
	...COL_TRI(354, 353, 264),
	...COL_TRI(352, 356, 143),
	...COL_TRI(361, 352, 265),
	...COL_TRI(264, 353, 362),
	...COL_TRI(274, 362, 363),
	...COL_TRI(309, 279, 277),
	...COL_TRI(72, 355, 354),
	...COL_TRI(267, 358, 357),
	...COL_TRI(148, 360, 359),
	...COL_TRI(364, 331, 365),
	...COL_TRI(266, 359, 365),
	...COL_TRI(246, 364, 358),
	...COL_TRI(364, 333, 332),
	...COL_TRI(262, 331, 263),
	...COL_TRI(366, 364, 246),
	...COL_TRI(367, 366, 245),
	...COL_TRI(318, 327, 316),
	...COL_TRI(357, 311, 145),
	...COL_TRI(337, 339, 342),
	...COL_TRI(98, 340, 256),
	...COL_TRI(341, 342, 343),
	...COL_TRI(342, 117, 110),
	...COL_TRI(343, 110, 109),
	...COL_TRI(338, 345, 339),
	...COL_TRI(97, 346, 141),
	...COL_TRI(347, 340, 142),
	...COL_TRI(344, 346, 345),
	...COL_TRI(349, 348, 347),
	...COL_TRI(341, 350, 349),
	...COL_TRI(350, 109, 113),
	...COL_TRI(339, 118, 117),
	...COL_TRI(346, 124, 122),
	...COL_TRI(340, 112, 124),
	...COL_TRI(345, 122, 118),
	...COL_TRI(350, 112, 348),
	...COL_TRI(248, 269, 145),
	...COL_TRI(279, 273, 315),
	...COL_TRI(163, 160, 149),
	...COL_TRI(72, 308, 355),
	...COL_TRI(248, 315, 310),
	...COL_TRI(352, 354, 356),
	...COL_TRI(355, 356, 354),
	...COL_TRI(357, 359, 360),
	...COL_TRI(329, 362, 328),
	...COL_TRI(290, 286, 292),
	...COL_TRI(311, 360, 335),
	...COL_TRI(354, 264, 70),
	...COL_TRI(352, 143, 265),
	...COL_TRI(361, 265, 271),
	...COL_TRI(264, 362, 274),
	...COL_TRI(274, 363, 277),
	...COL_TRI(309, 277, 363),
	...COL_TRI(72, 354, 70),
	...COL_TRI(267, 357, 147),
	...COL_TRI(148, 359, 266),
	...COL_TRI(361, 353, 352),
	...COL_TRI(327, 362, 361),
	...COL_TRI(246, 358, 267),
	...COL_TRI(327, 271, 272),
	...COL_TRI(266, 365, 262),
	...COL_TRI(366, 246, 245),
	...COL_TRI(367, 245, 248),
	...COL_TRI(251, 263, 331),
	...COL_TRI(357, 145, 147),
	...COL_TRI(309, 368, 308),
	...COL_TRI(145, 269, 273),
	...COL_TRI(146, 280, 71),
	...COL_TRI(278, 314, 330),
	...COL_TRI(72, 280, 273),
	...COL_TRI(155, 281, 150),
	...COL_TRI(151, 281, 270),
	...COL_TRI(286, 355, 308),
	...COL_TRI(290, 154, 336),
	...COL_TRI(159, 292, 321),
	...COL_TRI(157, 319, 314),
	...COL_TRI(319, 292, 314),
	...COL_TRI(151, 313, 325),
	...COL_TRI(290, 325, 313),
	...COL_TRI(330, 314, 368),
	...COL_TRI(314, 369, 368),
	...COL_TRI(308, 368, 369),
	...COL_TRI(247, 334, 313),
	...COL_TRI(248, 312, 367),
	...COL_TRI(367, 312, 370),
	...COL_TRI(334, 370, 313),
	...COL_TRI(312, 371, 370),
	...COL_TRI(313, 370, 371),
	...COL_TRI(358, 365, 359),
	...COL_TRI(331, 324, 323),
	...COL_TRI(366, 367, 370),
	...COL_TRI(320, 158, 321),
	...COL_TRI(158, 159, 321),
	...COL_TRI(326, 336, 153),
	...COL_TRI(153, 336, 154),
	...COL_TRI(360, 148, 335),
	...COL_TRI(356, 351, 143),
	...COL_TRI(143, 351, 144),
	...COL_TRI(148, 149, 335),
	...COL_TRI(364, 332, 331),
	...COL_TRI(364, 366, 333),
	...COL_TRI(262, 365, 331),
	...COL_TRI(318, 328, 327),
	...COL_TRI(329, 363, 362),
	...COL_TRI(290, 288, 286),
	...COL_TRI(361, 362, 353),
	...COL_TRI(327, 328, 362),
	...COL_TRI(327, 361, 271),
	...COL_TRI(72, 71, 280),
	...COL_TRI(151, 150, 281),
	...COL_TRI(286, 351, 355),
	...COL_TRI(319, 321, 292),
	...COL_TRI(290, 336, 325),
	...COL_TRI(358, 364, 365),
	...COL_TRI(331, 332, 324),
	...COL_TRI(334, 333, 370),
	...COL_TRI(333, 366, 370),
	...COL_TRI(368, 309, 363),
	...COL_TRI(363, 329, 368),
	...COL_TRI(329, 330, 368),
	...COL_TRI(160, 162, 372),
	...COL_TRI(373, 163, 374),
	...COL_TRI(292, 373, 284),
	...COL_TRI(283, 372, 290),
	...COL_TRI(372, 154, 290),
	...COL_TRI(373, 292, 161),
	...COL_TRI(292, 159, 161),
	...COL_TRI(154, 372, 162),
	...COL_TRI(154, 162, 161),
	...COL_TRI(288, 149, 375),
	...COL_TRI(288, 375, 285),
	...COL_TRI(282, 374, 286),
	...COL_TRI(144, 286, 163),
	...COL_TRI(286, 374, 163),
	...COL_TRI(160, 375, 149),
	...COL_TRI(144, 163, 149),
	...COL_TRI(372, 283, 285),
	...COL_TRI(285, 375, 372),
	...COL_TRI(375, 160, 372),
	...COL_TRI(374, 282, 284),
	...COL_TRI(373, 161, 163),
	...COL_TRI(374, 284, 373),
	...COL_TRI(288, 287, 286),
	...COL_TRI(292, 291, 290),
	...COL_TRI(288, 289, 287),
	...COL_TRI(292, 293, 291),
	...COL_TRI_INIT(SURFACE_DEATH_PLANE, 2),
	...COL_TRI(376, 377, 378),
	...COL_TRI(376, 379, 377),
	...COL_TRI_STOP(),
	...COL_END()
]