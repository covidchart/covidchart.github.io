'use strict';

window.chartColors = {
Algeria	:'#50C878',Argentina	:'#FFBF00',Armenia	:'#9966CC',Australia	:'#FBCEB1',Austria	:'#7FFFD4',Azerbaijan	:'#007FFF',Bahrain	:'#89CFF0',Bangladesh	:'#F5F5DC',Belarus	:'#000000',Belgium	:'#0000FF',BosniaandHerzegovina	:'#0095B6',Brazil	:'#8A2BE2',Canada	:'#DE5D83',Chile	:'#CD7F32',China	:'#964B00',Colombia	:'#800020',Croatia	:'#702963',CzechRepublic	:'#960018',Denmark	:'#DE3163',DominicanRepublic	:'#007BA7',Ecuador	:'#F7E7CE',Egypt	:'#7FFF00',Estonia	:'#7B3F00',Finland	:'#0047AB',France	:'#6F4E37',Germany	:'#B87333',Greece	:'#FF7F50',HongKong	:'#DC143C',Hungary	:'#00FFFF',Iceland	:'#EDC9Af',India	:'#0F52BA',Indonesia	:'#7DF9FF',Iran	:'#00FF7F',Iraq	:'#FFD700',Ireland	:'#808080',Israel	:'#00FF00',Italy	:'#A7FC00',Japan	:'#4B0082',Kazakhstan	:'#FFFFF0',Kuwait	:'#00A86B',Lithuania	:'#29AB87',Luxembourg	:'#B57EDC',Malaysia	:'#FFF700',Mexico	:'#C8A2C8',Moldova	:'#BFFF00',Morocco	:'#FF00FF',Netherlands	:'#FF00AF',NewZealand	:'#800000',NorthMacedonia	:'#E0B0FF',Norway	:'#E52B50',Oman	:'#CC7722',Pakistan	:'#808000',Panama	:'#FF6600',Peru	:'#FF4500',Philippines	:'#DA70D6',PLACES	:'#FFE5B4',Poland	:'#D1E231',Portugal	:'#CCCCFF',Qatar	:'#1C39BB',Romania	:'#FD6C9E',Russia	:'#8E4585',SaudiArabia	:'#003153',Serbia	:'#CC8899',Singapore	:'#BFFF00',Slovenia	:'#E30B5C',SouthAfrica	:'#FF0000',SouthKorea	:'#C71585',Spain	:'#FF007F',Sweden	:'#E0115F',Switzerland	:'#FA8072',Thailand	:'#92000A',Turkey	:'#FF2400',Ukraine	:'#FF2400',UnitedArabEmirates	:'#C0C0C0',UnitedKingdom	:'#708090',Uzbekistan	:'#00FF7F', UnitedStates:'#800080'
};


var brandPrimary = '#33b35a';
var color = Chart.helpers.color;
	
