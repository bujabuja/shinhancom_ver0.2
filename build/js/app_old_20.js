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

var myhome = '{"floorplan":{"version":"0.0.2a","corners":{"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":-0.5,"y":1,"elevation":2.5},"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":-0.5,"y":9,"elevation":2.5},"bf7ef88a-0a95-abb3-9f54-3bd5b568cec6":{"x":1,"y":9,"elevation":2.5},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":10.5,"y":1,"elevation":2.5},"67afe630-77bb-2246-4781-7c9c4c9c55ff":{"x":7,"y":1,"elevation":2.5},"6278f1a9-e271-cea2-e439-6fcb02bf8b9c":{"x":1,"y":1,"elevation":2.5},"79243751-8af4-2ad4-eaa3-bce2cf69b9a8":{"x":1,"y":5,"elevation":2.5},"10376971-9027-a326-f558-105047d07671":{"x":5,"y":9,"elevation":2.5},"12a13752-cfe1-fc92-dbbb-42c8d773821e":{"x":5,"y":5,"elevation":2.5},"33ce2715-1df2-fe90-7b75-1abef005a2b5":{"x":5,"y":4,"elevation":2.5},"c95023ea-21e6-2df3-7df4-23e055911133":{"x":5,"y":1,"elevation":2.5},"7686c23c-2e19-7133-c1e2-13a4e6865d91":{"x":7,"y":4,"elevation":2.5},"4c1d2d8b-94d4-2fe0-6a4b-7414610cbb58":{"x":10.5,"y":4,"elevation":2.5},"5c59dd57-ec01-a9f1-f782-d5452da10f77":{"x":9.25,"y":4,"elevation":2.5},"0caa0b7c-bc13-00aa-89dd-687d87076a1b":{"x":9.25,"y":5.5,"elevation":2.5},"2dbaa7b2-f71c-60cf-595e-45ac069cd3d0":{"x":10.5,"y":5.5,"elevation":2.5},"6e846de5-71d7-7965-fa58-cf12e2169f43":{"x":7.5,"y":5.5,"elevation":2.5},"ff739457-2acc-a550-babf-abea0fb01f95":{"x":5,"y":7.25,"elevation":2.5},"8aeba92d-5dae-77d5-184a-c92f2b64878e":{"x":5,"y":7,"elevation":2.5},"a23b9332-1a9b-46ea-2bb7-0022c2ed42a1":{"x":10.5,"y":7,"elevation":2.5},"5711cca0-d7f5-61d0-457c-5fcfab970b44":{"x":10.5,"y":6.75,"elevation":2.5},"f6eb2b9a-1dc0-ea6c-74af-526c818bd58a":{"x":10.5,"y":9,"elevation":2.5}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-353.5533905932737,"y":353.5533905932738},"b":{"x":-353.5533905932738,"y":646.4466094067263}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"bf7ef88a-0a95-abb3-9f54-3bd5b568cec6","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":353.5533905932738,"y":1353.5533905932737},"b":{"x":646.4466094067263,"y":1353.553390593274}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"67afe630-77bb-2246-4781-7c9c4c9c55ff","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":646.4466094067262,"y":-353.5533905932737},"b":{"x":353.5533905932737,"y":-353.5533905932738}},{"corner1":"6278f1a9-e271-cea2-e439-6fcb02bf8b9c","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":37.77608851144918,"y":60.27084407607451},"b":{"x":-0.4148440760745302,"y":57.3840885114491}},{"corner1":"6278f1a9-e271-cea2-e439-6fcb02bf8b9c","corner2":"79243751-8af4-2ad4-eaa3-bce2cf69b9a8","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-201.83977221567386,"y":382.2317722156738},"b":{"x":-201.83977221567392,"y":616.0402277843261}},{"corner1":"bf7ef88a-0a95-abb3-9f54-3bd5b568cec6","corner2":"10376971-9027-a326-f558-105047d07671","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":422.58925568741773,"y":1241.691136205308},"b":{"x":706.5808637946918,"y":1242.1972556874177}},{"corner1":"79243751-8af4-2ad4-eaa3-bce2cf69b9a8","corner2":"bf7ef88a-0a95-abb3-9f54-3bd5b568cec6","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-41.42135623730948,"y":641.4213562373095},"b":{"x":-41.42135623730951,"y":758.5786437626905}},{"corner1":"79243751-8af4-2ad4-eaa3-bce2cf69b9a8","corner2":"12a13752-cfe1-fc92-dbbb-42c8d773821e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":241.4213562373095,"y":641.4213562373095},"b":{"x":358.5786437626905,"y":641.4213562373095}},{"corner1":"12a13752-cfe1-fc92-dbbb-42c8d773821e","corner2":"33ce2715-1df2-fe90-7b75-1abef005a2b5","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":641.4213562373095,"y":358.5786437626905},"b":{"x":641.4213562373095,"y":241.42135623730948}},{"corner1":"c95023ea-21e6-2df3-7df4-23e055911133","corner2":"6278f1a9-e271-cea2-e439-6fcb02bf8b9c","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":358.5786437626905,"y":-41.42135623730948},"b":{"x":241.42135623730948,"y":-41.42135623730951}},{"corner1":"33ce2715-1df2-fe90-7b75-1abef005a2b5","corner2":"c95023ea-21e6-2df3-7df4-23e055911133","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":606.0660171779821,"y":293.93398282201787},"b":{"x":606.0660171779821,"y":206.06601717798213}},{"corner1":"33ce2715-1df2-fe90-7b75-1abef005a2b5","corner2":"7686c23c-2e19-7133-c1e2-13a4e6865d91","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":694.4543648263005,"y":594.4543648263005},"b":{"x":855.5456351736995,"y":594.4543648263005}},{"corner1":"4c1d2d8b-94d4-2fe0-6a4b-7414610cbb58","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1156.066017177982,"y":293.93398282201787},"b":{"x":1156.066017177982,"y":206.06601717798213}},{"corner1":"67afe630-77bb-2246-4781-7c9c4c9c55ff","corner2":"c95023ea-21e6-2df3-7df4-23e055911133","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":613.1281566461771,"y":38.128156646177096},"b":{"x":561.8718433538229,"y":38.12815664617709}},{"corner1":"67afe630-77bb-2246-4781-7c9c4c9c55ff","corner2":"7686c23c-2e19-7133-c1e2-13a4e6865d91","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":568.9339828220179,"y":206.06601717798213},"b":{"x":568.9339828220179,"y":293.93398282201787}},{"corner1":"7686c23c-2e19-7133-c1e2-13a4e6865d91","corner2":"5c59dd57-ec01-a9f1-f782-d5452da10f77","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":807.5825214724777,"y":532.5825214724777},"b":{"x":917.4174785275223,"y":532.5825214724777}},{"corner1":"5c59dd57-ec01-a9f1-f782-d5452da10f77","corner2":"4c1d2d8b-94d4-2fe0-6a4b-7414610cbb58","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":969.1941738241592,"y":444.19417382415924},"b":{"x":1005.8058261758408,"y":444.19417382415924}},{"corner1":"5c59dd57-ec01-a9f1-f782-d5452da10f77","corner2":"0caa0b7c-bc13-00aa-89dd-687d87076a1b","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":871.966991411009,"y":453.03300858899104},"b":{"x":871.966991411009,"y":496.96699141100896}},{"corner1":"0caa0b7c-bc13-00aa-89dd-687d87076a1b","corner2":"2dbaa7b2-f71c-60cf-595e-45ac069cd3d0","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":969.1941738241592,"y":594.1941738241592},"b":{"x":1005.8058261758408,"y":594.1941738241592}},{"corner1":"2dbaa7b2-f71c-60cf-595e-45ac069cd3d0","corner2":"4c1d2d8b-94d4-2fe0-6a4b-7414610cbb58","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1103.0330085889912,"y":496.96699141100896},"b":{"x":1103.0330085889912,"y":453.03300858899104}},{"corner1":"0caa0b7c-bc13-00aa-89dd-687d87076a1b","corner2":"6e846de5-71d7-7965-fa58-cf12e2169f43","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":863.1281566461771,"y":488.1281566461771},"b":{"x":811.8718433538229,"y":488.1281566461771}},{"corner1":"ff739457-2acc-a550-babf-abea0fb01f95","corner2":"10376971-9027-a326-f558-105047d07671","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":438.1281566461771,"y":786.8718433538229},"b":{"x":438.1281566461771,"y":838.1281566461771}},{"corner1":"10376971-9027-a326-f558-105047d07671","corner2":"8aeba92d-5dae-77d5-184a-c92f2b64878e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":570.7106781186548,"y":829.2893218813452},"b":{"x":570.7106781186548,"y":770.7106781186548}},{"corner1":"8aeba92d-5dae-77d5-184a-c92f2b64878e","corner2":"a23b9332-1a9b-46ea-2bb7-0022c2ed42a1","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":694.4543648263005,"y":894.4543648263005},"b":{"x":855.5456351736995,"y":894.4543648263005}},{"corner1":"a23b9332-1a9b-46ea-2bb7-0022c2ed42a1","corner2":"5711cca0-d7f5-61d0-457c-5fcfab970b44","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1103.0330085889912,"y":646.966991411009},"b":{"x":1103.0330085889912,"y":603.033008588991}},{"corner1":"10376971-9027-a326-f558-105047d07671","corner2":"f6eb2b9a-1dc0-ea6c-74af-526c818bd58a","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":694.4543648263005,"y":1094.4543648263007},"b":{"x":855.5456351736995,"y":1094.4543648263007}},{"corner1":"f6eb2b9a-1dc0-ea6c-74af-526c818bd58a","corner2":"a23b9332-1a9b-46ea-2bb7-0022c2ed42a1","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1129.5495128834866,"y":820.4504871165134},"b":{"x":1129.5495128834866,"y":754.5495128834866}},{"corner1":"a23b9332-1a9b-46ea-2bb7-0022c2ed42a1","corner2":"5711cca0-d7f5-61d0-457c-5fcfab970b44","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1058.8388347648317,"y":691.1611652351681},"b":{"x":1058.8388347648317,"y":683.8388347648319}},{"corner1":"5711cca0-d7f5-61d0-457c-5fcfab970b44","corner2":"2dbaa7b2-f71c-60cf-595e-45ac069cd3d0","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":1094.1941738241592,"y":630.8058261758408},"b":{"x":1094.1941738241592,"y":594.1941738241592}}],"rooms":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed,f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"name":"old_20"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,6278f1a9-e271-cea2-e439-6fcb02bf8b9c,bf7ef88a-0a95-abb3-9f54-3bd5b568cec6,f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"name":"A New Room"},"da026c08-d76a-a944-8e7b-096b752da9ed,bf7ef88a-0a95-abb3-9f54-3bd5b568cec6,6278f1a9-e271-cea2-e439-6fcb02bf8b9c,4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"name":"A New Room"},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571,4c1d2d8b-94d4-2fe0-6a4b-7414610cbb58,7686c23c-2e19-7133-c1e2-13a4e6865d91,67afe630-77bb-2246-4781-7c9c4c9c55ff":{"name":"A New Room"},"c95023ea-21e6-2df3-7df4-23e055911133,67afe630-77bb-2246-4781-7c9c4c9c55ff,7686c23c-2e19-7133-c1e2-13a4e6865d91,33ce2715-1df2-fe90-7b75-1abef005a2b5":{"name":"A New Room"},"da026c08-d76a-a944-8e7b-096b752da9ed,bf7ef88a-0a95-abb3-9f54-3bd5b568cec6,79243751-8af4-2ad4-eaa3-bce2cf69b9a8,12a13752-cfe1-fc92-dbbb-42c8d773821e,33ce2715-1df2-fe90-7b75-1abef005a2b5,7686c23c-2e19-7133-c1e2-13a4e6865d91,4c1d2d8b-94d4-2fe0-6a4b-7414610cbb58":{"name":"A New Room"},"10376971-9027-a326-f558-105047d07671,8aeba92d-5dae-77d5-184a-c92f2b64878e,a23b9332-1a9b-46ea-2bb7-0022c2ed42a1,f6eb2b9a-1dc0-ea6c-74af-526c818bd58a":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,6278f1a9-e271-cea2-e439-6fcb02bf8b9c,79243751-8af4-2ad4-eaa3-bce2cf69b9a8,bf7ef88a-0a95-abb3-9f54-3bd5b568cec6,f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"name":"A New Room"},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571,4c1d2d8b-94d4-2fe0-6a4b-7414610cbb58,5c59dd57-ec01-a9f1-f782-d5452da10f77,7686c23c-2e19-7133-c1e2-13a4e6865d91,67afe630-77bb-2246-4781-7c9c4c9c55ff":{"name":"A New Room"}},"wallTextures":[],"floorTextures":{},"newFloorTextures":{},"carbonSheet":{"url":"","transparency":1,"x":0,"y":0,"anchorX":0,"anchorY":0,"width":0.01,"height":0.01}},"items":[]}'/*
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
