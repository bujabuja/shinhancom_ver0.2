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

var myhome = '{"floorplan":{"corners":{"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":0,"y":0,"elevation":2.5},"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":0,"y":10,"elevation":2.5},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":10,"y":10,"elevation":2.5},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":10,"y":0,"elevation":2.5}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}}],"rooms":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed":{"name":"A New Room"}},"wallTextures":[],"floorTextures":{},"newFloorTextures":{},"carbonSheet":{"url":"","transparency":1,"x":0,"y":0,"anchorX":0,"anchorY":0,"width":0.01,"height":0.01}},"items":[]}';
var myhome1 = '{"floorplan":{"corners":{"16b020d0-fa1e-f198-bbc6-2ad1a59268d0":{"x":135.31850000000009,"y":-887.476},"8d92c038-8852-f4ea-e8bb-ac03f938f703":{"x":-44.06899999999996,"y":359.15600000000006},"5eee22b8-d773-5b93-c4c8-bf4286ac436d":{"x":-220.09100000000012,"y":-887.476},"4cd3d434-0921-ccfa-0e29-29d3778be8be":{"x":-220.09100000000012,"y":-105.15599999999995},"79dd4e37-0bc6-c662-2197-ec97c356a7d4":{"x":135.31850000000009,"y":-265.6840000000001},"e8c4dc18-0a85-92a9-85b2-37dee45f4a00":{"x":-220.09100000000012,"y":-403.85999999999984},"ea1bedfe-ca15-1744-4108-5450cc842661":{"x":-66.42100000000008,"y":-403.85999999999984},"b1c87f68-9c9e-99d2-859c-fb793355d90b":{"x":-66.42100000000008,"y":-265.6840000000001},"c8a304a1-b9bd-6b76-92e9-2321af0bd415":{"x":-44.06899999999996,"y":-105.15599999999995},"263a453c-9952-75d6-8810-8477a3265bc6":{"x":188.1505000000002,"y":-105.15599999999995},"483d787d-0016-0751-aeda-087bab3a0ed6":{"x":188.1505000000002,"y":-188.4679999999999},"e3e27b42-3226-3fe2-5153-1bbb7a498584":{"x":326.3265000000001,"y":-188.4679999999999},"22ad9451-b853-12b7-f471-9299192489e4":{"x":326.3265000000001,"y":-381.5079999999999},"3eb61572-0237-0254-1e1a-8526c2a71ec6":{"x":452.31050000000005,"y":-381.5079999999999},"1b0e7027-3dc4-12cb-0937-370a669217a5":{"x":604.52,"y":-887.476},"d326e87e-4117-7033-7844-e7486d249b1e":{"x":604.52,"y":-381.5079999999999},"4f68435b-ee33-c4cb-2b60-69945652cacd":{"x":326.3265000000001,"y":-499.36400000000003},"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a":{"x":135.31850000000009,"y":-499.36400000000003},"56aa05eb-95de-2e11-d759-38814b8d9ce0":{"x":452.31050000000005,"y":-499.36400000000003},"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0":{"x":604.52,"y":-499.36400000000003},"007d1f79-7d8f-827e-60ce-b3efb21444eb":{"x":604.52,"y":-105.15599999999995},"b8dc05af-4819-456f-63e1-6a975118bbb4":{"x":604.52,"y":359.15600000000006},"bf238f73-f50e-a2c6-d877-0c39e7c2c330":{"x":326.3265000000001,"y":-105.15599999999995}},"walls":[{"corner1":"4cd3d434-0921-ccfa-0e29-29d3778be8be","corner2":"c8a304a1-b9bd-6b76-92e9-2321af0bd415","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"5eee22b8-d773-5b93-c4c8-bf4286ac436d","corner2":"16b020d0-fa1e-f198-bbc6-2ad1a59268d0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"16b020d0-fa1e-f198-bbc6-2ad1a59268d0","corner2":"1b0e7027-3dc4-12cb-0937-370a669217a5","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"16b020d0-fa1e-f198-bbc6-2ad1a59268d0","corner2":"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"8d92c038-8852-f4ea-e8bb-ac03f938f703","corner2":"c8a304a1-b9bd-6b76-92e9-2321af0bd415","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"8d92c038-8852-f4ea-e8bb-ac03f938f703","corner2":"b8dc05af-4819-456f-63e1-6a975118bbb4","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"4cd3d434-0921-ccfa-0e29-29d3778be8be","corner2":"e8c4dc18-0a85-92a9-85b2-37dee45f4a00","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"e8c4dc18-0a85-92a9-85b2-37dee45f4a00","corner2":"5eee22b8-d773-5b93-c4c8-bf4286ac436d","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"e8c4dc18-0a85-92a9-85b2-37dee45f4a00","corner2":"ea1bedfe-ca15-1744-4108-5450cc842661","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"ea1bedfe-ca15-1744-4108-5450cc842661","corner2":"b1c87f68-9c9e-99d2-859c-fb793355d90b","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"b1c87f68-9c9e-99d2-859c-fb793355d90b","corner2":"79dd4e37-0bc6-c662-2197-ec97c356a7d4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"c8a304a1-b9bd-6b76-92e9-2321af0bd415","corner2":"263a453c-9952-75d6-8810-8477a3265bc6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"263a453c-9952-75d6-8810-8477a3265bc6","corner2":"bf238f73-f50e-a2c6-d877-0c39e7c2c330","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"263a453c-9952-75d6-8810-8477a3265bc6","corner2":"483d787d-0016-0751-aeda-087bab3a0ed6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"483d787d-0016-0751-aeda-087bab3a0ed6","corner2":"e3e27b42-3226-3fe2-5153-1bbb7a498584","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"e3e27b42-3226-3fe2-5153-1bbb7a498584","corner2":"bf238f73-f50e-a2c6-d877-0c39e7c2c330","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"007d1f79-7d8f-827e-60ce-b3efb21444eb","corner2":"d326e87e-4117-7033-7844-e7486d249b1e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"d326e87e-4117-7033-7844-e7486d249b1e","corner2":"3eb61572-0237-0254-1e1a-8526c2a71ec6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"22ad9451-b853-12b7-f471-9299192489e4","corner2":"e3e27b42-3226-3fe2-5153-1bbb7a498584","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"4f68435b-ee33-c4cb-2b60-69945652cacd","corner2":"22ad9451-b853-12b7-f471-9299192489e4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"4f68435b-ee33-c4cb-2b60-69945652cacd","corner2":"56aa05eb-95de-2e11-d759-38814b8d9ce0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"56aa05eb-95de-2e11-d759-38814b8d9ce0","corner2":"3eb61572-0237-0254-1e1a-8526c2a71ec6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"3eb61572-0237-0254-1e1a-8526c2a71ec6","corner2":"22ad9451-b853-12b7-f471-9299192489e4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"1b0e7027-3dc4-12cb-0937-370a669217a5","corner2":"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"4f68435b-ee33-c4cb-2b60-69945652cacd","corner2":"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a","corner2":"79dd4e37-0bc6-c662-2197-ec97c356a7d4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"56aa05eb-95de-2e11-d759-38814b8d9ce0","corner2":"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0","corner2":"d326e87e-4117-7033-7844-e7486d249b1e","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"bf238f73-f50e-a2c6-d877-0c39e7c2c330","corner2":"007d1f79-7d8f-827e-60ce-b3efb21444eb","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"007d1f79-7d8f-827e-60ce-b3efb21444eb","corner2":"b8dc05af-4819-456f-63e1-6a975118bbb4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{}},"items":[{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":45.60973158833667,"ypos":110.5,"zpos":-265.1840000000001,"rotation":0,"scale_x":1.1771369721936153,"scale_y":0.997292171703541,"scale_z":0.9994150405405762,"fixed":true},{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":226.19923363943076,"ypos":110.800000297771,"zpos":-499.86400000000003,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":71.15100000000002,"ypos":110.5,"zpos":-104.65599999999995,"rotation":0,"scale_x":1.5695159629248197,"scale_y":0.997292171703541,"scale_z":0.9994150405405762,"fixed":true},{"item_name":"Dresser - Dark Wood","item_type":1,"model_url":"models/js/DWR_MATERA_DRESSER2.js","xpos":549.2058844807959,"ypos":57.785001860754996,"zpos":329.7799662755366,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"NYC Poster","item_type":2,"model_url":"models/js/nyc-poster2.js","xpos":598.25,"ypos":183.62661902009813,"zpos":117.68045683694481,"rotation":-1.5707963267948966,"scale_x":0.7142842857142857,"scale_y":0.8421024709178014,"scale_z":1.0129608601270457,"fixed":true},{"item_name":"Blue Rug","item_type":8,"model_url":"models/js/cb-blue-block-60x96.js","xpos":184.68588061910788,"ypos":0.250005,"zpos":122.38666413809182,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Coffee Table - Wood","item_type":1,"model_url":"models/js/ik-stockholmcoffee-brown.js","xpos":272.6962787349586,"ypos":24.01483158034958,"zpos":126.73694950426048,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":512.6434934035085,"ypos":157.07894848817114,"zpos":-886.976,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":-120.92122752323827,"ypos":168.10483780571963,"zpos":-886.976,"rotation":0,"scale_x":0.6603999999996408,"scale_y":0.5810892360052958,"scale_z":1.0332383005354289,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":438.5412557798525,"ypos":159.40045156749102,"zpos":358.65600000000006,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":307.85036934553574,"ypos":159.1968280144008,"zpos":358.6560000000001,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":182.15084546678992,"ypos":159.0605552363389,"zpos":358.6560000000001,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":-103.81899999999992,"ypos":110.80000022010701,"zpos":-105.65599999999995,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":325.8265000000001,"ypos":110.5,"zpos":-280.9525143309595,"rotation":-1.5707963267948966,"scale_x":1.2294541709577755,"scale_y":0.9972921724026447,"scale_z":0.9482825135211149,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":325.8265000000001,"ypos":110.80000022010701,"zpos":-439.4767618863214,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":250.42795654332926,"ypos":110.80000022010701,"zpos":-188.9679999999999,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":527.7045416935933,"ypos":110.80000022010701,"zpos":-499.86400000000003,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":17.379725040490854,"ypos":110.5,"zpos":-886.976,"rotation":0,"scale_x":1.1771369721936145,"scale_y":0.9972921724026447,"scale_z":0.948282513521117,"fixed":true},{"item_name":"Media Console - White","item_type":9,"model_url":"models/js/cb-clapboard_baked.js","xpos":574.12,"ypos":67.89999754396,"zpos":131.42070309211852,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Sofa - Grey","item_type":1,"model_url":"models/js/cb-rochelle-gray_baked.js","xpos":12.257267191489404,"ypos":42.54509923821,"zpos":136.8119273061203,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true}]}';