var India = [1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 6, 29, 30, 31, 34, 43, 44, 60, 73, 74, 82, 107, 114, 137, 137, 151, 195, 195, 283, 415, 434, 562, 649, 724, 724, 979, 1071, 1071, 1636, 1636, 1965, 2301, 3374, 4067, 4067, 5194, 5734, 6412, 7447, 8356, 9152, 10363, 11439, 12380, 13387,14378,15712,17265,18601,19984,21393];
var UnitedStates = [1, 1, 2, 2, 5, 5, 5, 5, 6, 7, 8, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 14, 15, 15, 15, 15, 15, 15, 15, 15, 35, 35, 35, 53, 53, 59, 59, 62, 62, 62, 64, 108, 129, 148, 213, 213, 213, 472, 696, 987, 1264, 1678, 1678, 1678, 3503, 3536, 7087, 10442, 15219, 15219, 31573, 42164, 51914, 63570, 68334, 85228, 103321, 122653, 140640, 163199, 187302, 213600, 241703, 273808, 307318, 333811, 363321, 395030, 425889, 461275, 492881, 524514, 553822, 578268, 604070, 632781,665330,695353,723605,751273,776907,800926];
var Spain = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 12, 25, 32, 45, 45, 114, 151, 198, 257, 374, 430, 589, 1024, 1639, 2140, 2965, 4231, 5753, 7753, 9191, 11178, 13716, 17147, 19980, 24926, 28572, 33089, 39673, 47610, 56188, 64059, 72248, 78797, 85195, 94417, 102136, 110238, 117710, 124736, 130759, 135032, 140510, 146690, 152446, 157022, 161852, 166019, 169496, 172541, 177633, 182816,188068,191726,195944,200210,204178,208389];
var Italy = [2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9, 76, 124, 229, 322, 400, 650, 888, 1128, 1689, 2036, 2502, 3089, 3858, 4636, 5883, 7375, 9172, 10149, 12462, 15113, 17660, 21157, 24747, 27980, 31506, 35713, 41035, 47021, 53578, 59138, 63927, 69176, 74386, 80539, 86498, 92472, 97689, 101739, 105792, 110574, 115242, 119827, 124632, 128948, 132547, 135586, 139422, 143626, 147577, 152271, 156363, 159516, 162488, 165155, 168941,172434,175925,178972,181228,183957,187327];
var France = [3, 3, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 18, 38, 57, 100, 100, 191, 212, 420, 613, 706, 1116, 1402, 1774, 2269, 2860, 3640, 4469, 5380, 6573, 7652, 9043, 10877, 12475, 14296, 15821, 19615, 22025, 24920, 28786, 32542, 37145, 39642, 43977, 51477, 56261, 58327, 63536, 67757, 69607, 73488, 77226, 81095, 85351, 89683, 92787, 94382, 97050, 102533, 105155, 107778,108163,110721,111463,113513,116151,117961];
var Germany = [1, 4, 4, 5, 7, 8, 10, 12, 12, 12, 13, 14, 14, 14, 14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 21, 26, 57, 57, 129, 157, 196, 262, 534, 639, 795, 1112, 1139, 1296, 1567, 2369, 3062, 3795, 4838, 6012, 7156, 8198, 10999, 18323, 21463, 24774, 29212, 31554, 36508, 42288, 48582, 52547, 57298, 61913, 67366, 73522, 79696, 85778, 91714, 95391, 99225, 103228, 108202, 113525, 117658, 120479, 123016, 125098, 127584, 130450, 133830,137439,139897,141672,143457,145694,148046];
var UnitedKingdom = [ 2, 3, 3, 3, 4, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 16, 20, 23, 36, 39, 51, 89, 118, 167, 210, 277, 323, 373, 460, 594, 802, 1144, 1395, 1547, 1954, 2630, 3277, 3983, 5018, 5687, 6654, 8081, 9533, 11662, 14547, 17093, 19526, 22145, 25154, 29478, 33722, 38172, 41907, 47810, 51612, 55246, 60737, 65081, 70276, 78995, 84283, 88625, 93877, 98480, 103097,108696,114221,120071,124747,129048,133499];
var China = [ 278, 310, 574, 835, 1297, 1985, 2761, 4537, 5997, 7736, 9720, 11821, 14411, 17238, 20471, 24363, 28060, 31211, 34598, 37251, 40235, 42708, 44730, 46550, 48548, 50054, 51174, 70635, 72528, 74280, 74675, 75569, 76392, 77042, 77262, 77780, 78191, 78630, 78961, 79394, 79968, 80174, 80304, 80422, 80565, 80711, 80813, 80859, 80904, 80924, 80955, 80981, 80991, 81021, 81048, 81077, 81116, 81116, 81174, 81300, 81416, 81498, 81601, 81747, 81848, 81961, 82078, 82213, 82341, 82447, 82545, 82631, 82724, 82802, 82875, 82930, 83005, 83071, 83157, 83249, 83305, 83369, 83482, 83597, 83696, 83745, 83797, 84149,84180,84201,84237,84250,84287,84302];
var Iran = [2, 5, 18, 28, 43, 61, 95, 141, 245, 388, 593, 978, 1501, 2336, 2922, 3513, 4747, 5823, 6566, 7161, 8042, 9000, 1075, 11364, 12729, 14991, 14991, 16169, 17361, 18407, 19644, 20610, 21638, 23049, 24811, 27017, 29406, 32332, 35408, 38309, 41495, 44606, 47593, 50468, 53183, 55743, 58226, 60500, 62589, 64586, 66220, 68192, 70029, 71686, 73303, 74877, 76389, 77995,79494,80868,82211,83505,84802,85996];
var Turkey = [1, 1, 5, 5, 5, 47, 47, 191, 191, 670, 947, 1236, 1529, 1872, 2433, 3629, 5698, 7402, 9271, 10827, 13531, 15679, 18135, 20921, 23934, 27069, 30217, 34109, 38226, 42282, 47029, 52167, 56956, 61049, 65111, 69392, 74193,78546,82329,86306,90980,95591,98674];
var Belgium = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 23, 50, 109, 169, 200, 239, 267, 314, 314, 599, 689, 1085, 1085, 1486, 1486, 1795, 2257, 2815, 3401, 3743, 4269, 4937, 6235, 7284, 9134, 10836, 11899, 12775, 13964, 15348, 16770, 18431, 19691, 20814, 22194, 23403, 24983, 26667, 28018, 29647, 30589, 31119, 33573, 34809,36138,37183,38496,39983,40956,41889];
var Netherlands = [1, 2, 7, 13, 18, 28, 38, 82, 128, 188, 265, 321, 382, 503, 614, 804, 959, 1135, 1413, 1705, 2051, 2460, 2994, 3631, 4204, 4749, 5560, 6412, 7431, 8603, 9762, 10866, 11750, 12595, 13614, 14697, 15723, 16627, 17851, 18803, 19580, 20549, 21762, 23097, 24413, 25587, 26551, 27419, 28153, 29214,30449,31589,32655,33405,34134,34842];
var Brazil = [1, 1, 1, 2, 2, 2, 2, 3, 7, 13, 19, 25, 25, 34, 52, 77, 98, 121, 200, 234, 234, 291, 428, 621, 904, 904, 1546, 2201, 2433, 2433, 2915, 3417, 3904, 4256, 4579, 5717, 6836, 7910, 9056, 10278, 11130, 12056, 13717, 15927, 17857, 19638, 20727, 22169, 23430, 25262, 28320,30425,33682,36599,38654,40581,43079];
var Canada = [1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 10, 10, 11, 11, 14, 19, 19, 27, 30, 30, 45, 51, 57, 62, 77, 93, 93, 138, 176, 244, 304, 424, 424, 569, 736, 846, 1048, 1384, 1432, 1739, 3409, 3555, 4018, 4757, 5655, 6317, 7695, 9005, 10114, 11732, 12938, 13904, 15806, 17049, 18433, 19759, 21226, 22544, 23702, 24786, 26146, 27540, 28884,30659,32400,33909,35383,37374,38923];
var Russia = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 7, 7, 7, 7, 7, 20, 34, 34, 34, 63, 93, 93, 147, 199, 253, 306, 438, 438, 658, 840, 1036, 1264, 1534, 1534, 1837, 2337, 2777, 3548, 4149, 4731, 5389, 6343, 7497, 10131, 11917, 13584, 15770, 18328, 21102, 24490, 27938, 32008,36793,42853,42853,52763,57999,62773];
var Switzerland = [1, 1, 6, 10, 18, 24, 30, 37, 56, 86, 209, 264, 332, 332, 491, 645, 858, 1125, 1359, 2200, 2200, 2650, 3010, 3863, 4840, 6077, 6971, 8015, 8789, 9714, 10714, 12104, 13152, 14274, 15412, 16108, 17070, 18844, 19706, 20489, 21065, 21574, 22164, 22710, 23495, 24228, 24820, 25220, 25499, 25753, 26336, 26651,26997,27322,27658,27862,27981,28186];
var Portugal = [2, 2, 7, 9, 13, 21, 30, 30, 41, 41, 41, 112, 112, 245, 331, 448, 642, 785, 1020, 1280, 1600, 2060, 2362, 2995, 3544, 4268, 5170, 5962, 6408, 7443, 8251, 9034, 9886, 10524, 11278, 11730, 12442, 13141, 13956, 15472, 15987, 16585, 16934, 17448, 18091, 18841,19022,19685,20206,20863,21379,21982];
var Austria = [2, 2, 4, 5, 10, 10, 18, 24, 37, 47, 66, 104, 112, 131, 182, 302, 361, 504, 800, 959, 1132, 1332, 1646, 1843, 2649, 3024, 3631, 4486, 5282, 5888, 7029, 7697, 8291, 8813, 9618, 10182, 10711, 11129, 11525, 11766, 11983, 12297, 12640, 12969, 13248, 13560, 13807, 13937, 14043, 14234, 14370, 14448,14603,14662,14710,14783,14833,14924];
var Israel = [1, 1, 1, 2, 2, 2, 3, 5, 7, 7, 10, 12, 15, 15, 19, 25, 39, 39, 75, 75, 75, 100, 178, 200, 250, 304, 427, 529, 712, 883, 1071, 1238, 2170, 2369, 3035, 3460, 3865, 4247, 4831, 5129, 5591, 6211, 7030, 7589, 8018, 8611, 9404, 9404, 9755, 10095, 10525, 10878, 11235, 11868, 12200, 12591,12855,13107,13362,13883,13942,14498];
var Ireland = [1, 1, 1, 2, 2, 14, 18, 19, 21, 24, 34, 43, 70, 90, 129, 169, 223, 292, 292, 557, 683, 785, 906, 1125, 1329, 1564, 1819, 2121, 2415, 2615, 2910, 3235, 3447, 3849, 4273, 4604, 5111, 5364, 5709, 6224, 7393, 8089, 8928, 9655, 10647, 11479, 12547, 13271,13980,14758,15251,15652,16040,16671];
var Sweden = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 7, 12, 13, 14, 15, 24, 35, 61, 137, 161, 203, 248, 326, 461, 620, 775, 924, 992, 1059, 1167, 1279, 1423, 1623, 1746, 1906, 2016, 2272, 2510, 2806, 3046, 3447, 3700, 4028, 4435, 4947, 5466, 6078, 6443, 6830, 7206, 7693, 8419, 9141, 9685, 10151, 10483, 10948, 11445, 11927, 12540,13216,13822,14385,14777,15322,16004];
var Peru = [1, 6, 6, 9, 11, 17, 22, 28, 43, 71, 86, 86, 145, 234, 234, 318, 318, 395, 416, 480, 580, 580, 635, 671, 852, 1065, 1323, 1323, 1414, 1595, 1746, 2281, 2561, 2954, 4342, 5256, 5897, 6848, 7519, 7519, 10303, 11475,13489,13489,14420,15628,16325,17837];
var SouthKorea = [1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 11, 12, 15, 15, 16, 18, 23, 24, 24, 27, 27, 28, 28, 28, 28, 28, 29, 30, 31, 51, 104, 204, 346, 602, 763, 977, 1261, 1766, 2337, 3150, 3736, 4212, 4812, 5328, 5766, 6284, 6767, 7134, 7382, 7513, 7755, 7869, 7979, 8086, 8162, 8236, 8320, 8320, 8413, 8652, 8799, 8897, 8961, 9037, 9137, 9241, 9332, 9478, 9583, 9661, 9786, 9887, 9976, 10062, 10156, 10237, 10284, 10331, 10384, 10423, 10450, 10480, 10512, 10537, 10564, 10591, 10613, 10635,10653,10661,10674,10683,10694,10702];
var Chile = [1, 1, 1, 5, 5, 10, 13, 17, 23, 33, 43, 61, 75, 156, 156, 238, 342, 434, 434, 632, 746, 922, 1142, 1306, 1610, 1909, 1909, 2449, 2738, 3031, 3404, 3737, 4161, 4471, 4815, 5116, 5546, 5972, 6501, 6927, 7213, 7525, 7917, 8273, 8807,9252,9730,10888,10507,10832,11296];
var Japan = [ 1, 1, 1, 1, 3, 3, 4, 6, 7, 11, 14, 17, 20, 20, 20, 33, 25, 25, 25, 26, 26, 26, 28, 29, 33, 41, 53, 59, 65, 73, 85, 93, 105, 132, 144, 157, 164, 186, 210, 230, 239, 254, 268, 284, 317, 349, 408, 455, 488, 514, 568, 620, 675, 716, 780, 814, 829, 829, 873, 950, 996, 1046, 1089, 1128, 1193, 1291, 1387, 1499, 1693, 1866, 1953, 2178, 2384, 2617, 2920, 3271, 3654, 3906, 4257, 4768, 5347, 6005, 6748, 7255, 7645, 8100, 8582, 9167,9795,10361,10751,11118,11496,11919];
var Ecuador = [1, 1, 6, 7, 7, 13, 14, 14, 15, 15, 15, 17, 17, 23, 23, 37, 58, 58, 155, 199, 367, 506, 532, 790, 1049, 1211, 1211, 1595, 1823, 1835, 1962, 2240, 2372, 3163, 3163, 3465, 3465, 3747, 3747, 4450, 4965, 7161, 7257, 7466, 7529, 7603, 7858, 8225,8450,9022,9468,10128,10398,10850];
var Poland = [1, 1, 1, 5, 6, 11, 16, 22, 44, 49, 64, 111, 150, 150, 246, 287, 325, 425, 536, 634, 749, 901, 1051, 1221, 1389, 1638, 1862, 2055, 2311, 2554, 2946, 3383, 3627, 4102, 4413, 4848, 5205, 5575, 5955, 6356, 6674, 6934, 7202, 7582, 7918,8379,8742,9287,9593,9856,10169];
var Romania = [1, 1, 3, 3, 3, 3, 4, 4, 6, 7, 13, 15, 15, 25, 48, 48, 64, 123, 158, 158, 184, 246, 260, 308, 367, 433, 576, 762, 906, 1029, 1292, 1452, 1760, 1952, 2245, 2460, 2738, 3183, 3613, 3864, 4057, 4417, 4761, 5202, 5467, 5990, 6300, 6633, 6879, 7216, 7707,8067,8418,8746,8936,9242,9710];
var Denmark = [1, 1, 2, 3, 4, 5, 8, 10, 18, 23, 31, 36, 90, 262, 615, 674, 801, 827, 898, 960, 977, 1044, 1132, 1255, 1326, 1395, 1460, 1591, 1724, 1877, 2046, 2201, 2395, 2577, 2860, 3107, 3386, 3757, 4077, 4369, 4681, 5071, 5402, 5635, 5819, 5996, 6174, 6318, 6511, 6681, 6879,7073,7242,7384,7515,7695,7912];
var Pakistan = [2, 2, 2, 4, 4, 5, 5, 5, 5, 5, 5, 6, 16, 16, 19, 20, 21, 28, 52, 187, 187, 241, 302, 461, 495, 784, 887, 991, 1057, 1057, 1235, 1526, 1625, 1865, 2039, 2291, 2450, 2450, 2880, 3277, 3864, 4072, 4322, 4601, 4788, 5038, 5374, 5716, 5988, 6505, 7025,7481,7993,8418,9216,9749,10513];
var Norway = [1, 4, 6, 15, 19, 25, 33, 56, 86, 113, 147, 169, 192, 277, 489, 489, 750, 907, 1077, 1169, 1308, 1423, 1552, 1742, 1926, 2132, 2371, 2566, 2916, 3156, 3581, 3845, 4102, 4226, 4447, 4665, 4935, 5208, 5510, 5640, 5755, 5863, 6010, 6160, 6244, 6320, 6415, 6488, 6566, 6677, 6791,6791,6984,7068,7113,7166,7250];
var Australia = [3, 4, 4, 5, 7, 7, 9, 12, 12, 12, 12, 13, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 21, 22, 22, 22, 23, 23, 23, 24, 25, 27, 33, 43, 57, 57, 62, 74, 77, 92, 112, 122, 140, 197, 249, 298, 375, 414, 510, 709, 873, 1081, 1396, 1709, 2252, 2799, 2985, 3635, 3966, 3966, 4359, 4707, 4976, 5224, 5454, 5635, 5744, 5844, 5956, 6052, 6152, 6238, 6289, 6322, 6366, 6416, 6458, 6468,6533,6586,6612,6625,6647,6654];
var SaudiArabia = [1, 1, 2, 8, 8, 7, 15, 15, 20, 21, 21, 62, 103, 103, 133, 171, 238, 238, 274, 392, 511, 562, 767, 900, 1012, 1104, 1203, 1299, 1453, 1563, 1720, 1885, 2039, 2370, 2463, 2752, 2795, 2932, 3287, 3651, 4033, 4462, 4934, 5369, 5862, 6380,7142,8274,9362,10484,11631,12772];
var CzechRepublic = [3, 3, 5, 5, 12, 12, 26, 32, 38, 61, 94, 116, 150, 214, 298, 383, 434, 522, 694, 904, 995, 1165, 1236, 1394, 1654, 2062, 2279, 2663, 2829, 3002, 3308, 3589, 3858, 4190, 4472, 4587, 4822, 5017, 5312, 5569, 5732, 5902, 5991, 6059, 6141, 6303, 6433,6549,6654,6787,6914,7041,7136];
var Mexico = [2, 2, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 11, 12, 26, 41, 53, 53, 82, 93, 118, 164, 164, 251, 370, 370, 478, 478, 589, 717, 848, 993, 1094, 1215, 1378, 1510, 1688, 1890, 2143, 2439, 2785, 3181, 3441, 3844, 4219, 4661, 5014, 5399, 5847,6297,6875,7497,8261,8772,9501];
var Philippines = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 6, 10, 33, 49, 52, 52, 64, 111, 140, 187, 187, 187, 217, 230, 307, 380, 462, 552, 636, 707, 803, 1075, 1418, 1546, 2084, 2311, 2633, 3018, 3094, 3246, 3660, 3764, 3870, 4076, 4195, 4428, 4648, 4932, 5223, 5453, 5660,5878,6087,6259,6459,6599,6710];
var Indonesia = [2, 2, 2, 2, 2, 2, 4, 6, 19, 27, 34, 34, 69, 117, 117, 172, 172, 227, 309, 369, 450, 514, 579, 686, 790, 893, 1046, 1155, 1285, 1414, 1528, 1677, 1790, 1986, 2092, 2273, 2491, 2738, 2956, 3512, 3512, 4241, 4241, 4557, 4839, 5136, 5516,5923,6248,6575,6760,7135,7418];
var UnitedArabEmirates = [4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 11, 13, 13, 13, 13, 13, 19, 19, 19, 21, 21, 27, 45, 74, 85, 85, 85, 98, 98, 98, 113, 140, 140, 153, 153, 198, 248, 333, 333, 405, 468, 570, 611, 664, 814, 1024, 1264, 1505, 1799, 2076, 2359, 2659, 2990, 3360, 3736, 4123, 4521, 4933, 5365, 5825,6302,6302,6781,7265,7755,8238];
var Serbia = [1, 1, 1, 1, 1, 12, 19, 19, 31, 41, 188, 249, 303, 384, 457, 528, 659, 741, 785, 900, 1060, 1171, 1476, 1624, 1908, 2200, 2447, 2666, 2867, 3105, 3380, 3630, 4054, 4465, 4873, 5318,5690,5994,6318,6630,6890,7114];
var Malaysia = [3, 4, 4, 4, 7, 8, 8, 8, 8, 10, 10, 12, 14, 15, 17, 18, 18, 18, 18, 19, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 24, 24, 24, 24, 29, 50, 50, 55, 83, 93, 93, 117, 129, 129, 129, 197, 238, 553, 553, 553, 673, 900, 1030, 1183, 1306, 1518, 1624, 1796, 2031, 2161, 2320, 2470, 2626, 2766, 2908, 3116, 3333, 3483, 3662, 3793, 3963, 4119, 4228, 4346, 4530, 4683, 4817, 4987, 5072, 5182,5251,5305,5389,5424,5482,5532];
var Singapore = [4, 4, 7, 7, 10, 13, 16, 18, 18, 18, 24, 28, 30, 33, 40, 43, 45, 47, 50, 58, 67, 72, 75, 77, 81, 84, 85, 86, 89, 89, 90, 91, 93, 96, 98, 102, 106, 108, 110, 110, 117, 130, 138, 150, 160, 166, 178, 187, 200, 212, 243, 243, 266, 313, 345, 385, 432, 455, 507, 558, 631, 683, 732, 802, 844, 879, 926, 1000, 1049, 1114, 1189, 1309, 1375, 1481, 1623, 1910, 2108, 2299, 2532, 2918, 3252, 3699, 4427,5050,5992,6588,8014,9125,10141];
var Greece = [1, 3, 3, 3, 7, 7, 7, 9, 32, 32, 66, 73, 73, 89, 98, 98, 98, 228, 331, 331, 387, 418, 418, 495, 530, 624, 695, 743, 821, 892, 966, 1061, 1156, 1212, 1314, 1375, 1514, 1613, 1673, 1735, 1755, 1832, 1884, 1955, 2011, 2081, 2114, 2145, 2170, 2192, 2207,2245,2401,2408];

