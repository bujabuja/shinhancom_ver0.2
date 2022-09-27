var blueprint3d = null;
var aGlobal = null;
var anItem = null;
var aWall = null;
var aFloor = null;
var aCameraRange = null;
var gui = null;
var globalPropFolder = null;
var itemPropFolder = null;
var wallPropFolder = null;
var floorPropFolder = null;
var cameraPropFolder = null;
var selectionsFolder = null;

var myhome = '{"floorplan":{"version":"0.0.2a","corners":{"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":10.501,"y":9.5,"elevation":2.5},"28748f7e-7540-3e96-93ed-5be26255434d":{"x":10.5,"y":8.75,"elevation":2.5},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":10.51,"y":0.5,"elevation":2.5},"722daaa6-9e83-57ba-23dc-dbef9c74fc06":{"x":8.75,"y":0.5,"elevation":2.5},"dc92eaec-e120-d664-17ce-b40562527b38":{"x":6.75,"y":9.5,"elevation":2.5},"0f605c1e-daf3-4964-596b-d104bc6e0618":{"x":6.75,"y":9,"elevation":2.5},"1cb13812-fb60-b1e8-c432-be272d44375a":{"x":6.75,"y":5.5,"elevation":2.5},"b087167a-91c3-fb85-a938-2a6d31e427e4":{"x":8.75,"y":5.5,"elevation":2.5},"7045b5d1-233b-6966-33ea-ece3fe56b966":{"x":10.5,"y":5.5,"elevation":2.5},"b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0":{"x":10.502,"y":4.5,"elevation":2.5},"bd60011a-5ddd-f37a-fdb7-81016b3ec484":{"x":5.5,"y":0.503,"elevation":2.5},"d1cfeec2-8dd5-cea3-ad66-6d674250048c":{"x":2.25,"y":0.504,"elevation":2.5},"f0e645cb-2219-e2cf-b6c4-a99ed9639da3":{"x":5.5,"y":1.5,"elevation":2.5},"f211e335-cc11-8d80-1750-cdf39b8666fb":{"x":5.5,"y":4.5,"elevation":2.5},"be07ed09-a048-acef-2467-2611a69a4f5a":{"x":8.75,"y":4.5,"elevation":2.5},"a7abc076-6d7b-a695-f064-8c224b8db8b3":{"x":10.508,"y":1.5,"elevation":2.5},"e20f44eb-6a57-0076-d709-3e1830922244":{"x":8.75,"y":1.5,"elevation":2.5},"041211bf-8438-b9d0-bdc1-7b61f9ab915f":{"x":2.25,"y":1.5,"elevation":2.5},"0b26f3e6-aa94-bd0e-e437-0bd978489dc3":{"x":2.25,"y":3.25,"elevation":2.5},"f12e6031-b1c0-bca0-2548-09f53a15f3eb":{"x":-0.493,"y":3.25,"elevation":2.5},"b5d94631-5bbc-e5a2-5300-bef1be45c0ea":{"x":-0.495,"y":5.75,"elevation":2.5},"d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084":{"x":1,"y":3.25,"elevation":2.5},"b7a362ce-a94c-a208-40d0-62f84c94258b":{"x":2.25,"y":4.25,"elevation":2.5},"5eb034d2-a68a-2d24-b67e-2fdf41c960f5":{"x":6.75,"y":8.75,"elevation":2.5},"cefc2876-366c-455f-f2b3-a1f8f048b552":{"x":6.75,"y":8,"elevation":2.5},"d7408777-aaae-91cf-04b6-126e6340bb16":{"x":-0.498,"y":8,"elevation":2.5},"f2c888ba-e037-78a5-4881-fc55765f6bea":{"x":-0.499,"y":9,"elevation":2.5},"28511f6a-70fa-94a6-54a1-ea971e8066ba":{"x":2.25,"y":8,"elevation":2.5},"17b9e90b-683e-b8e0-a1bf-b3c8ddd2ba7f":{"x":2.25,"y":9,"elevation":2.5},"eaa92c7f-a224-e108-5368-c2e25fffe29e":{"x":1,"y":5.75,"elevation":2.5},"501c3893-3f7c-c45c-57fd-186bd87727a6":{"x":2.25,"y":5.75,"elevation":2.5},"c3ebe516-7a41-fb24-b159-1f1e831c9ecb":{"x":1,"y":4.25,"elevation":2.5},"c98b2465-a0d3-18af-93b7-116b0f463fa5":{"x":8.75,"y":-0.25,"elevation":2.5},"e7e9d984-9aeb-134b-68c3-0518b84b8cb4":{"x":10.5,"y":-0.25,"elevation":2.5}},"walls":[{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"28748f7e-7540-3e96-93ed-5be26255434d","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1353.5533905932737,"y":646.4466094067262},"b":{"x":1353.553390593274,"y":353.5533905932737}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"722daaa6-9e83-57ba-23dc-dbef9c74fc06","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":646.4466094067262,"y":-353.5533905932737},"b":{"x":353.5533905932737,"y":-353.5533905932738}},{"corner1":"dc92eaec-e120-d664-17ce-b40562527b38","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":810.1095625903353,"y":1081.2993514063214},"b":{"x":918.8426581573333,"y":1081.265298418924}},{"corner1":"dc92eaec-e120-d664-17ce-b40562527b38","corner2":"0f605c1e-daf3-4964-596b-d104bc6e0618","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":857.7365844764585,"y":771.2631499549308},"b":{"x":857.7365844764585,"y":623.0405298517668}},{"corner1":"1cb13812-fb60-b1e8-c432-be272d44375a","corner2":"b087167a-91c3-fb85-a938-2a6d31e427e4","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":808.1317234553426,"y":573.4356688306509},"b":{"x":915.2603311693492,"y":573.4356688306509}},{"corner1":"7045b5d1-233b-6966-33ea-ece3fe56b966","corner2":"b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1186.208558991918,"y":307.0480194613659},"b":{"x":1188.0976124395343,"y":191.60481929286286}},{"corner1":"bd60011a-5ddd-f37a-fdb7-81016b3ec484","corner2":"d1cfeec2-8dd5-cea3-ad66-6d674250048c","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":338.0188124648415,"y":-161.5567359553811},"b":{"x":162.58366037572176,"y":-161.3809223544667}},{"corner1":"bd60011a-5ddd-f37a-fdb7-81016b3ec484","corner2":"f0e645cb-2219-e2cf-b6c4-a99ed9639da3","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":408.6700629465706,"y":191.58828310953825},"b":{"x":408.6700197539672,"y":308.66991547779844}},{"corner1":"f211e335-cc11-8d80-1750-cdf39b8666fb","corner2":"be07ed09-a048-acef-2467-2611a69a4f5a","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":726.776695296637,"y":626.7766952966368},"b":{"x":873.2233047033632,"y":626.776695296637}},{"corner1":"b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0","corner2":"a7abc076-6d7b-a695-f064-8c224b8db8b3","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1191.7937793380283,"y":308.93145193409947},"b":{"x":1192.0941799668008,"y":191.76603963897333}},{"corner1":"f0e645cb-2219-e2cf-b6c4-a99ed9639da3","corner2":"f211e335-cc11-8d80-1750-cdf39b8666fb","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":443.9342143191827,"y":256.0662705117177},"b":{"x":443.93418190384654,"y":343.9341036463026}},{"corner1":"a7abc076-6d7b-a695-f064-8c224b8db8b3","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1085.7277621600463,"y":114.9974691120816},"b":{"x":1086.0281627888187,"y":85.70002246099124}},{"corner1":"e20f44eb-6a57-0076-d709-3e1830922244","corner2":"a7abc076-6d7b-a695-f064-8c224b8db8b3","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":937.1613235612618,"y":212.1625135367381},"b":{"x":988.6579430135168,"y":212.16300644071924}},{"corner1":"e20f44eb-6a57-0076-d709-3e1830922244","corner2":"be07ed09-a048-acef-2467-2611a69a4f5a","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":760.0957041389041,"y":247.2281991695589},"b":{"x":752.7733736688562,"y":335.0957041398886}},{"corner1":"be07ed09-a048-acef-2467-2611a69a4f5a","corner2":"b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":920.7830481705145,"y":520.7833456643835},"b":{"x":979.4217684731801,"y":520.7834688903788}},{"corner1":"be07ed09-a048-acef-2467-2611a69a4f5a","corner2":"b087167a-91c3-fb85-a938-2a6d31e427e4","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":839.6446609406727,"y":485.3553390593274},"b":{"x":839.6446609406726,"y":514.6446609406727}},{"corner1":"b087167a-91c3-fb85-a938-2a6d31e427e4","corner2":"7045b5d1-233b-6966-33ea-ece3fe56b966","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":936.8718433538229,"y":611.8718433538229},"b":{"x":988.1281566461771,"y":611.8718433538229}},{"corner1":"041211bf-8438-b9d0-bdc1-7b61f9ab915f","corner2":"e20f44eb-6a57-0076-d709-3e1830922244","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":454.8091478029254,"y":379.81025996763435},"b":{"x":645.1897400313811,"y":379.8107206413404}},{"corner1":"041211bf-8438-b9d0-bdc1-7b61f9ab915f","corner2":"0b26f3e6-aa94-bd0e-e437-0bd978489dc3","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-49.00346545928693,"y":441.68230101056815},"b":{"x":-41.68113498873697,"y":675.9965345414428}},{"corner1":"f12e6031-b1c0-bca0-2548-09f53a15f3eb","corner2":"b5d94631-5bbc-e5a2-5300-bef1be45c0ea","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-271.16401695546716,"y":546.2018005806044},"b":{"x":-271.14836646549975,"y":729.4357217343072}},{"corner1":"f12e6031-b1c0-bca0-2548-09f53a15f3eb","corner2":"d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":47.699443481269924,"y":421.969557487816},"b":{"x":128.03123224832925,"y":421.96932617945447}},{"corner1":"0b26f3e6-aa94-bd0e-e437-0bd978489dc3","corner2":"b7a362ce-a94c-a208-40d0-62f84c94258b","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":4.029130879203905,"y":545.9708691207961},"b":{"x":4.029130879203876,"y":729.0291308792039}},{"corner1":"d1cfeec2-8dd5-cea3-ad66-6d674250048c","corner2":"041211bf-8438-b9d0-bdc1-7b61f9ab915f","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":189.80133714234472,"y":85.64258699368287},"b":{"x":189.80126292292505,"y":114.80224976395633}},{"corner1":"5eb034d2-a68a-2d24-b67e-2fdf41c960f5","corner2":"cefc2876-366c-455f-f2b3-a1f8f048b552","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":789.9048519428139,"y":760.0951480571861},"b":{"x":789.9048519428139,"y":664.9048519428139}},{"corner1":"5eb034d2-a68a-2d24-b67e-2fdf41c960f5","corner2":"28748f7e-7540-3e96-93ed-5be26255434d","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":818.4141430915778,"y":997.6289791429529},"b":{"x":927.3414710743946,"y":990.3153036035729}},{"corner1":"28748f7e-7540-3e96-93ed-5be26255434d","corner2":"7045b5d1-233b-6966-33ea-ece3fe56b966","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1156.066017177982,"y":743.9339828220179},"b":{"x":1156.066017177982,"y":656.0660171779821}},{"corner1":"d7408777-aaae-91cf-04b6-126e6340bb16","corner2":"f2c888ba-e037-78a5-4881-fc55765f6bea","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-103.22615642366215,"y":853.2639400487993},"b":{"x":-103.2105059336947,"y":897.3735822661122}},{"corner1":"d7408777-aaae-91cf-04b6-126e6340bb16","corner2":"28511f6a-70fa-94a6-54a1-ea971e8066ba","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":206.46613738549226,"y":1056.2498748689134},"b":{"x":418.75035912698155,"y":1056.2498063331025}},{"corner1":"28511f6a-70fa-94a6-54a1-ea971e8066ba","corner2":"17b9e90b-683e-b8e0-a1bf-b3c8ddd2ba7f","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":171.96704277592846,"y":853.0331025062133},"b":{"x":171.9670427759685,"y":896.9670427760652}},{"corner1":"cefc2876-366c-455f-f2b3-a1f8f048b552","corner2":"1cb13812-fb60-b1e8-c432-be272d44375a","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":763.3883476483185,"y":711.6116523516815},"b":{"x":763.3883476483185,"y":638.3883476483185}},{"corner1":"28511f6a-70fa-94a6-54a1-ea971e8066ba","corner2":"cefc2876-366c-455f-f2b3-a1f8f048b552","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":384.0990771318927,"y":959.0991196841953},"b":{"x":515.9010255979864,"y":959.0990771320295}},{"corner1":"f2c888ba-e037-78a5-4881-fc55765f6bea","corner2":"0f605c1e-daf3-4964-596b-d104bc6e0618","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":206.39617278280787,"y":1156.2880415245183},"b":{"x":418.712075473429,"y":1156.2880072566131}},{"corner1":"0f605c1e-daf3-4964-596b-d104bc6e0618","corner2":"5eb034d2-a68a-2d24-b67e-2fdf41c960f5","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":683.8388347648319,"y":891.1611652351681},"b":{"x":683.8388347648319,"y":883.8388347648319}},{"corner1":"b5d94631-5bbc-e5a2-5300-bef1be45c0ea","corner2":"d7408777-aaae-91cf-04b6-126e6340bb16","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-129.47311103646564,"y":654.6260801905917},"b":{"x":-129.4097491382019,"y":720.5271229594293}},{"corner1":"b5d94631-5bbc-e5a2-5300-bef1be45c0ea","corner2":"eaa92c7f-a224-e108-5368-c2e25fffe29e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":47.52453197455894,"y":672.0649741268287},"b":{"x":127.93552311444793,"y":672.0648284882307}},{"corner1":"501c3893-3f7c-c45c-57fd-186bd87727a6","corner2":"28511f6a-70fa-94a6-54a1-ea971e8066ba","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":145.45043575145706,"y":654.5495642484461},"b":{"x":145.450435751417,"y":720.4505810336389}},{"corner1":"d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084","corner2":"0b26f3e6-aa94-bd0e-e437-0bd978489dc3","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":160.3553390591258,"y":360.3553390591258},"b":{"x":189.64466094030408,"y":360.3553390591258}},{"corner1":"d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084","corner2":"c3ebe516-7a41-fb24-b159-1f1e831c9ecb","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":36.611754154824894,"y":413.38853378667403},"b":{"x":36.61175415458206,"y":486.61175415399583}},{"corner1":"eaa92c7f-a224-e108-5368-c2e25fffe29e","corner2":"501c3893-3f7c-c45c-57fd-186bd87727a6","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":160.35533905920644,"y":610.3553390592065},"b":{"x":189.6446609404515,"y":610.3553390592065}},{"corner1":"c3ebe516-7a41-fb24-b159-1f1e831c9ecb","corner2":"eaa92c7f-a224-e108-5368-c2e25fffe29e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":46.96699141100894,"y":478.03300858899104},"b":{"x":46.966991411008934,"y":521.966991411009}},{"corner1":"e20f44eb-6a57-0076-d709-3e1830922244","corner2":"722daaa6-9e83-57ba-23dc-dbef9c74fc06","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":928.0335646707091,"y":79.29033863775386},"b":{"x":920.7112342006611,"y":28.033564671693625}},{"corner1":"722daaa6-9e83-57ba-23dc-dbef9c74fc06","corner2":"bd60011a-5ddd-f37a-fdb7-81016b3ec484","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":750.8049383288076,"y":-59.71446457965095},"b":{"x":659.7955172553975,"y":-59.66250600901961}},{"corner1":"722daaa6-9e83-57ba-23dc-dbef9c74fc06","corner2":"c98b2465-a0d3-18af-93b7-116b0f463fa5","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":883.4787315163932,"y":19.74367231255892},"b":{"x":880.3372328944155,"y":-2.2470156849395053}},{"corner1":"c98b2465-a0d3-18af-93b7-116b0f463fa5","corner2":"e7e9d984-9aeb-134b-68c3-0518b84b8cb4","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":947.2271824131503,"y":89.90485194281396},"b":{"x":1035.095148057186,"y":97.22718241315029}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"e7e9d984-9aeb-134b-68c3-0518b84b8cb4","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1077.1697130946768,"y":23.10294783504056},"b":{"x":1076.8693124659046,"y":1.1440811937767386}}],"rooms":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed,f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,7045b5d1-233b-6966-33ea-ece3fe56b966,1cb13812-fb60-b1e8-c432-be272d44375a,dc92eaec-e120-d664-17ce-b40562527b38,f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"name":"A New Room"},"da026c08-d76a-a944-8e7b-096b752da9ed,dc92eaec-e120-d664-17ce-b40562527b38,1cb13812-fb60-b1e8-c432-be272d44375a,7045b5d1-233b-6966-33ea-ece3fe56b966":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,7045b5d1-233b-6966-33ea-ece3fe56b966,1cb13812-fb60-b1e8-c432-be272d44375a,dc92eaec-e120-d664-17ce-b40562527b38,f90da5e3-9e0e-eba7-173d-eb0b071e838e,3dde4696-3adc-0796-1a37-e440cbed269f":{"name":"A New Room"},"f90da5e3-9e0e-eba7-173d-eb0b071e838e,3dde4696-3adc-0796-1a37-e440cbed269f,e20f44eb-6a57-0076-d709-3e1830922244,be07ed09-a048-acef-2467-2611a69a4f5a,f211e335-cc11-8d80-1750-cdf39b8666fb,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,bd60011a-5ddd-f37a-fdb7-81016b3ec484,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,a7abc076-6d7b-a695-f064-8c224b8db8b3,b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,7045b5d1-233b-6966-33ea-ece3fe56b966,1cb13812-fb60-b1e8-c432-be272d44375a,dc92eaec-e120-d664-17ce-b40562527b38":{"name":"A New Room"},"bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,7045b5d1-233b-6966-33ea-ece3fe56b966,1cb13812-fb60-b1e8-c432-be272d44375a,dc92eaec-e120-d664-17ce-b40562527b38,f90da5e3-9e0e-eba7-173d-eb0b071e838e,3dde4696-3adc-0796-1a37-e440cbed269f,e20f44eb-6a57-0076-d709-3e1830922244,a7abc076-6d7b-a695-f064-8c224b8db8b3,4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"name":"A New Room"},"b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,be07ed09-a048-acef-2467-2611a69a4f5a,e20f44eb-6a57-0076-d709-3e1830922244,a7abc076-6d7b-a695-f064-8c224b8db8b3":{"name":"A New Room"},"e20f44eb-6a57-0076-d709-3e1830922244,be07ed09-a048-acef-2467-2611a69a4f5a,f211e335-cc11-8d80-1750-cdf39b8666fb,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,bd60011a-5ddd-f37a-fdb7-81016b3ec484,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,a7abc076-6d7b-a695-f064-8c224b8db8b3":{"name":"A New Room"},"be07ed09-a048-acef-2467-2611a69a4f5a,b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,7045b5d1-233b-6966-33ea-ece3fe56b966,1cb13812-fb60-b1e8-c432-be272d44375a,dc92eaec-e120-d664-17ce-b40562527b38,f90da5e3-9e0e-eba7-173d-eb0b071e838e,3dde4696-3adc-0796-1a37-e440cbed269f,e20f44eb-6a57-0076-d709-3e1830922244":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,041211bf-8438-b9d0-bdc1-7b61f9ab915f,3dde4696-3adc-0796-1a37-e440cbed269f":{"name":"A New Room"},"f90da5e3-9e0e-eba7-173d-eb0b071e838e,3dde4696-3adc-0796-1a37-e440cbed269f,041211bf-8438-b9d0-bdc1-7b61f9ab915f,2e71d6c0-e716-baf0-0076-3b0bd6f2291d":{"name":"A New Room"},"dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,be07ed09-a048-acef-2467-2611a69a4f5a,f211e335-cc11-8d80-1750-cdf39b8666fb,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,bd60011a-5ddd-f37a-fdb7-81016b3ec484,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,a7abc076-6d7b-a695-f064-8c224b8db8b3,b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,7045b5d1-233b-6966-33ea-ece3fe56b966,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a":{"name":"A New Room"},"bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,a7abc076-6d7b-a695-f064-8c224b8db8b3,4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"name":"A New Room"},"be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,d1cfeec2-8dd5-cea3-ad66-6d674250048c,041211bf-8438-b9d0-bdc1-7b61f9ab915f,3dde4696-3adc-0796-1a37-e440cbed269f":{"name":"A New Room"},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571,a7abc076-6d7b-a695-f064-8c224b8db8b3,e20f44eb-6a57-0076-d709-3e1830922244,041211bf-8438-b9d0-bdc1-7b61f9ab915f,d1cfeec2-8dd5-cea3-ad66-6d674250048c,bd60011a-5ddd-f37a-fdb7-81016b3ec484":{"name":"A New Room"},"041211bf-8438-b9d0-bdc1-7b61f9ab915f,d1cfeec2-8dd5-cea3-ad66-6d674250048c,bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,0b26f3e6-aa94-bd0e-e437-0bd978489dc3":{"name":"A New Room"},"3dde4696-3adc-0796-1a37-e440cbed269f,041211bf-8438-b9d0-bdc1-7b61f9ab915f,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,f12e6031-b1c0-bca0-2548-09f53a15f3eb":{"name":"A New Room"},"dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,be07ed09-a048-acef-2467-2611a69a4f5a,f211e335-cc11-8d80-1750-cdf39b8666fb,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,bd60011a-5ddd-f37a-fdb7-81016b3ec484,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,a7abc076-6d7b-a695-f064-8c224b8db8b3,b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,7045b5d1-233b-6966-33ea-ece3fe56b966,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a":{"name":"A New Room"},"bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,a7abc076-6d7b-a695-f064-8c224b8db8b3,4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"name":"A New Room"},"be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244":{"name":"A New Room"},"f90da5e3-9e0e-eba7-173d-eb0b071e838e,f12e6031-b1c0-bca0-2548-09f53a15f3eb,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,2e71d6c0-e716-baf0-0076-3b0bd6f2291d":{"name":"A New Room"},"da026c08-d76a-a944-8e7b-096b752da9ed,dc92eaec-e120-d664-17ce-b40562527b38,5eb034d2-a68a-2d24-b67e-2fdf41c960f5,28748f7e-7540-3e96-93ed-5be26255434d":{"name":"A New Room"},"1cb13812-fb60-b1e8-c432-be272d44375a,b087167a-91c3-fb85-a938-2a6d31e427e4,7045b5d1-233b-6966-33ea-ece3fe56b966,28748f7e-7540-3e96-93ed-5be26255434d,5eb034d2-a68a-2d24-b67e-2fdf41c960f5":{"name":"A New Room"},"dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,be07ed09-a048-acef-2467-2611a69a4f5a,f211e335-cc11-8d80-1750-cdf39b8666fb,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,bd60011a-5ddd-f37a-fdb7-81016b3ec484,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,a7abc076-6d7b-a695-f064-8c224b8db8b3,b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,7045b5d1-233b-6966-33ea-ece3fe56b966,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,5eb034d2-a68a-2d24-b67e-2fdf41c960f5":{"name":"A New Room"},"bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,5eb034d2-a68a-2d24-b67e-2fdf41c960f5,dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,a7abc076-6d7b-a695-f064-8c224b8db8b3,4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"name":"A New Room"},"be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,5eb034d2-a68a-2d24-b67e-2fdf41c960f5,dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244":{"name":"A New Room"},"041211bf-8438-b9d0-bdc1-7b61f9ab915f,d1cfeec2-8dd5-cea3-ad66-6d674250048c,bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,5eb034d2-a68a-2d24-b67e-2fdf41c960f5,dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,0b26f3e6-aa94-bd0e-e437-0bd978489dc3":{"name":"A New Room"},"f90da5e3-9e0e-eba7-173d-eb0b071e838e,f2c888ba-e037-78a5-4881-fc55765f6bea,0f605c1e-daf3-4964-596b-d104bc6e0618,dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d":{"name":"A New Room"},"dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,17b9e90b-683e-b8e0-a1bf-b3c8ddd2ba7f,28511f6a-70fa-94a6-54a1-ea971e8066ba,cefc2876-366c-455f-f2b3-a1f8f048b552,5eb034d2-a68a-2d24-b67e-2fdf41c960f5,0f605c1e-daf3-4964-596b-d104bc6e0618,f2c888ba-e037-78a5-4881-fc55765f6bea,d7408777-aaae-91cf-04b6-126e6340bb16,f12e6031-b1c0-bca0-2548-09f53a15f3eb,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,be07ed09-a048-acef-2467-2611a69a4f5a,f211e335-cc11-8d80-1750-cdf39b8666fb,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,bd60011a-5ddd-f37a-fdb7-81016b3ec484,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,a7abc076-6d7b-a695-f064-8c224b8db8b3,b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,7045b5d1-233b-6966-33ea-ece3fe56b966,28748f7e-7540-3e96-93ed-5be26255434d,da026c08-d76a-a944-8e7b-096b752da9ed":{"name":"A New Room"},"f2c888ba-e037-78a5-4881-fc55765f6bea,d7408777-aaae-91cf-04b6-126e6340bb16,28511f6a-70fa-94a6-54a1-ea971e8066ba,17b9e90b-683e-b8e0-a1bf-b3c8ddd2ba7f,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"name":"A New Room"},"0f605c1e-daf3-4964-596b-d104bc6e0618,dc92eaec-e120-d664-17ce-b40562527b38,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,17b9e90b-683e-b8e0-a1bf-b3c8ddd2ba7f,28511f6a-70fa-94a6-54a1-ea971e8066ba,cefc2876-366c-455f-f2b3-a1f8f048b552,5eb034d2-a68a-2d24-b67e-2fdf41c960f5":{"name":"A New Room"},"da026c08-d76a-a944-8e7b-096b752da9ed,dc92eaec-e120-d664-17ce-b40562527b38,0f605c1e-daf3-4964-596b-d104bc6e0618,5eb034d2-a68a-2d24-b67e-2fdf41c960f5,28748f7e-7540-3e96-93ed-5be26255434d":{"name":"A New Room"},"f90da5e3-9e0e-eba7-173d-eb0b071e838e,2e71d6c0-e716-baf0-0076-3b0bd6f2291d,17b9e90b-683e-b8e0-a1bf-b3c8ddd2ba7f,28511f6a-70fa-94a6-54a1-ea971e8066ba,cefc2876-366c-455f-f2b3-a1f8f048b552,5eb034d2-a68a-2d24-b67e-2fdf41c960f5,0f605c1e-daf3-4964-596b-d104bc6e0618,f2c888ba-e037-78a5-4881-fc55765f6bea":{"name":"A New Room"},"5eb034d2-a68a-2d24-b67e-2fdf41c960f5,0f605c1e-daf3-4964-596b-d104bc6e0618,f2c888ba-e037-78a5-4881-fc55765f6bea,d7408777-aaae-91cf-04b6-126e6340bb16,28511f6a-70fa-94a6-54a1-ea971e8066ba,cefc2876-366c-455f-f2b3-a1f8f048b552":{"name":"A New Room"},"f12e6031-b1c0-bca0-2548-09f53a15f3eb,d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084,eaa92c7f-a224-e108-5368-c2e25fffe29e,b5d94631-5bbc-e5a2-5300-bef1be45c0ea":{"name":"A New Room"},"0b26f3e6-aa94-bd0e-e437-0bd978489dc3,501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084":{"name":"A New Room"},"d7408777-aaae-91cf-04b6-126e6340bb16,b5d94631-5bbc-e5a2-5300-bef1be45c0ea,eaa92c7f-a224-e108-5368-c2e25fffe29e,501c3893-3f7c-c45c-57fd-186bd87727a6,28511f6a-70fa-94a6-54a1-ea971e8066ba":{"name":"A New Room"},"1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,b7a362ce-a94c-a208-40d0-62f84c94258b,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,be07ed09-a048-acef-2467-2611a69a4f5a,f211e335-cc11-8d80-1750-cdf39b8666fb,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,bd60011a-5ddd-f37a-fdb7-81016b3ec484,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,a7abc076-6d7b-a695-f064-8c224b8db8b3,b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,7045b5d1-233b-6966-33ea-ece3fe56b966,b087167a-91c3-fb85-a938-2a6d31e427e4":{"name":"A New Room"},"bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,b7a362ce-a94c-a208-40d0-62f84c94258b,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,a7abc076-6d7b-a695-f064-8c224b8db8b3,4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"name":"A New Room"},"be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,b7a362ce-a94c-a208-40d0-62f84c94258b,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244":{"name":"A New Room"},"041211bf-8438-b9d0-bdc1-7b61f9ab915f,d1cfeec2-8dd5-cea3-ad66-6d674250048c,bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,b7a362ce-a94c-a208-40d0-62f84c94258b,0b26f3e6-aa94-bd0e-e437-0bd978489dc3":{"name":"A New Room"},"0b26f3e6-aa94-bd0e-e437-0bd978489dc3,b7a362ce-a94c-a208-40d0-62f84c94258b,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084":{"name":"A New Room"},"501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,b7a362ce-a94c-a208-40d0-62f84c94258b":{"name":"A New Room"},"f12e6031-b1c0-bca0-2548-09f53a15f3eb,d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,eaa92c7f-a224-e108-5368-c2e25fffe29e,b5d94631-5bbc-e5a2-5300-bef1be45c0ea":{"name":"A New Room"},"1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,b7a362ce-a94c-a208-40d0-62f84c94258b,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,be07ed09-a048-acef-2467-2611a69a4f5a,f211e335-cc11-8d80-1750-cdf39b8666fb,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,bd60011a-5ddd-f37a-fdb7-81016b3ec484,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,a7abc076-6d7b-a695-f064-8c224b8db8b3,b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,7045b5d1-233b-6966-33ea-ece3fe56b966,b087167a-91c3-fb85-a938-2a6d31e427e4":{"name":"A New Room"},"bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,b7a362ce-a94c-a208-40d0-62f84c94258b,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,a7abc076-6d7b-a695-f064-8c224b8db8b3,4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"name":"A New Room"},"be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,b7a362ce-a94c-a208-40d0-62f84c94258b,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244":{"name":"A New Room"},"041211bf-8438-b9d0-bdc1-7b61f9ab915f,d1cfeec2-8dd5-cea3-ad66-6d674250048c,bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,b7a362ce-a94c-a208-40d0-62f84c94258b,0b26f3e6-aa94-bd0e-e437-0bd978489dc3":{"name":"A New Room"},"1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,be07ed09-a048-acef-2467-2611a69a4f5a,f211e335-cc11-8d80-1750-cdf39b8666fb,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,bd60011a-5ddd-f37a-fdb7-81016b3ec484,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,a7abc076-6d7b-a695-f064-8c224b8db8b3,b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,7045b5d1-233b-6966-33ea-ece3fe56b966,b087167a-91c3-fb85-a938-2a6d31e427e4":{"name":"A New Room"},"bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,a7abc076-6d7b-a695-f064-8c224b8db8b3,4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"name":"A New Room"},"be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244":{"name":"A New Room"},"041211bf-8438-b9d0-bdc1-7b61f9ab915f,d1cfeec2-8dd5-cea3-ad66-6d674250048c,bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084,0b26f3e6-aa94-bd0e-e437-0bd978489dc3":{"name":"A New Room"},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571,a7abc076-6d7b-a695-f064-8c224b8db8b3,e20f44eb-6a57-0076-d709-3e1830922244,722daaa6-9e83-57ba-23dc-dbef9c74fc06":{"name":"A New Room"},"1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,be07ed09-a048-acef-2467-2611a69a4f5a,f211e335-cc11-8d80-1750-cdf39b8666fb,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,bd60011a-5ddd-f37a-fdb7-81016b3ec484,722daaa6-9e83-57ba-23dc-dbef9c74fc06,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,a7abc076-6d7b-a695-f064-8c224b8db8b3,b1ff9b90-74ee-4ec5-4ffd-652e7986f8d0,7045b5d1-233b-6966-33ea-ece3fe56b966,b087167a-91c3-fb85-a938-2a6d31e427e4":{"name":"A New Room"},"bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,a7abc076-6d7b-a695-f064-8c224b8db8b3,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,722daaa6-9e83-57ba-23dc-dbef9c74fc06":{"name":"A New Room"},"bd60011a-5ddd-f37a-fdb7-81016b3ec484,722daaa6-9e83-57ba-23dc-dbef9c74fc06,e20f44eb-6a57-0076-d709-3e1830922244,041211bf-8438-b9d0-bdc1-7b61f9ab915f,d1cfeec2-8dd5-cea3-ad66-6d674250048c":{"name":"A New Room"},"e20f44eb-6a57-0076-d709-3e1830922244,be07ed09-a048-acef-2467-2611a69a4f5a,f211e335-cc11-8d80-1750-cdf39b8666fb,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,bd60011a-5ddd-f37a-fdb7-81016b3ec484,722daaa6-9e83-57ba-23dc-dbef9c74fc06":{"name":"A New Room"},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571,722daaa6-9e83-57ba-23dc-dbef9c74fc06,c98b2465-a0d3-18af-93b7-116b0f463fa5,e7e9d984-9aeb-134b-68c3-0518b84b8cb4":{"name":"A New Room"},"bd60011a-5ddd-f37a-fdb7-81016b3ec484,f0e645cb-2219-e2cf-b6c4-a99ed9639da3,f211e335-cc11-8d80-1750-cdf39b8666fb,be07ed09-a048-acef-2467-2611a69a4f5a,b087167a-91c3-fb85-a938-2a6d31e427e4,1cb13812-fb60-b1e8-c432-be272d44375a,cefc2876-366c-455f-f2b3-a1f8f048b552,28511f6a-70fa-94a6-54a1-ea971e8066ba,501c3893-3f7c-c45c-57fd-186bd87727a6,eaa92c7f-a224-e108-5368-c2e25fffe29e,c3ebe516-7a41-fb24-b159-1f1e831c9ecb,d8c6ee7c-9ab4-1635-988a-1f5bd8d1f084,0b26f3e6-aa94-bd0e-e437-0bd978489dc3,041211bf-8438-b9d0-bdc1-7b61f9ab915f,e20f44eb-6a57-0076-d709-3e1830922244,a7abc076-6d7b-a695-f064-8c224b8db8b3,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,e7e9d984-9aeb-134b-68c3-0518b84b8cb4,c98b2465-a0d3-18af-93b7-116b0f463fa5,722daaa6-9e83-57ba-23dc-dbef9c74fc06":{"name":"A New Room"}},"wallTextures":[],"floorTextures":{},"newFloorTextures":{},"carbonSheet":{"url":"","transparency":1,"x":0,"y":0,"anchorX":0,"anchorY":0,"width":0.01,"height":0.01}},"items":[]}'
/*
 * Floorplanner controls
 */