var myhome3 = '{"floorplan":{"version":"0.0.2a","corners":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":0,"y":10,"elevation":2.5},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":10,"y":10,"elevation":2.5},"b114dc7c-aa00-5ad1-e54c-4116d5f398d8":{"x":10,"y":3.354,"elevation":2.5},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":10,"y":0,"elevation":2.5},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":0,"y":0,"elevation":2.5},"c39a7bad-e67b-31f5-8a39-49cf60233f94":{"x":15.079,"y":0,"elevation":2.5},"51340f8e-b3b7-be15-d300-36df530d6c40":{"x":15.079,"y":2.521,"elevation":2.5},"1e4871bc-56fc-d80b-b050-107c80581436":{"x":15.079,"y":9.999,"elevation":2.5},"fef69e69-3b76-226b-981f-cb384a644c12":{"x":-5.058,"y":0,"elevation":2.5},"c9a4fd4d-94a1-621a-8f22-fde28c15b8ef":{"x":-5.058,"y":3.517,"elevation":2.5},"b1d78f82-adb6-03af-76f5-086de0c2c730":{"x":-5.058,"y":9.978,"elevation":2.5},"f6eb8265-b201-407f-930f-5e7b961a7840":{"x":-5.058,"y":13.006,"elevation":2.5},"03f2060d-46dc-5ee5-3866-dc3955e52f81":{"x":15.099,"y":13.006,"elevation":2.5},"934616a9-0f01-6196-7e1c-77cc4393a919":{"x":10,"y":2.521,"elevation":2.5},"1b99c7d7-a642-b393-3233-53b188b9fcf1":{"x":15.079,"y":3.354,"elevation":2.5},"b45e22a7-8ae1-f546-97e6-b7a0af7c6015":{"x":0,"y":3.517,"elevation":2.5}},"walls":[{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":353.5533905932738,"y":1353.5533905932737},"b":{"x":646.4466094067263,"y":1353.553390593274}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"b114dc7c-aa00-5ad1-e54c-4116d5f398d8","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1353.5533905932737,"y":646.4466094067262},"b":{"x":1353.553390593274,"y":353.5533905932737}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":646.4466094067262,"y":-353.5533905932737},"b":{"x":353.5533905932737,"y":-353.5533905932738}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"c39a7bad-e67b-31f5-8a39-49cf60233f94","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1179.559867587387,"y":179.55986758738715},"b":{"x":1328.312132412613,"y":179.55986758738717}},{"corner1":"c39a7bad-e67b-31f5-8a39-49cf60233f94","corner2":"51340f8e-b3b7-be15-d300-36df530d6c40","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1154.3638642407223,"y":353.5081357592779},"b":{"x":1154.3638642407223,"y":646.3638642407223}},{"corner1":"1e4871bc-56fc-d80b-b050-107c80581436","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1328.266877578617,"y":820.3573872466088},"b":{"x":1179.5146127533912,"y":820.3948775786168}},{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"fef69e69-3b76-226b-981f-cb384a644c12","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-178.84144709770166,"y":-178.84144709770163},"b":{"x":-326.9985529022985,"y":-178.84144709770166}},{"corner1":"fef69e69-3b76-226b-981f-cb384a644c12","corner2":"c9a4fd4d-94a1-621a-8f22-fde28c15b8ef","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-858.6297152695925,"y":352.7897152695923},"b":{"x":-858.6297152695925,"y":645.0502847304076}},{"corner1":"b1d78f82-adb6-03af-76f5-086de0c2c730","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-327.76222822598,"y":1177.445122421383},"b":{"x":-179.60512242138313,"y":1178.0777717740202}},{"corner1":"b1d78f82-adb6-03af-76f5-086de0c2c730","corner2":"f6eb8265-b201-407f-930f-5e7b961a7840","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-612.8846529631445,"y":1104.8846529631442},"b":{"x":-612.8846529631445,"y":1193.5633470368557}},{"corner1":"f6eb8265-b201-407f-930f-5e7b961a7840","corner2":"03f2060d-46dc-5ee5-3866-dc3955e52f81","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":206.83312576804803,"y":2013.281125768048},"b":{"x":797.2308742319519,"y":2013.2811257680482}},{"corner1":"03f2060d-46dc-5ee5-3866-dc3955e52f81","corner2":"1e4871bc-56fc-d80b-b050-107c80581436","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1615.5118119837732,"y":1193.5633470368557},"b":{"x":1614.9166529631443,"y":1105.4798119837733}},{"corner1":"934616a9-0f01-6196-7e1c-77cc4393a919","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1089.0466503889977,"y":163.0118592789941},"b":{"x":1089.084140721006,"y":89.17465038899795}},{"corner1":"51340f8e-b3b7-be15-d300-36df530d6c40","corner2":"1b99c7d7-a642-b393-3233-53b188b9fcf1","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1242.1796802854099,"y":517.1931606939614},"b":{"x":1242.7748393060388,"y":736.2116802854098}},{"corner1":"b45e22a7-8ae1-f546-97e6-b7a0af7c6015","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-227.82506636736227,"y":580.1217157199994},"b":{"x":-228.45771571999936,"y":770.0149336326378}},{"corner1":"b45e22a7-8ae1-f546-97e6-b7a0af7c6015","corner2":"c9a4fd4d-94a1-621a-8f22-fde28c15b8ef","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-179.55986758738717,"y":172.1041324126129},"b":{"x":-328.3121324126129,"y":172.10413241261287}},{"corner1":"c9a4fd4d-94a1-621a-8f22-fde28c15b8ef","corner2":"b1d78f82-adb6-03af-76f5-086de0c2c730","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-735.6112952303138,"y":580.8401362096848},"b":{"x":-735.0161362096849,"y":770.1007047696862}},{"corner1":"b114dc7c-aa00-5ad1-e54c-4116d5f398d8","corner2":"934616a9-0f01-6196-7e1c-77cc4393a919","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1033.313233442046,"y":303.84275328783264},"b":{"x":1031.5652467121674,"y":279.44123344204627}},{"corner1":"b114dc7c-aa00-5ad1-e54c-4116d5f398d8","corner2":"1b99c7d7-a642-b393-3233-53b188b9fcf1","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1180.9967085667583,"y":516.4047085667584},"b":{"x":1330.939291433242,"y":516.4047085667584}},{"corner1":"1b99c7d7-a642-b393-3233-53b188b9fcf1","corner2":"1e4871bc-56fc-d80b-b050-107c80581436","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1275.57565889346,"y":568.8946591477982},"b":{"x":1274.385340852202,"y":763.51165889346}}],"rooms":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed,f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,934616a9-0f01-6196-7e1c-77cc4393a919,da026c08-d76a-a944-8e7b-096b752da9ed,f90da5e3-9e0e-eba7-173d-eb0b071e838e,b45e22a7-8ae1-f546-97e6-b7a0af7c6015":{"name":"A New Room"},"da026c08-d76a-a944-8e7b-096b752da9ed,934616a9-0f01-6196-7e1c-77cc4393a919,51340f8e-b3b7-be15-d300-36df530d6c40,1e4871bc-56fc-d80b-b050-107c80581436":{"name":"A New Room"},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571,c39a7bad-e67b-31f5-8a39-49cf60233f94,51340f8e-b3b7-be15-d300-36df530d6c40,934616a9-0f01-6196-7e1c-77cc4393a919":{"name":"A New Room"},"da026c08-d76a-a944-8e7b-096b752da9ed,934616a9-0f01-6196-7e1c-77cc4393a919,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,c39a7bad-e67b-31f5-8a39-49cf60233f94,51340f8e-b3b7-be15-d300-36df530d6c40,1e4871bc-56fc-d80b-b050-107c80581436":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,b45e22a7-8ae1-f546-97e6-b7a0af7c6015,c9a4fd4d-94a1-621a-8f22-fde28c15b8ef,fef69e69-3b76-226b-981f-cb384a644c12":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,934616a9-0f01-6196-7e1c-77cc4393a919,b114dc7c-aa00-5ad1-e54c-4116d5f398d8,da026c08-d76a-a944-8e7b-096b752da9ed,f90da5e3-9e0e-eba7-173d-eb0b071e838e,b45e22a7-8ae1-f546-97e6-b7a0af7c6015":{"name":"A New Room"},"f90da5e3-9e0e-eba7-173d-eb0b071e838e,b1d78f82-adb6-03af-76f5-086de0c2c730,c9a4fd4d-94a1-621a-8f22-fde28c15b8ef,b45e22a7-8ae1-f546-97e6-b7a0af7c6015":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,934616a9-0f01-6196-7e1c-77cc4393a919,b114dc7c-aa00-5ad1-e54c-4116d5f398d8,da026c08-d76a-a944-8e7b-096b752da9ed,f90da5e3-9e0e-eba7-173d-eb0b071e838e,b45e22a7-8ae1-f546-97e6-b7a0af7c6015,c9a4fd4d-94a1-621a-8f22-fde28c15b8ef,fef69e69-3b76-226b-981f-cb384a644c12":{"name":"A New Room"}},"wallTextures":[],"floorTextures":{},"newFloorTextures":{"4e3d65cb-54c0-0681-28bf-bddcc7bdb571,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,934616a9-0f01-6196-7e1c-77cc4393a919,b114dc7c-aa00-5ad1-e54c-4116d5f398d8,b45e22a7-8ae1-f546-97e6-b7a0af7c6015,c9a4fd4d-94a1-621a-8f22-fde28c15b8ef,da026c08-d76a-a944-8e7b-096b752da9ed,f90da5e3-9e0e-eba7-173d-eb0b071e838e,fef69e69-3b76-226b-981f-cb384a644c12":{"url":"rooms/textures/light_fine_wood.jpg","scale":300},"b1d78f82-adb6-03af-76f5-086de0c2c730,b45e22a7-8ae1-f546-97e6-b7a0af7c6015,c9a4fd4d-94a1-621a-8f22-fde28c15b8ef,f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"url":"rooms/textures/light_fine_wood.jpg","scale":300},"1b99c7d7-a642-b393-3233-53b188b9fcf1,1e4871bc-56fc-d80b-b050-107c80581436,b114dc7c-aa00-5ad1-e54c-4116d5f398d8,da026c08-d76a-a944-8e7b-096b752da9ed":{"url":"rooms/textures/light_fine_wood.jpg","scale":300},"1b99c7d7-a642-b393-3233-53b188b9fcf1,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,51340f8e-b3b7-be15-d300-36df530d6c40,934616a9-0f01-6196-7e1c-77cc4393a919,b114dc7c-aa00-5ad1-e54c-4116d5f398d8,c39a7bad-e67b-31f5-8a39-49cf60233f94":{"url":"rooms/textures/light_fine_wood.jpg","scale":300},"03f2060d-46dc-5ee5-3866-dc3955e52f81,1e4871bc-56fc-d80b-b050-107c80581436,b1d78f82-adb6-03af-76f5-086de0c2c730,da026c08-d76a-a944-8e7b-096b752da9ed,f6eb8265-b201-407f-930f-5e7b961a7840,f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"url":"rooms/textures/light_fine_wood.jpg","scale":300}},"carbonSheet":{"url":"","transparency":1,"x":0,"y":0,"anchorX":0,"anchorY":0,"width":0.01,"height":0.01}},"items":[{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":-308.33237736952765,"ypos":123.34424322885354,"zpos":999.1833867838424,"rotation":-0.004270098987204394,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":-184.70426470540627,"ypos":122.76405848014781,"zpos":999.7112942711002,"rotation":-0.004270098987204394,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":1165.2240721040841,"ypos":114.91952172857282,"zpos":1000.458358261207,"rotation":0.000252032002728438,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":1290.1867986449013,"ypos":116.78703468475851,"zpos":1000.4268636543037,"rotation":0.000252032002728438,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":495.6141381640887,"ypos":110.81,"zpos":1000.5,"rotation":0,"scale_x":5.25231719876416,"scale_y":1.0000902581659186,"scale_z":0.9967919039512306,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":911.6408876145866,"ypos":110.80000022010701,"zpos":1000.5,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":1049.5494943622987,"ypos":110.80000022010701,"zpos":1000.4875119573173,"rotation":0.000252032002728438,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":999.5,"ypos":110.80000022010701,"zpos":398.95856171632636,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":779.7182957260018,"ypos":110.80000022010701,"zpos":1000.5,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":999.5,"ypos":110.80000022010701,"zpos":174.18740196832255,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":-200.90984501525554,"ypos":110.80000022010701,"zpos":352.16400000000004,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Doorway","item_type":3,"format":"gltf","model_url":"models/gltf/doorway.glb","xpos":708.3136680309477,"ypos":125.97975993440832,"zpos":0.5000000000000009,"rotation":-8.926416278393217e-19,"scale_x":247.59946702283648,"scale_y":247.59946702283648,"scale_z":247.59946702283648,"fixed":false,"material_colors":["#e49964","#bcd1d6"]},{"item_name":"Blue Rug","item_type":8,"model_url":"models/js/cb-blue-block-60x96.js","xpos":486.11214620708745,"ypos":0.6889901574803149,"zpos":661.9418968269583,"rotation":1.5707963267948966,"scale_x":2.7559055118110227,"scale_y":2.7559055118110227,"scale_z":2.7559055118110227,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Media Console - White","item_type":9,"model_url":"models/js/cb-clapboard_baked.js","xpos":43.34999999999995,"ypos":102.5132049531837,"zpos":700.7369368926256,"rotation":1.5707963267948968,"scale_x":1.5098425196850396,"scale_y":1.5098425196850396,"scale_z":1.5098425196850396,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Sofa - Grey","item_type":1,"model_url":"models/js/cb-rochelle-gray_baked.js","xpos":920.25938017514,"ypos":60.72274753151519,"zpos":675.6063271028459,"rotation":-1.5707963267948966,"scale_x":1.427255985267035,"scale_y":1.427255985267035,"scale_z":1.427255985267035,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Full Bed","item_type":1,"model_url":"models/js/ik_nordli_full.js","xpos":1336.4174780030874,"ypos":70,"zpos":729.8976371719206,"rotation":-1.5707963267948966,"scale_x":1.4,"scale_y":1.4,"scale_z":1.4,"fixed":false,"material_colors":["#ffffff","#b6b2a4","#cccccc"]},{"item_name":"Bedside table - Shale","item_type":1,"model_url":"models/js/bd-shalebedside-smoke_baked.js","xpos":1441.0368733837404,"ypos":30,"zpos":551.4091270163046,"rotation":-1.5707963267948966,"scale_x":1.146997267931511,"scale_y":1.146997267931511,"scale_z":1.146997267931511,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Floor Lamp","item_type":1,"model_url":"models/js/ore-3legged-white_baked.js","xpos":1430.6098498948547,"ypos":72.163997943445,"zpos":871.2768784225584,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Blue Chair","item_type":1,"model_url":"models/js/ik-ekero-blue_baked.js","xpos":1431.7701721714702,"ypos":37.500000370129,"zpos":410.3356807422165,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Red Chair","item_type":1,"model_url":"models/js/ik-ekero-orange_baked.js","xpos":1327.4415659481645,"ypos":37.50235073007,"zpos":542.9177578122351,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Dresser - White","item_type":1,"model_url":"models/js/we-narrow6white_baked.js","xpos":1033.2536632443198,"ypos":35.611997646165,"zpos":746.691459591822,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Wardrobe - White","item_type":1,"model_url":"models/js/ik-kivine_baked.js","xpos":-470.12153739849373,"ypos":94.999999385175,"zpos":828.2063026327958,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]}]}'

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
		
	this.f = gui.addFolder('선택한 모서리');
	// this.xcontrol = f.add(this, 'x').name(`x(${BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit)})`).step(0.01).onChange(()=>{onChangeX()});
	// this.ycontrol = f.add(this, 'y').name(`y(${BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit)})`).step(0.01).onChange(()=>{onChangeY()});
	this.elevationcontrol = f.add(this, 'elevation').name(`모서리의 높이(${BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit)})`).min(0).step(0.01).onChange(()=>{onChangeElevation()});  
	
	
	return this.f;
}