var countryDataSet = [{		
                    label: "India",
                    fill: false,
                    backgroundColor: color(window.chartColors.India).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.India,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
					pointBorderColor: window.chartColors.India,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: India,
                    spanGaps: false
                },
                {
                    label: "United States of America",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.UnitedStates).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.UnitedStates,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.UnitedStates,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: UnitedStates,
                    spanGaps: false
                },
				{
                    label: "Spain",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Spain).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Spain,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Spain,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Spain,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Italy",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Italy).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Italy,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Italy,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Italy,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "France",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.France).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.France,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.France,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: France,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Germany",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Germany).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Germany,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Germany,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Germany,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "The United Kingdom",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.UnitedKingdom).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.UnitedKingdom,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.UnitedKingdom,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: UnitedKingdom,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "China",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.China).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.China,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.China,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: China,
                    spanGaps: false,
					hidden: false
                },
				{
                    label: "Iran Islamic Republic",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Iran).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Iran,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Iran,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Iran,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Turkey",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Turkey).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Turkey,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Turkey,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Turkey,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Belgium",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Belgium).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Belgium,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Belgium,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Belgium,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Netherlands",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Netherlands).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Netherlands,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Netherlands,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Netherlands,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Brazil",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Brazil).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Brazil,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Brazil,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Brazil,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Canada",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Canada).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Canada,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Canada,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Canada,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Russia",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Russia).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Russia,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Russia,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Russia,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Switzerland",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Switzerland).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Switzerland,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Switzerland,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Switzerland,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Portugal",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Portugal).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Portugal,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Portugal,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Portugal,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Austria",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Austria).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Austria,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Austria,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Austria,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Israel",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Israel).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Israel,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Israel,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Israel,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Ireland",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Ireland).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Ireland,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Ireland,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Ireland,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Sweden",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Sweden).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Sweden,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Sweden,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Sweden,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Peru",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Peru).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Peru,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Peru,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Peru,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Republic of Korea",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.SouthKorea).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.SouthKorea,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.SouthKorea,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: SouthKorea,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Chile",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Chile).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Chile,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Chile,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Chile,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Japan",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Japan).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Japan,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Japan,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Japan,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Ecuador",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Ecuador).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Ecuador,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Ecuador,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Ecuador,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Poland",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Poland).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Poland,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Poland,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Poland,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Romania",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Romania).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Romania,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Romania,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Romania,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Denmark",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Denmark).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Denmark,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Denmark,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Denmark,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Pakistan",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Pakistan).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Pakistan,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Pakistan,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Pakistan,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Norway",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Norway).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Norway,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Norway,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Norway,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Australia",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Australia).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Australia,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Australia,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Australia,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Saudi Arabia",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.SaudiArabia).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.SaudiArabia,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.SaudiArabia,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: SaudiArabia,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Czech Republic",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.CzechRepublic).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.CzechRepublic,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.CzechRepublic,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: CzechRepublic,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Mexico",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Mexico).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Mexico,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Mexico,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Mexico,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Philippines",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Philippines).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Philippines,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Philippines,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Philippines,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "United Arab Emirates",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.UnitedArabEmirates).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.UnitedArabEmirates,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.UnitedArabEmirates,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: UnitedArabEmirates,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Serbia",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Serbia).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Serbia,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Serbia,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Serbia,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Malaysia",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Malaysia).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Malaysia,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Malaysia,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Malaysia,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Singapore",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Singapore).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Singapore,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Singapore,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Singapore,
                    spanGaps: false,
					hidden: true
                },
				{
                    label: "Greece",
                    fill: false,
                    //lineTension: 0.3,
                    backgroundColor: color(window.chartColors.Greece).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.Greece,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: window.chartColors.Greece,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 3,
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Greece,
                    spanGaps: false,
					hidden: true
                }
				];