var ViewerFloorplanner = function(blueprint3d)
{
  var canvasWrapper = '#floorplanner';
  // buttons
  var move = '#move';
  var remove = '#delete';
  var draw = '#draw';

  var activeStlye = 'btn-primary disabled';
  this.floorplanner = blueprint3d.floorplanner;
  var scope = this;
  function init()
  {
    $( window ).resize( scope.handleWindowResize );
    scope.handleWindowResize();

    scope.floorplanner.addEventListener(BP3DJS.EVENT_MODE_RESET, function(mode)
    {
      $(draw).removeClass(activeStlye);
      $(remove).removeClass(activeStlye);
      $(move).removeClass(activeStlye);
      if (mode == BP3DJS.floorplannerModes.MOVE)
      {
          $(move).addClass(activeStlye);
      }
      else if (mode == BP3DJS.floorplannerModes.DRAW)
      {
          $(draw).addClass(activeStlye);
      }
      else if (mode == BP3DJS.floorplannerModes.DELETE)
      {
          $(remove).addClass(activeStlye);
      }

      if (mode == BP3DJS.floorplannerModes.DRAW)
      {
        $("#draw-walls-hint").show();
        scope.handleWindowResize();
      }
      else
      {
        $("#draw-walls-hint").hide();
      }
    });

    $(move).click(function()
    {
      scope.floorplanner.setMode(BP3DJS.floorplannerModes.MOVE);
    });

    $(draw).click(function()
    {
      scope.floorplanner.setMode(BP3DJS.floorplannerModes.DRAW);
    });

    $(remove).click(function()
    {
      scope.floorplanner.setMode(BP3DJS.floorplannerModes.DELETE);
    });
  }

  this.updateFloorplanView = function() {
    scope.floorplanner.reset();
  }

  this.handleWindowResize = function() {
    $(canvasWrapper).height(window.innerHeight - $(canvasWrapper).offset().top);
    scope.floorplanner.resizeView();
  };

  init();
};