var RoomProperties = function(room, gui)
{
	var scope = this;
	this.gui = gui;
	this.room = room;		
	this.f = gui.addFolder('선택한 공간');
	this.namecontrol = f.add(room, 'name').name("공간의 이름");
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
	this.f = gui.addFolder('선택한 벽');
	/*wall type 숨기기 */ 
	// this.typecontrol = f.add(this, 'walltype', this.options).name("Wall Type").onChange(()=>{onChangeWallType()});
	if(this.wall2d.wallType == BP3DJS.WallTypes.STRAIGHT)
	{
		this.lengthcontrol = f.add(this, 'walllength').name("벽의 길이").onChange(()=>{onChangeWallLength()});
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
		wallPropFolder = getWallAndFloorPropertiesFolderwall(selectionsFolder, aWall);
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
		
		wallPropFolder = getWallAndFloorPropertiesFolderfloor(selectionsFolder, aWall);
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
	var ficontrol = unitsf.add(global.units, 'a',).name("피트(Feets)").onChange(function(){global.setUnit("a")});
	var icontrol = unitsf.add(global.units, 'b',).name("인치(Inches)'").onChange(function(){global.setUnit("b")});
	var ccontrol = unitsf.add(global.units, 'c',).name('센치미터(cm)').onChange(function(){global.setUnit("c")});
	var mmcontrol = unitsf.add(global.units, 'd',).name('밀리미터(mm)').onChange(function(){global.setUnit("d")});
	var mcontrol = unitsf.add(global.units, 'e',).name('미터(m)').onChange(function(){global.setUnit("e")});
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
	var f = gui.addFolder('선택한 항목 (3D)');
	// var inamecontrol = f.add(anItem, 'name');
	var wcontrol = f.add(anItem, 'width', 0.05, 5.1).step(0.1).name('폭'); // 최대치 1000.1 -> 5.1 로 변경
	var hcontrol = f.add(anItem, 'height', 0.05, 5.1).step(0.1).name('높이'); // 최대치 1000.1 -> 5.1 로 변경
	var dcontrol = f.add(anItem, 'depth', 0.05, 5.1).step(0.1).name('깊이'); // 최대치 1000.1 -> 5.1 로 변경
	var pcontrol = f.add(anItem, 'proportionalsize').name('비율 고정');
	var lockcontrol = f.add(anItem, 'fixed').name('위치 고정');
	var deleteItemControl = f.add(anItem, 'deleteItem').name('항목 삭제');

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

function getWallAndFloorPropertiesFolderwall(gui, aWall)
{
	var f = gui.addFolder('벽면(3D)');
	var wcontrol = f.add(aWall, 'wallmaterialname', {Grey: 0, Yellow: 1, Checker: 2, Marble: 3, Bricks: 4}).name('벽지선택');
	// var fcontrol = f.add(aWall, 'floormaterialname', {'Fine Wood': 5, 'Hard Wood': 6}).name('Floor');
	var multicontrol = f.add(aWall, 'forAllWalls').name('공간 전체적용');
	function wchanged()
	{
		aWall.wchanged();
	}

	// function fchanged()
	// {
	// 	aWall.fchanged();
	// }

	wcontrol.onChange(wchanged);
	// fcontrol.onChange(fchanged);
	return f;
}
function getWallAndFloorPropertiesFolderfloor(gui, aWall)
{
	var f = gui.addFolder('바닥면(3D)');
	// var wcontrol = f.add(aWall, 'wallmaterialname', {Grey: 0, Yellow: 1, Checker: 2, Marble: 3, Bricks: 4}).name('Wall');
	var fcontrol = f.add(aWall, 'floormaterialname', {'Fine Wood': 5, 'Hard Wood': 6}).name('바닥선택');
	var multicontrol = f.add(aWall, 'forAllWalls').name('공간 전체적용');
	// function wchanged()
	// {
	// 	aWall.wchanged();
	// }

	function fchanged()
	{
		aWall.fchanged();
	}

	// wcontrol.onChange(wchanged);
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
	
	selectionsFolder = gui.addFolder('선택한 것');
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