var config = {
	type: 'line',
	options: {
            legend: {
				display: true
				},
			responsive: true,
			maintainAspectRatio: true
    },
	data: {
            labels: ['Day 1' ,'Day 2' ,'Day 3' ,'Day 4' ,'Day 5' ,'Day 6' ,'Day 7' ,'Day 8' ,'Day 9' ,'Day 10' ,'Day 11' ,'Day 12' ,'Day 13' ,'Day 14' ,'Day 15' ,'Day 16' ,'Day 17' ,'Day 18' ,'Day 19' ,'Day 20' ,'Day 21' ,'Day 22' ,'Day 23' ,'Day 24' ,'Day 25' ,'Day 26' ,'Day 27' ,'Day 28' ,'Day 29' ,'Day 30' ,'Day 31' ,'Day 32' ,'Day 33' ,'Day 34' ,'Day 35' ,'Day 36' ,'Day 37' ,'Day 38' ,'Day 39' ,'Day 40' ,'Day 41' ,'Day 42' ,'Day 43' ,'Day 44' ,'Day 45' ,'Day 46' ,'Day 47' ,'Day 48' ,'Day 49' ,'Day 50' ,'Day 51' ,'Day 52' ,'Day 53' ,'Day 54' ,'Day 55' ,'Day 56' ,'Day 57' ,'Day 58' ,'Day 59' ,'Day 60' ,'Day 61' ,'Day 62' ,'Day 63' ,'Day 64' ,'Day 65' ,'Day 66' ,'Day 67' ,'Day 68' ,'Day 69' ,'Day 70' ,'Day 71' ,'Day 72' ,'Day 73' ,'Day 74' ,'Day 75' ,'Day 76' ,'Day 77' ,'Day 78' ,'Day 79' ,'Day 80' ,'Day 81' ,'Day 82' ,'Day 83' ,'Day 84' ,'Day 85' ,'Day 86' ,'Day 87' ,'Day 88' ,'Day 89' ,'Day 90' ,'Day 91' ,'Day 92' ,'Day 93' ,'Day 94' ,'Day 95' ,'Day 96' ,'Day 97' ,'Day 98' ,'Day 99' ,'Day 100'],
            datasets: countryDataSet
		}
};
		