var mainControls = function(blueprint3d)
{
	  var blueprint3d = blueprint3d;

	  function newDesign()
	  {
	    blueprint3d.model.loadSerialized(myhome);
	  }

	  function loadDesign()
	  {
	    files = $("#loadFile").get(0).files;
      if(files.length == 0)
      {
          files = $("#loadFile2d").get(0).files;
      }
	    var reader  = new FileReader();
	    reader.onload = function(event) {
	        var data = event.target.result;
	        blueprint3d.model.loadSerialized(data);
	    }
	    reader.readAsText(files[0]);
	  }

	  function saveDesign() {
	    var data = blueprint3d.model.exportSerialized();
	    var a = window.document.createElement('a');
	    var blob = new Blob([data], {type : 'text'});
	    a.href = window.URL.createObjectURL(blob);
	    a.download = 'design.blueprint3d';
	    document.body.appendChild(a)
	    a.click();
	    document.body.removeChild(a)
	  }

	  function saveGLTF()
	  {
		  blueprint3d.three.exportForBlender();
	  }

	  function saveGLTFCallback(o)
	  {
		var data = o.gltf;
		var a = window.document.createElement('a');
		var blob = new Blob([data], {type : 'text'});
		a.href = window.URL.createObjectURL(blob);
		a.download = 'design.gltf';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	  }

	  function saveMesh() {
		    var data = blueprint3d.model.exportMeshAsObj();
		    var a = window.document.createElement('a');
		    var blob = new Blob([data], {type : 'text'});
		    a.href = window.URL.createObjectURL(blob);
		    a.download = 'design.obj';
		    document.body.appendChild(a)
		    a.click();
		    document.body.removeChild(a)
		  }

	  function init() {
	    $("#new").click(newDesign);
	    $("#new2d").click(newDesign);
	    $("#loadFile").change(loadDesign);
	    $("#saveFile").click(saveDesign);

      $("#loadFile2d").change(loadDesign);
	    $("#saveFile2d").click(saveDesign);

	    $("#saveMesh").click(saveMesh);
	    $("#saveGLTF").click(saveGLTF);
	    blueprint3d.three.addEventListener(BP3DJS.EVENT_GLTF_READY, saveGLTFCallback);
	  }

	  init();
}

var GlobalProperties = function()
{
	this.name = 'Global';
	//a - feet and inches, b = inches, c - cms, d - millimeters, e - meters
	this.units = {a:false, b:false, c:false, d:false, e:true};
	this.unitslabel = {a:BP3DJS.dimFeetAndInch, b:BP3DJS.dimInch, c:BP3DJS.dimCentiMeter, d:BP3DJS.dimMilliMeter, e:BP3DJS.dimMeter};
	this.guiControllers = null;

	this.setUnit = function(unit)
	{
		for (let param in this.units)
		{
			this.units[param] = false;
		}
		this.units[unit] = true;

		BP3DJS.Configuration.setValue(BP3DJS.configDimUnit, this.unitslabel[unit]);

		console.log(this.units, this.unitslabel[unit], BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit));
		
//		globalPropFolder = getGlobalPropertiesFolder(gui, aGlobal, floorplanner);
		var view2df = construct2dInterfaceFolder(globalPropFolder, aGlobal, blueprint3d.floorplanner);
		blueprint3d.floorplanner.view.draw();
		for (var i in this.guiControllers) // Iterate over gui controllers to update the values
		{
			this.guiControllers[i].updateDisplay();
	    }
	}

	this.setGUIControllers = function(guiControls)
	{
		this.guiControllers = guiControls;
	}
}