(function(global) {
	var MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	var COLORS = [
		'#4dc9f6',
		'#f67019',
		'#f53794',
		'#537bc4',
		'#acc236',
		'#166a8f',
		'#00a950',
		'#58595b',
		'#8549ba'
	];

	var Samples = global.Samples || (global.Samples = {});
	var Color = global.Color;

	Samples.utils = {
		// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
		srand: function(seed) {
			this._seed = seed;
		},

		rand: function(min, max) {
			var seed = this._seed;
			min = min === undefined ? 0 : min;
			max = max === undefined ? 1 : max;
			this._seed = (seed * 9301 + 49297) % 233280;
			return min + (this._seed / 233280) * (max - min);
		},

		numbers: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 1;
			var from = cfg.from || [];
			var count = cfg.count || 8;
			var decimals = cfg.decimals || 8;
			var continuity = cfg.continuity || 1;
			var dfactor = Math.pow(10, decimals) || 0;
			var data = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = (from[i] || 0) + this.rand(min, max);
				if (this.rand() <= continuity) {
					data.push(Math.round(dfactor * value) / dfactor);
				} else {
					data.push(null);
				}
			}

			return data;
		},

		labels: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 100;
			var count = cfg.count || 8;
			var step = (max - min) / count;
			var decimals = cfg.decimals || 8;
			var dfactor = Math.pow(10, decimals) || 0;
			var prefix = cfg.prefix || '';
			var values = [];
			var i;

			for (i = min; i < max; i += step) {
				values.push(prefix + Math.round(dfactor * i) / dfactor);
			}

			return values;
		},

		months: function(config) {
			var cfg = config || {};
			var count = cfg.count || 12;
			var section = cfg.section;
			var values = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = MONTHS[Math.ceil(i) % 12];
				values.push(value.substring(0, section));
			}

			return values;
		},

		color: function(index) {
			return COLORS[index % COLORS.length];
		},

		transparentize: function(color, opacity) {
			var alpha = opacity === undefined ? 0.5 : 1 - opacity;
			return Color(color).alpha(alpha).rgbString();
		}
	};

	// DEPRECATED
	window.randomScalingFactor = function() {
		return Math.round(Samples.utils.rand(-100, 100));
	};

	// INITIALIZATION

	Samples.utils.srand(Date.now());

}(this));