var CameraProperties = function()
{
	this.ratio = 1;
	this.ratio2 = 1;
	this.locked = false;
	this.three = null;

	this.change = function()
	{
		if(this.three)
		{
			this.three.changeClippingPlanes(this.ratio, this.ratio2);
		}
	}

	this.changeLock = function()
	{
		if(this.three)
		{
			this.three.lockView(!this.locked);
		}
	}

	this.reset = function()
	{
		if(this.three)
		{
			this.three.resetClipping();
		}
	}
}

var CornerProperties = function(corner, gui)
{
	var scope = this;
	this.x = BP3DJS.Dimensioning.cmToMeasureRaw(corner.x);
	this.y = BP3DJS.Dimensioning.cmToMeasureRaw(corner.y);
	this.elevation = BP3DJS.Dimensioning.cmToMeasureRaw(corner.elevation);
	this.gui = gui;
	this.corner = corner;
	
	function onEvent()
	{
		scope.x = BP3DJS.Dimensioning.cmToMeasureRaw(scope.corner.x);
		scope.y = BP3DJS.Dimensioning.cmToMeasureRaw(scope.corner.y);
		scope.elevation = BP3DJS.Dimensioning.cmToMeasureRaw(scope.corner.elevation);
		scope.xcontrol.updateDisplay();
		scope.ycontrol.updateDisplay();
		scope.elevationcontrol.updateDisplay();
	}
	
	function onChangeX()
	{
		scope.corner.x = BP3DJS.Dimensioning.cmFromMeasureRaw(scope.x);
	}
	function onChangeY()
	{
		scope.corner.y = BP3DJS.Dimensioning.cmFromMeasureRaw(scope.y);
	}
	function onChangeElevation()
	{
		scope.corner.elevation = BP3DJS.Dimensioning.cmFromMeasureRaw(scope.elevation);
	}
	
	this.corner.addEventListener(BP3DJS.EVENT_CORNER_ATTRIBUTES_CHANGED, onEvent);
//	this.corner.addEventListener(BP3DJS.EVENT_MOVED, onEvent);
		
	this.f = gui.addFolder('Current Corner');
	this.xcontrol = f.add(this, 'x').name(`x(${BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit)})`).step(0.01).onChange(()=>{onChangeX()});
	this.ycontrol = f.add(this, 'y').name(`y(${BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit)})`).step(0.01).onChange(()=>{onChangeY()});
	this.elevationcontrol = f.add(this, 'elevation').name(`Elevation(${BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit)})`).min(0).step(0.01).onChange(()=>{onChangeElevation()});  
	
	
	return this.f;
}

var RoomProperties = function(room, gui)
{
	var scope = this;
	this.gui = gui;
	this.room = room;		
	this.f = gui.addFolder('Current Room');
	this.namecontrol = f.add(room, 'name').name("Name");
	return this.f;
}

var Wall2DProperties = function(wall2d, gui)
{
	var scope = this;
	this.gui = gui;
	this.wall2d = wall2d;		
	this.walltype = 'Straight';
	this.walllength = BP3DJS.Dimensioning.cmToMeasureRaw( wall2d.wallSize);
	function onChangeWallType()
	{
		if(scope.walltype == 'Straight')
		{
			scope.wall2d.wallType = BP3DJS.WallTypes.STRAIGHT;
		}
		else if(scope.walltype == 'Curved')
		{
			scope.wall2d.wallType = BP3DJS.WallTypes.CURVED;
			
		}
		blueprint3d.floorplanner.view.draw();
	}
	
	function onChangeWallLength()
	{
		scope.wall2d.wallSize = BP3DJS.Dimensioning.cmFromMeasureRaw(scope.walllength);
		blueprint3d.floorplanner.view.draw();
	}
	
	
	this.options = ['Straight', 'Curved'];
	if(this.wall2d.wallType == BP3DJS.WallTypes.CURVED)
	{
		this.walltype = 'Curved';
	}
	this.f = gui.addFolder('Current Wall 2D');
	/*wall type 숨기기 */ 
	// this.typecontrol = f.add(this, 'walltype', this.options).name("Wall Type").onChange(()=>{onChangeWallType()});
	if(this.wall2d.wallType == BP3DJS.WallTypes.STRAIGHT)
	{
		this.lengthcontrol = f.add(this, 'walllength').name("Wall Length").onChange(()=>{onChangeWallLength()});
	}	
	return this.f;
}

var ItemProperties = function(gui)
{
	this.name = 'an item';
	this.width = 10;
	this.height = 10;
	this.depth = 10;
	this.fixed = false;
	this.currentItem = null;
	this.guiControllers = null;
	this.gui = gui;
	this.materialsfolder = null;
	this.materials = {};
	this.totalmaterials = -1;
	this.proportionalsize = false;
	this.changingdimension = 'w';

	this.setGUIControllers = function(guiControls)
	{
		this.guiControllers = guiControls;
	}

	this.setItem = function(item)
	{
		this.currentItem = item;
		if(this.materialsfolder)
		{
			this.gui.removeFolder(this.materialsfolder.name);
		}
		if(item)
		{
			var scope = this;
			var material = item.material;
			this.name = item.metadata.itemName;
			this.width = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
			this.height = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
			this.depth = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());
			this.fixed = item.fixed;
			this.proportionalsize = item.getProportionalResize();

			for (var i in this.guiControllers) // Iterate over gui controllers to update the values
			{
				this.guiControllers[i].updateDisplay();
		    }
			// 주석처리함.. 여기 주석처리하니까 currentitem 메뉴가 활성화됨.
			// this.materialsfolder =  this.gui.addFolder('Materials');
			// this.materials = {};
			// if(material.length)
			// {
			// 	this.totalmaterials = material.length;
			// 	for (var i=0;i<material.length;i++)
			// 	{
			// 		this.materials['mat_'+i] = '#'+material[i].color.getHexString();
			// 		var matname = (material[i].name) ? material[i].name : 'Material '+(i+1);
			// 		var ccontrol = this.materialsfolder.addColor(this.materials, 'mat_'+i).name(matname).onChange(()=>{scope.dimensionsChanged()});
			// 	}
			// 	return;
			// }
			// this.totalmaterials = 1;
			// var matname = (material.name) ? material.name : 'Material 1';
			// this.materials['mat_0'] = '#'+material.color.getHexString();
			// var ccontrol = this.materialsfolder.addColor(this.materials, 'mat_0').name(matname).onChange(()=>{scope.dimensionsChanged()});
			// return;
		}
		this.name = 'None';
		return;
	}

	this.dimensionsChanged = function()
	{
		if(this.currentItem)
		{
			var item = this.currentItem;

			var ow = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
			var oh = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
			var od = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());

			var h = BP3DJS.Dimensioning.cmFromMeasureRaw(this.height);
			var w = BP3DJS.Dimensioning.cmFromMeasureRaw(this.width);
			var d = BP3DJS.Dimensioning.cmFromMeasureRaw(this.depth);

			this.currentItem.resize(h,w,d);

			if( w != ow)
			{
				this.height = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
				this.depth = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());
			}

			if( h != oh)
			{
				this.width = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
				this.depth = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());
			}

			if( d != od)
			{
				this.width = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
				this.height = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
			}
			for (var i=0;i<this.totalmaterials;i++)
			{
				this.currentItem.setMaterialColor(this.materials['mat_'+i], i);
			}

			this.guiControllers.forEach((control)=>{control.updateDisplay()}); // Iterate over gui controllers to update the values
		}
	}

	this.proportionFlagChange = function()
	{
		if(this.currentItem)
		{
			this.currentItem.setProportionalResize(this.proportionalsize);
		}
	}

	this.lockFlagChanged = function()
	{
		if(this.currentItem)
		{
			this.currentItem.setFixed(this.fixed);
		}
	}

	this.deleteItem = function()
	{
		if(this.currentItem)
		{
			this.currentItem.remove();
			this.setItem(null);
		}
	}
}

var WallProperties = function()
{
	this.textures = [
		['rooms/textures/wallmap.png', true, 1], ['rooms/textures/wallmap_yellow.png', true, 1],
		['rooms/textures/light_brick.jpg', false, 50], ['rooms/textures/marbletiles.jpg', false, 300],
		['rooms/textures/light_brick.jpg', false, 100], ['rooms/textures/light_fine_wood.jpg', false, 300],
		['rooms/textures/hardwood.png', false, 300]];

	this.floormaterialname = 0;
	this.wallmaterialname = 0;

	this.forAllWalls = false;

	this.currentWall = null;
	this.currentFloor = null;

	this.wchanged = function()
	{
		if(this.currentWall)
		{
			this.currentWall.setTexture(this.textures[this.wallmaterialname][0], this.textures[this.wallmaterialname][1], this.textures[this.wallmaterialname][2]);
		}
		if(this.currentFloor && this.forAllWalls)
		{
			this.currentFloor.setRoomWallsTexture(this.textures[this.wallmaterialname][0], this.textures[this.wallmaterialname][1], this.textures[this.wallmaterialname][2]);
		}
	}

	this.fchanged = function()
	{
		if(this.currentFloor)
		{
			this.currentFloor.setTexture(this.textures[this.floormaterialname][0], this.textures[this.floormaterialname][1], this.textures[this.floormaterialname][2]);
		}
	}


	this.setWall = function(wall)
	{
		this.currentWall = wall;
	}

	this.setFloor = function(floor)
	{
		this.currentFloor = floor;
	}
}

function addBlueprintListeners(blueprint3d)
{
	var three = blueprint3d.three;	 
	var currentFolder = undefined; 
	
	function closeCurrent3DSelectionFolders()
	{
		if(itemPropFolder && itemPropFolder != null)
		{
			itemPropFolder.close();
			selectionsFolder.removeFolder(itemPropFolder.name);
		}
		if(wallPropFolder && wallPropFolder != null)
		{
			wallPropFolder.close();
			selectionsFolder.removeFolder(wallPropFolder.name);
		}
	}
	function wallClicked(wall)
	{
		closeCurrent3DSelectionFolders();
		
		aWall = new WallProperties();
		aWall.setWall(wall);
		aWall.setFloor(null);		
		wallPropFolder = getWallAndFloorPropertiesFolder(selectionsFolder, aWall);
//		selectionsFolder.addFolder(wallPropFolder);
		
		wallPropFolder.open();
		selectionsFolder.open();
	}

	function floorClicked(floor)
	{
		closeCurrent3DSelectionFolders();
		
		aWall = new WallProperties();
		aWall.setFloor(floor);
		aWall.setWall(null);
		
		wallPropFolder = getWallAndFloorPropertiesFolder(selectionsFolder, aWall);
//		selectionsFolder.addFolder(wallPropFolder);
		
		wallPropFolder.open();
		selectionsFolder.open();
	}

	function itemSelected(item)
	{
		closeCurrent3DSelectionFolders();
		
		anItem = new ItemProperties(selectionsFolder, item);
		anItem.setItem(item);  // 주석 해제
		
		itemPropFolder = getItemPropertiesFolder(selectionsFolder, anItem);
		// selectionsFolder.addFolder(itemPropFolder); 
		itemPropFolder.open();
		selectionsFolder.open();
		
	}
	function itemUnselected()
	{
		closeCurrent3DSelectionFolders();
		if(anItem!=null)
		{
			anItem.setItem(undefined);
		}
	}

	three.addEventListener(BP3DJS.EVENT_ITEM_SELECTED, function(o){itemSelected(o.item);});
	three.addEventListener(BP3DJS.EVENT_ITEM_UNSELECTED, function(o){itemUnselected();});
	three.addEventListener(BP3DJS.EVENT_WALL_CLICKED, (o)=>{wallClicked(o.item);});
    three.addEventListener(BP3DJS.EVENT_FLOOR_CLICKED, (o)=>{floorClicked(o.item);});
    three.addEventListener(BP3DJS.EVENT_FPS_EXIT, ()=>{$('#showDesign').trigger('click')});
    
    function echoEvents(o)
    {	
//    	console.log(o.type, o.item);
    }	
    
    function addGUIFolder(o)
    {	
//    	console.log(o.type, o.item);
    	if(currentFolder)
		{
    		selectionsFolder.removeFolder(currentFolder.name);
		}
    	if(o.type == BP3DJS.EVENT_CORNER_2D_CLICKED)
		{
    		currentFolder = CornerProperties(o.item, selectionsFolder);//getCornerPropertiesFolder(gui, o.item);
		}
    	else if(o.type == BP3DJS.EVENT_ROOM_2D_CLICKED)
		{
    		currentFolder = RoomProperties(o.item, selectionsFolder);//getRoomPropertiesFolder(gui, );
		}
    	else if(o.type == BP3DJS.EVENT_WALL_2D_CLICKED)
		{
    		currentFolder = Wall2DProperties(o.item, selectionsFolder);
		}
    	if(currentFolder)
		{
    		currentFolder.open();
    		selectionsFolder.open();
		}
    }	
    
    var model_floorplan = blueprint3d.model.floorplan;
    model_floorplan.addEventListener(BP3DJS.EVENT_CORNER_2D_DOUBLE_CLICKED, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_WALL_2D_DOUBLE_CLICKED, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_ROOM_2D_DOUBLE_CLICKED, echoEvents);
    
    model_floorplan.addEventListener(BP3DJS.EVENT_NOTHING_CLICKED, addGUIFolder);
    model_floorplan.addEventListener(BP3DJS.EVENT_CORNER_2D_CLICKED, addGUIFolder);
    model_floorplan.addEventListener(BP3DJS.EVENT_WALL_2D_CLICKED, addGUIFolder);
    model_floorplan.addEventListener(BP3DJS.EVENT_ROOM_2D_CLICKED, addGUIFolder);
    
    model_floorplan.addEventListener(BP3DJS.EVENT_CORNER_2D_HOVER, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_WALL_2D_HOVER, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_ROOM_2D_HOVER, echoEvents);
    
    model_floorplan.addEventListener(BP3DJS.EVENT_CORNER_ATTRIBUTES_CHANGED, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_WALL_ATTRIBUTES_CHANGED, echoEvents);
    model_floorplan.addEventListener(BP3DJS.EVENT_ROOM_ATTRIBUTES_CHANGED, echoEvents);
    
    
    function deleteEvent(evt)
    {
    	console.log('DELETED ', evt);
    }
    
    model_floorplan.addEventListener(BP3DJS.EVENT_DELETED, deleteEvent);
    
    BP3DJS.Configuration.setValue(BP3DJS.configSystemUI, false);
    
    
// three.skybox.toggleEnvironment(this.checked);
// currentTarget.setTexture(textureUrl, textureStretch, textureScale);
// three.skybox.setEnvironmentMap(textureUrl);
}

function getCornerPropertiesFolder(gui, corner)
{
	var f = gui.addFolder('Current Corner');
	var xcontrol = f.add(corner, 'x').name("x").step(0.01);
	var ycontrol = f.add(corner, 'y').name("y").step(0.01);
	var elevationctonrol = f.add(corner, 'elevation').name("Elevation").step(0.01);
	// elevationctonrol.add(BP3DJS.config, 'elevation', 4, 10,).step(0.01).onChange(onChangeElevation); 
	// elevation 시작값 2.5에서 4로 변경하려고 시도중
	return f;	
}

function getRoomPropertiesFolder(gui, room)
{
	var f = gui.addFolder('Current Room');
	var namecontrol = f.add(corner, 'name').name("Name");
	return f;	
}

function getCameraRangePropertiesFolder(gui, camerarange)
{
	var f = gui.addFolder('Camera Limits');
	// var ficontrol = f.add(camerarange, 'ratio', -1, 1).name("Range").step(0.01).onChange(function(){camerarange.change()});
	// var ficontrol2 = f.add(camerarange, 'ratio2', -1, 1).name("Range 2").step(0.01).onChange(function(){camerarange.change()});
	var flockcontrol = f.add(camerarange, 'locked').name("Lock View").onChange(function(){camerarange.changeLock()});
	// var resetControl = f.add(camerarange, 'reset').name('Reset');
	
	
	return f;

}

function construct2dInterfaceFolder(f, global, floorplanner)
{
	function onChangeSnapResolution()
	{
		BP3DJS.Configuration.setValue(BP3DJS.snapTolerance, BP3DJS.Dimensioning.cmFromMeasureRaw(view2dindirect.snapValue));
	}
	
	function onChangeGridResolution()
	{
		BP3DJS.Configuration.setValue(BP3DJS.gridSpacing, BP3DJS.Dimensioning.cmFromMeasureRaw(view2dindirect.gridResValue));
		blueprint3d.floorplanner.view.draw();
	}
	
	var units = BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit);
	var view2dindirect = {
			'snapValue': BP3DJS.Dimensioning.cmToMeasureRaw(BP3DJS.Configuration.getNumericValue(BP3DJS.snapTolerance)), 
			'gridResValue': BP3DJS.Dimensioning.cmToMeasureRaw(BP3DJS.Configuration.getNumericValue(BP3DJS.gridSpacing))
			};	
	
	f.removeFolder('2D Editor');
	
	var view2df = f.addFolder('2D Editor');
	view2df.add(BP3DJS.config, 'snapToGrid',).name("Snap To Grid");
	view2df.add(view2dindirect, 'snapValue', 0.1).name(`Snap Every(${units})`).onChange(onChangeSnapResolution);
	view2df.add(view2dindirect, 'gridResValue', 0.1).name(`Grid Resolution(${units})`).onChange(onChangeGridResolution);
	view2df.add(BP3DJS.config, 'scale', 0.25, 5, ).step(0.25).onChange(()=>{
//	view2df.add(BP3DJS.config, 'scale', 1.0, 10, ).step(0.25).onChange(()=>{
		blueprint3d.floorplanner.zoom();
//		blueprint3d.floorplanner.view.zoom();
		blueprint3d.floorplanner.view.draw();
		});
	
	/* Wall Measurements 제거 */ 
	// var wallf = view2df.addFolder('Wall Measurements');
	// wallf.add(BP3DJS.wallInformation, 'exterior').name('Exterior');
	// wallf.add(BP3DJS.wallInformation, 'interior').name('Interior');
	// wallf.add(BP3DJS.wallInformation, 'midline').name('Midline');
	// wallf.add(BP3DJS.wallInformation, 'labels').name('Labels');
	// wallf.add(BP3DJS.wallInformation, 'exteriorlabel').name('Label for Exterior');
	// wallf.add(BP3DJS.wallInformation, 'interiorlabel').name('Label for Interior');
	// wallf.add(BP3DJS.wallInformation, 'midlinelabel').name('Label for Midline');
	
	/* carbon sheet 제거 */ 
	// var carbonPropsFolder = getCarbonSheetPropertiesFolder(view2df, floorplanner.carbonSheet, global);
	
	view2df.open();
	return view2df;
}

function getGlobalPropertiesFolder(gui, global, floorplanner)
{
	var f = gui.addFolder('인터페이스 및 구성');
	
	var unitsf = f.addFolder('단위');	
	var ficontrol = unitsf.add(global.units, 'a',).name("Feets'' Inches'").onChange(function(){global.setUnit("a")});
	var icontrol = unitsf.add(global.units, 'b',).name("Inches'").onChange(function(){global.setUnit("b")});
	var ccontrol = unitsf.add(global.units, 'c',).name('Cm').onChange(function(){global.setUnit("c")});
	var mmcontrol = unitsf.add(global.units, 'd',).name('mm').onChange(function(){global.setUnit("d")});
	var mcontrol = unitsf.add(global.units, 'e',).name('m').onChange(function(){global.setUnit("e")});
	global.setGUIControllers([ficontrol, icontrol, ccontrol, mmcontrol, mcontrol]);
	
	// BP3DJS.Dimensioning.cmFromMeasureRaw(scope.x);
	// BP3DJS.Dimensioning.cmToMeasureRaw(scope.x);
	
	f.open();
	return f;
}
/* carbon sheet 제거 */ 
// function getCarbonSheetPropertiesFolder(gui, carbonsheet, globalproperties)
// {
// 	var f = gui.addFolder('Carbon Sheet');
// 	var url = f.add(carbonsheet, 'url').name('Url');
// 	var width = f.add(carbonsheet, 'width').name('Real Width').max(1000.0).step(0.01);
// 	var height = f.add(carbonsheet, 'height').name('Real Height').max(1000.0).step(0.01);
// 	var proportion = f.add(carbonsheet, 'maintainProportion').name('Maintain Proportion');
// 	var x = f.add(carbonsheet, 'x').name('Move in X');
// 	var y = f.add(carbonsheet, 'y').name('Move in Y');

// 	var ax = f.add(carbonsheet, 'anchorX').name('Anchor X');
// 	var ay = f.add(carbonsheet, 'anchorY').name('Anchor Y');
// 	var transparency = f.add(carbonsheet, 'transparency').name('Transparency').min(0).max(1.0).step(0.05);
// 	carbonsheet.addEventListener(BP3DJS.EVENT_UPDATED, function(){
// 		url.updateDisplay();
// 		width.updateDisplay();
// 		height.updateDisplay();
// 		x.updateDisplay();
// 		y.updateDisplay();
// 		ax.updateDisplay();
// 		ay.updateDisplay();
// 		transparency.updateDisplay(width);
// 	});

// 	globalproperties.guiControllers.push(width);
// 	globalproperties.guiControllers.push(height);
// 	return f;
// }

function getItemPropertiesFolder(gui, anItem)
{
	var f = gui.addFolder('Current Item (3D)');
	// var inamecontrol = f.add(anItem, 'name');
	var wcontrol = f.add(anItem, 'width', 0.05, 5.1).step(0.1); // 최대치 1000.1 -> 5.1 로 변경
	var hcontrol = f.add(anItem, 'height', 0.05, 5.1).step(0.1); // 최대치 1000.1 -> 5.1 로 변경
	var dcontrol = f.add(anItem, 'depth', 0.05, 5.1).step(0.1); // 최대치 1000.1 -> 5.1 로 변경
	var pcontrol = f.add(anItem, 'proportionalsize').name('Maintain Size Ratio');
	var lockcontrol = f.add(anItem, 'fixed').name('Locked in place');
	var deleteItemControl = f.add(anItem, 'deleteItem').name('Delete Item');

	function changed()
	{
		anItem.dimensionsChanged();
	}

	function lockChanged()
	{
		anItem.lockFlagChanged();
	}

	function proportionFlagChanged()
	{
		anItem.proportionFlagChange();
	}
	// 이부분도 필요없네
	// function deleteItem()
	// {
	// 	anItem.deleteItem();
	// }

	wcontrol.onChange(changed);
	hcontrol.onChange(changed);
	dcontrol.onChange(changed);
	pcontrol.onChange(proportionFlagChanged);
	lockcontrol.onChange(lockChanged);
	

	// anItem.setGUIControllers([inamecontrol, wcontrol, hcontrol, dcontrol, pcontrol, lockcontrol, deleteItemControl]);
    // 주석처리해도 문제없네. 왜지? 해도되고 안해도 되고
	return f;
}

function getWallAndFloorPropertiesFolder(gui, aWall)
{
	var f = gui.addFolder('Wall and Floor (3D)');
	var wcontrol = f.add(aWall, 'wallmaterialname', {Grey: 0, Yellow: 1, Checker: 2, Marble: 3, Bricks: 4}).name('Wall');
	var fcontrol = f.add(aWall, 'floormaterialname', {'Fine Wood': 5, 'Hard Wood': 6}).name('Floor');
	var multicontrol = f.add(aWall, 'forAllWalls').name('All Walls In Room');
	function wchanged()
	{
		aWall.wchanged();
	}

	function fchanged()
	{
		aWall.fchanged();
	}

	wcontrol.onChange(wchanged);
	fcontrol.onChange(fchanged);
	return f;
}

function datGUI(three, floorplanner)
{
	gui = new dat.GUI();	
	aCameraRange = new CameraProperties();	
	aCameraRange.three = three;
	aGlobal = new GlobalProperties();
	globalPropFolder = getGlobalPropertiesFolder(gui, aGlobal, floorplanner);	

	f3d = globalPropFolder.addFolder('3D Editor')
	cameraPropFolder = getCameraRangePropertiesFolder(f3d, aCameraRange);
	
	var view2df = construct2dInterfaceFolder(globalPropFolder, aGlobal, floorplanner);
	view2df.open();
	
	selectionsFolder = gui.addFolder('Selections');
}


$(document).ready(function()
{
	dat.GUI.prototype.removeFolder = function(name)
	{
		  var folder = this.__folders[name];
		  if (!folder) {
		    return;
		  }
		  folder.close();
		  this.__ul.removeChild(folder.domElement.parentNode);
		  delete this.__folders[name];
		  this.onResize();
	}
	// main setup
	var opts =
	{
			floorplannerElement: 'floorplanner-canvas',
			threeElement: '#viewer',
			threeCanvasElement: 'three-canvas',
			textureDir: "models/textures/",
			widget: false
	}
	blueprint3d = new BP3DJS.BlueprintJS(opts);
	var viewerFloorplanner = new ViewerFloorplanner(blueprint3d);
	
	blueprint3d.model.addEventListener(BP3DJS.EVENT_LOADED, function(){console.log('LOAD SERIALIZED JSON ::: ');});
	
	
	mainControls(blueprint3d);
	blueprint3d.model.loadSerialized(myhome);


	addBlueprintListeners(blueprint3d);
	datGUI(blueprint3d.three, blueprint3d.floorplanner);
	blueprint3d.three.stopSpin();
//	gui.closed = true;


	$('#showAddItems').hide();
	$('#viewcontrols').hide();

	$('.card').flip({trigger:'manual', axis:'x'});
	$('#showFloorPlan').click(function()
	{
		$('.card').flip(false);
		$(this).addClass('active');
		$('#showDesign').removeClass('active');
		$('#showFirstPerson').removeClass('active');
		$('#showAddItems').hide();
		$('#viewcontrols').hide();
//		gui.closed = true;
		blueprint3d.three.pauseTheRendering(true);
		blueprint3d.three.getController().setSelectedObject(null);
	});

	$('#showDesign').click(function()
	{
		blueprint3d.model.floorplan.update();
		$('.card').flip(true);
//		gui.closed = false;
		$(this).addClass('active');
		$('#showFloorPlan').removeClass('active');
		$('#showFirstPerson').removeClass('active');

		$('#showAddItems').show();
		$('#viewcontrols').show();

		blueprint3d.three.pauseTheRendering(false);
		blueprint3d.three.switchFPSMode(false);
	});
	$('#showFirstPerson').click(function()
	{
		blueprint3d.model.floorplan.update();
		$('.card').flip(true);
//		gui.closed = true;
		$(this).addClass('active');
		$('#showFloorPlan').removeClass('active');
		$('#showDesign').removeClass('active');

		$('#showAddItems').hide();
		$('#viewcontrols').hide();

		blueprint3d.three.pauseTheRendering(false);
		blueprint3d.three.switchFPSMode(true);
	});

	$('#showSwitchCameraMode').click(function()
	{
		$(this).toggleClass('active');
		blueprint3d.three.switchOrthographicMode($(this).hasClass('active'));
	});

	$('#showSwitchWireframeMode').click(function()
	{
		$(this).toggleClass('wireframe-active');
		blueprint3d.three.switchWireframe($(this).hasClass('wireframe-active'));
	});

	$('#topview, #isometryview, #frontview, #leftview, #rightview').click(function(){
		blueprint3d.three.switchView($(this).attr('id'));
	});



	$("#add-items").find(".add-item").mousedown(function(e) {
	      var modelUrl = $(this).attr("model-url");
	      var itemType = parseInt($(this).attr("model-type"));
	      var itemFormat = $(this).attr('model-format');
	      var metadata = {
	        itemName: $(this).attr("model-name"),
	        resizable: true,
	        modelUrl: modelUrl,
	        itemType: itemType,
	        format: itemFormat,

	      }
	      console.log('ITEM TYPE ::: ', itemType);
	      if([2,3,7,9].indexOf(metadata.itemType) != -1 && aWall.currentWall)
    	  {
	    	  var placeAt = aWall.currentWall.center.clone();
	    	  blueprint3d.model.scene.addItem(itemType, modelUrl, metadata, null, null, null, false, {position: placeAt, edge: aWall.currentWall});
    	  }
	      else if(aWall.currentFloor)
    	  {
	    	  var placeAt = aWall.currentFloor.center.clone();
	    	  blueprint3d.model.scene.addItem(itemType, modelUrl, metadata, null, null, null, false, {position: placeAt});
    	  }
	      else
    	  {
	    	  blueprint3d.model.scene.addItem(itemType, modelUrl, metadata);
    	  }
	    });
});
