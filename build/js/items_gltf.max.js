$(document).ready(function() {
    var items = [
   /* {
        "name": "Simplecabinet",
        "image": "models/thumbnails_new/SimpleCabinet.png",
        "model": "models/gltf/SimpleCabinet.glb",
        "type": "9",
        "format": "gltf"
    },{
        "name": "Bear",
        "image": "models/thumbnails_new/bear.png",
        "model": "models/gltf/bear.glb",
        "type": "9", //2->9
        "format": "gltf"
    }, {
        "name": "Bedbunk",
        "image": "models/thumbnails_new/bedBunk.png",
        "model": "models/gltf/bedBunk.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Beddouble",
        "image": "models/thumbnails_new/bedDouble.png",
        "model": "models/gltf/bedDouble.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Bedsingle",
        "image": "models/thumbnails_new/bedSingle.png",
        "model": "models/gltf/bedSingle.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Bench",
        "image": "models/thumbnails_new/bench.png",
        "model": "models/gltf/bench.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Benchcushion",
        "image": "models/thumbnails_new/benchCushion.png",
        "model": "models/gltf/benchCushion.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Benchcushionlow",
        "image": "models/thumbnails_new/benchCushionLow.png",
        "model": "models/gltf/benchCushionLow.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Bookcaseclosed",
        "image": "models/thumbnails_new/bookcaseClosed.png",
        "model": "models/gltf/bookcaseClosed.glb",
        "type": "9",
        "format": "gltf"
    }, {
        "name": "Bookcasecloseddoors",
        "image": "models/thumbnails_new/bookcaseClosedDoors.png",
        "model": "models/gltf/bookcaseClosedDoors.glb",
        "type": "9",
        "format": "gltf"
    }, */ {
        "name": "Bookcaseclosedwide",
        "image": "models/thumbnails_new/bookcaseClosedWide.png",        //남겨놔야하는 것
        "model": "models/gltf/bookcaseClosedWide.glb",
        "type": "9",
        "format": "gltf"
    },/* {
        "name": "Bookcaseopen",
        "image": "models/thumbnails_new/bookcaseOpen.png",
        "model": "models/gltf/bookcaseOpen.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Bookcaseopenlow",
        "image": "models/thumbnails_new/bookcaseOpenLow.png",
        "model": "models/gltf/bookcaseOpenLow.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Books",
        "image": "models/thumbnails_new/books.png",
        "model": "models/gltf/books.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Cabinetbed",
        "image": "models/thumbnails_new/cabinetBed.png",
        "model": "models/gltf/cabinetBed.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Cabinetbeddrawer",
        "image": "models/thumbnails_new/cabinetBedDrawer.png",
        "model": "models/gltf/cabinetBedDrawer.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Cabinetbeddrawertable",
        "image": "models/thumbnails_new/cabinetBedDrawerTable.png",
        "model": "models/gltf/cabinetBedDrawerTable.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Cabinettelevision",
        "image": "models/thumbnails_new/cabinetTelevision.png",
        "model": "models/gltf/cabinetTelevision.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Cabinettelevisiondoors",
        "image": "models/thumbnails_new/cabinetTelevisionDoors.png",
        "model": "models/gltf/cabinetTelevisionDoors.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Cardboardboxclosed",
        "image": "models/thumbnails_new/cardboardBoxClosed.png",
        "model": "models/gltf/cardboardBoxClosed.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Cardboardboxopen",
        "image": "models/thumbnails_new/cardboardBoxOpen.png",
        "model": "models/gltf/cardboardBoxOpen.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Ceilingfan",
        "image": "models/thumbnails_new/ceilingFan.png",
        "model": "models/gltf/ceilingFan.gltf",
        "type": "4",
        "format": "gltf"
    }, {
        "name": "Chair",
        "image": "models/thumbnails_new/chair.png",
        "model": "models/gltf/chair.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Chaircushion",
        "image": "models/thumbnails_new/chairCushion.png",
        "model": "models/gltf/chairCushion.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Chairdesk",
        "image": "models/thumbnails_new/chairDesk.png",
        "model": "models/gltf/chairDesk.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Chairmoderncushion",
        "image": "models/thumbnails_new/chairModernCushion.png",
        "model": "models/gltf/chairModernCushion.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Chairmodernframecushion",
        "image": "models/thumbnails_new/chairModernFrameCushion.png",
        "model": "models/gltf/chairModernFrameCushion.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Chairrounded",
        "image": "models/thumbnails_new/chairRounded.png",
        "model": "models/gltf/chairRounded.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Chandelier",
        "image": "models/thumbnails_new/nopreview.png",
        "model": "models/gltf/chandelier.gltf",
        "type": "4",
        "format": "gltf"
    }, {
        "name": "Coatrack",
        "image": "models/thumbnails_new/coatRack.png",
        "model": "models/gltf/coatRack.glb",
        "type": "9", //2->9
        "format": "gltf"
    }, {
        "name": "Coatrackstanding",
        "image": "models/thumbnails_new/coatRackStanding.png",
        "model": "models/gltf/coatRackStanding.glb",
        "type": "1",
        "format": "gltf"
    }, 
    // {
    //     "name": "Computerkeyboard",
    //     "image": "models/thumbnails_new/computerKeyboard.png",
    //     "model": "models/gltf/computerKeyboard.glb",
    //     "type": "0", 
    //     "format": "gltf"
    // }, 
    // {
    //     "name": "Computermouse",
    //     "image": "models/thumbnails_new/computerMouse.png",
    //     "model": "models/gltf/computerMouse.glb",
    //     "type": "0",
    //     "format": "gltf"
    // }, {
    //     "name": "Computerscreen",
    //     "image": "models/thumbnails_new/computerScreen.png",
    //     "model": "models/gltf/computerScreen.glb",
    //     "type": "2",
    //     "format": "gltf"
    // }, 
    {
        "name": "Desk",
        "image": "models/thumbnails_new/desk.png",
        "model": "models/gltf/desk.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Deskcorner",
        "image": "models/thumbnails_new/deskCorner.png",
        "model": "models/gltf/deskCorner.glb",
        "type": "2",
        "format": "gltf"
    }, {
        "name": "Doorway",
        "image": "models/thumbnails_new/doorway.png",
        "model": "models/gltf/doorway.glb",
        "type": "7", // 3->7
        "format": "gltf"
    }, {
        "name": "Doorwayfront",
        "image": "models/thumbnails_new/doorwayFront.png",
        "model": "models/gltf/doorwayFront.glb",
        "type": "7", // 3->7
        "format": "gltf"
    },*/ {
        "name": "Doorwayopen",
        "image": "models/thumbnails_new/doorwayOpen.png",        //남겨놔야하는 
        "model": "models/gltf/doorwayOpen.glb",
        "type": "7", // 3->7
        "format": "gltf"
    }, {
        "name": "Dryer",
        "image": "models/thumbnails_new/dryer.png",
        "model": "models/gltf/dryer.glb",           //남겨나와햐는
        "type": "2",
        "format": "gltf"
    }, /*{
        "name": "Floorcorner",
        "image": "models/thumbnails_new/floorCorner.png",
        "model": "models/gltf/floorCorner.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Floorcornerround",
        "image": "models/thumbnails_new/floorCornerRound.png",
        "model": "models/gltf/floorCornerRound.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Floorfull",
        "image": "models/thumbnails_new/floorFull.png",
        "model": "models/gltf/floorFull.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Floorhalf",
        "image": "models/thumbnails_new/floorHalf.png",
        "model": "models/gltf/floorHalf.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Hoodlarge",
        "image": "models/thumbnails_new/hoodLarge.png",
        "model": "models/gltf/hoodLarge.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Hoodmodern",
        "image": "models/thumbnails_new/hoodModern.png",
        "model": "models/gltf/hoodModern.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Kitchenbar",
        "image": "models/thumbnails_new/kitchenBar.png",
        "model": "models/gltf/kitchenBar.glb",
        "type": "2", //9->2
        "format": "gltf"
    }, {
        "name": "Kitchenbarend",
        "image": "models/thumbnails_new/kitchenBarEnd.png",
        "model": "models/gltf/kitchenBarEnd.glb",
        "type": "2", //9->2
        "format": "gltf"
    }, {
        "name": "Kitchenblender",
        "image": "models/thumbnails_new/kitchenBlender.png",
        "model": "models/gltf/kitchenBlender.glb",
        "type": "2", //0->2
        "format": "gltf"
    }, {
        "name": "Kitchencabinet",
        "image": "models/thumbnails_new/kitchenCabinet.png",
        "model": "models/gltf/kitchenCabinet.glb",
        "type": "2", //9->2
        "format": "gltf"
    }, {
        "name": "Kitchencabinetcornerinner",
        "image": "models/thumbnails_new/kitchenCabinetCornerInner.png",
        "model": "models/gltf/kitchenCabinetCornerInner.glb",
        "type": "2", //9->2
        "format": "gltf"
    }, {
        "name": "Kitchencabinetcornerround",
        "image": "models/thumbnails_new/kitchenCabinetCornerRound.png",
        "model": "models/gltf/kitchenCabinetCornerRound.glb",
        "type": "2", //9->2
        "format": "gltf"
    }, {
        "name": "Kitchencabinetdrawer",
        "image": "models/thumbnails_new/kitchenCabinetDrawer.png",
        "model": "models/gltf/kitchenCabinetDrawer.glb",
        "type": "2",
        "format": "gltf"
    }, {
        "name": "Kitchencabinetupper",
        "image": "models/thumbnails_new/kitchenCabinetUpper.png",
        "model": "models/gltf/kitchenCabinetUpper.glb",
        "type": "2",
        "format": "gltf"
    }, {
        "name": "Kitchencabinetuppercorner",
        "image": "models/thumbnails_new/kitchenCabinetUpperCorner.png",
        "model": "models/gltf/kitchenCabinetUpperCorner.glb",
        "type": "2",
        "format": "gltf"
    }, {
        "name": "Kitchencabinetupperdouble",
        "image": "models/thumbnails_new/kitchenCabinetUpperDouble.png",
        "model": "models/gltf/kitchenCabinetUpperDouble.glb",
        "type": "2",
        "format": "gltf"
    }, {
        "name": "Kitchencabinetupperlow",
        "image": "models/thumbnails_new/kitchenCabinetUpperLow.png",
        "model": "models/gltf/kitchenCabinetUpperLow.glb",
        "type": "2",
        "format": "gltf"
    }, {
        "name": "Kitchencoffeemachine",
        "image": "models/thumbnails_new/kitchenCoffeeMachine.png",
        "model": "models/gltf/kitchenCoffeeMachine.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Kitchenfridge",
        "image": "models/thumbnails_new/kitchenFridge.png",
        "model": "models/gltf/kitchenFridge.glb",
        "type": "2", //1->2
        "format": "gltf"
    }, {
        "name": "Kitchenfridgebuiltin",
        "image": "models/thumbnails_new/kitchenFridgeBuiltIn.png",
        "model": "models/gltf/kitchenFridgeBuiltIn.glb",
        "type": "2", // 1->2
        "format": "gltf"
    }, {
        "name": "Kitchenfridgelarge",
        "image": "models/thumbnails_new/kitchenFridgeLarge.png",
        "model": "models/gltf/kitchenFridgeLarge.glb",
        "type": "2", // 1->2
        "format": "gltf"
    }, {
        "name": "Kitchenfridgesmall",
        "image": "models/thumbnails_new/kitchenFridgeSmall.png",
        "model": "models/gltf/kitchenFridgeSmall.glb",
        "type": "2", // 1->2
        "format": "gltf"
    }, {
        "name": "Kitchenmicrowave",
        "image": "models/thumbnails_new/kitchenMicrowave.png",
        "model": "models/gltf/kitchenMicrowave.glb",
        "type": "2", // 1->2
        "format": "gltf"
    }, {
        "name": "Kitchensink",
        "image": "models/thumbnails_new/kitchenSink.png",
        "model": "models/gltf/kitchenSink.glb",
        "type": "2", // 1->2
        "format": "gltf"
    }, {
        "name": "Kitchenstove",
        "image": "models/thumbnails_new/kitchenStove.png",
        "model": "models/gltf/kitchenStove.glb",
        "type": "2", // 1->2
        "format": "gltf"
    }, {
        "name": "Kitchenstoveelectric",
        "image": "models/thumbnails_new/kitchenStoveElectric.png",
        "model": "models/gltf/kitchenStoveElectric.glb",
        "type": "2", //1 ->2
        "format": "gltf"
    }, {
        "name": "Lamproundfloor",
        "image": "models/thumbnails_new/lampRoundFloor.png",
        "model": "models/gltf/lampRoundFloor.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Lamproundtable",
        "image": "models/thumbnails_new/lampRoundTable.png",
        "model": "models/gltf/lampRoundTable.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Lampsquareceiling",
        "image": "models/thumbnails_new/lampSquareCeiling.png",
        "model": "models/gltf/lampSquareCeiling.glb",
        "type": "4",
        "format": "gltf"
    }, {
        "name": "Lampsquarefloor",
        "image": "models/thumbnails_new/lampSquareFloor.png",
        "model": "models/gltf/lampSquareFloor.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Lampsquaretable",
        "image": "models/thumbnails_new/lampSquareTable.png",
        "model": "models/gltf/lampSquareTable.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Lampwall",
        "image": "models/thumbnails_new/lampWall.png",
        "model": "models/gltf/lampWall.glb",
        "type": "2",
        "format": "gltf"
    }, {
        "name": "Laptop",
        "image": "models/thumbnails_new/laptop.png",
        "model": "models/gltf/laptop.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Loungechair",
        "image": "models/thumbnails_new/loungeChair.png",
        "model": "models/gltf/loungeChair.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Loungechairrelax",
        "image": "models/thumbnails_new/loungeChairRelax.png",
        "model": "models/gltf/loungeChairRelax.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Loungedesignchair",
        "image": "models/thumbnails_new/loungeDesignChair.png",
        "model": "models/gltf/loungeDesignChair.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Loungedesignsofa",
        "image": "models/thumbnails_new/loungeDesignSofa.png",
        "model": "models/gltf/loungeDesignSofa.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Loungedesignsofacorner",
        "image": "models/thumbnails_new/loungeDesignSofaCorner.png",
        "model": "models/gltf/loungeDesignSofaCorner.glb",
        "type": "1", //9->1
        "format": "gltf"
    }, {
        "name": "Loungesofa",
        "image": "models/thumbnails_new/loungeSofa.png",
        "model": "models/gltf/loungeSofa.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Loungesofacorner",
        "image": "models/thumbnails_new/loungeSofaCorner.png",
        "model": "models/gltf/loungeSofaCorner.glb",
        "type": "1", //9->1
        "format": "gltf"
    }, {
        "name": "Loungesofalong",
        "image": "models/thumbnails_new/loungeSofaLong.png",
        "model": "models/gltf/loungeSofaLong.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Loungesofaottoman",
        "image": "models/thumbnails_new/loungeSofaOttoman.png",
        "model": "models/gltf/loungeSofaOttoman.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Paneling",
        "image": "models/thumbnails_new/paneling.png",
        "model": "models/gltf/paneling.glb",
        "type": "2",
        "format": "gltf"
    }, {
        "name": "Pillow",
        "image": "models/thumbnails_new/pillow.png",
        "model": "models/gltf/pillow.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Pillowblue",
        "image": "models/thumbnails_new/pillowBlue.png",
        "model": "models/gltf/pillowBlue.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Pillowbluelong",
        "image": "models/thumbnails_new/pillowBlueLong.png",
        "model": "models/gltf/pillowBlueLong.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Pillowlong",
        "image": "models/thumbnails_new/pillowLong.png",
        "model": "models/gltf/pillowLong.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Plantsmall1",
        "image": "models/thumbnails_new/plantSmall1.png",
        "model": "models/gltf/plantSmall1.glb",
        "type": "8", //1->8
        "format": "gltf"
    }, {
        "name": "Plantsmall2",
        "image": "models/thumbnails_new/plantSmall2.png",
        "model": "models/gltf/plantSmall2.glb",
        "type": "8", // 1->8
        "format": "gltf"
    }, {
        "name": "Plantsmall3",
        "image": "models/thumbnails_new/plantSmall3.png",
        "model": "models/gltf/plantSmall3.glb",
        "type": "8", // 1->8
        "format": "gltf"
    }, {
        "name": "Pottedplant",
        "image": "models/thumbnails_new/pottedPlant.png",
        "model": "models/gltf/pottedPlant.glb",
        "type": "8", // 1->8
        "format": "gltf"
    }, {
        "name": "Radio",
        "image": "models/thumbnails_new/radio.png",
        "model": "models/gltf/radio.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Rugdoormat",
        "image": "models/thumbnails_new/rugDoormat.png",
        "model": "models/gltf/rugDoormat.glb",
        "type": "8", // 1->8
        "format": "gltf"
    }, {
        "name": "Rugrectangle",
        "image": "models/thumbnails_new/rugRectangle.png",
        "model": "models/gltf/rugRectangle.glb",
        "type": "8", //1->8
        "format": "gltf"
    }, {
        "name": "Ruground",
        "image": "models/thumbnails_new/rugRound.png",
        "model": "models/gltf/rugRound.glb",
        "type": "8", //1->8
        "format": "gltf"
    }, {
        "name": "Rugrounded",
        "image": "models/thumbnails_new/rugRounded.png",
        "model": "models/gltf/rugRounded.glb",
        "type": "8", //1->8
        "format": "gltf"
    }, {
        "name": "Rugsquare",
        "image": "models/thumbnails_new/rugSquare.png",
        "model": "models/gltf/rugSquare.glb",
        "type": "1",
        "format": "gltf"
    }, */{
        "name": "Shower",
        "image": "models/thumbnails_new/shower.png",
        "model": "models/gltf/shower.glb",
        "type": "2", // 9->2
        "format": "gltf"
    }, {
        "name": "Showerround",
        "image": "models/thumbnails_new/showerRound.png",
        "model": "models/gltf/showerRound.glb",
        "type": "2", // 9->2
        "format": "gltf"
    },/* {
        "name": "Sidetable",
        "image": "models/thumbnails_new/sideTable.png",
        "model": "models/gltf/sideTable.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Sidetabledrawers",
        "image": "models/thumbnails_new/sideTableDrawers.png",
        "model": "models/gltf/sideTableDrawers.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Speaker",
        "image": "models/thumbnails_new/speaker.png",
        "model": "models/gltf/speaker.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Speakersmall",
        "image": "models/thumbnails_new/speakerSmall.png",
        "model": "models/gltf/speakerSmall.glb",
        "type": "1",
        "format": "gltf"
    }, 
    //{ 계단 삭제
    //     "name": "Stairs",
    //     "image": "models/thumbnails_new/stairs.png",
    //     "model": "models/gltf/stairs.glb",
    //     "type": "1",
    //     "format": "gltf"
    // }, {
    //     "name": "Stairscorner",
    //     "image": "models/thumbnails_new/stairsCorner.png",
    //     "model": "models/gltf/stairsCorner.glb",
    //     "type": "1",
    //     "format": "gltf"
    // }, {
    //     "name": "Stairsopen",
    //     "image": "models/thumbnails_new/stairsOpen.png",
    //     "model": "models/gltf/stairsOpen.glb",
    //     "type": "1",
    //     "format": "gltf"
    // }, {
    //     "name": "Stairsopensingle",
    //     "image": "models/thumbnails_new/stairsOpenSingle.png",
    //     "model": "models/gltf/stairsOpenSingle.glb",
    //     "type": "1",
    //     "format": "gltf"
    // }, 
    {
        "name": "Stoolbar",
        "image": "models/thumbnails_new/stoolBar.png",
        "model": "models/gltf/stoolBar.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Stoolbarsquare",
        "image": "models/thumbnails_new/stoolBarSquare.png",
        "model": "models/gltf/stoolBarSquare.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Table",
        "image": "models/thumbnails_new/table.png",
        "model": "models/gltf/table.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Tablecloth",
        "image": "models/thumbnails_new/tableCloth.png",
        "model": "models/gltf/tableCloth.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Tablecoffee",
        "image": "models/thumbnails_new/tableCoffee.png",
        "model": "models/gltf/tableCoffee.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Tablecoffeeglass",
        "image": "models/thumbnails_new/tableCoffeeGlass.png",
        "model": "models/gltf/tableCoffeeGlass.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Tablecoffeeglasssquare",
        "image": "models/thumbnails_new/tableCoffeeGlassSquare.png",
        "model": "models/gltf/tableCoffeeGlassSquare.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Tablecoffeesquare",
        "image": "models/thumbnails_new/tableCoffeeSquare.png",
        "model": "models/gltf/tableCoffeeSquare.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Tablecross",
        "image": "models/thumbnails_new/tableCross.png",
        "model": "models/gltf/tableCross.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Tablecrosscloth",
        "image": "models/thumbnails_new/tableCrossCloth.png",
        "model": "models/gltf/tableCrossCloth.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Tableglass",
        "image": "models/thumbnails_new/tableGlass.png",
        "model": "models/gltf/tableGlass.glb",
        "type": "1",
        "format": "gltf"
    }, {
        "name": "Tableround",
        "image": "models/thumbnails_new/tableRound.png",
        "model": "models/gltf/tableRound.glb",
        "type": "1",
        "format": "gltf"
    }, 
    // {
    //     "name": "Televisionantenna",
    //     "image": "models/thumbnails_new/televisionAntenna.png",
    //     "model": "models/gltf/televisionAntenna.glb",
    //     "type": "2",
    //     "format": "gltf"
    // }, {
    //     "name": "Televisionmodern",
    //     "image": "models/thumbnails_new/televisionModern.png",
    //     "model": "models/gltf/televisionModern.glb",
    //     "type": "2",
    //     "format": "gltf"
    // }, {
    //     "name": "Televisionvintage",
    //     "image": "models/thumbnails_new/televisionVintage.png",
    //     "model": "models/gltf/televisionVintage.glb",
    //     "type": "2",
    //     "format": "gltf"
    // }, 
    {
        "name": "Toaster",
        "image": "models/thumbnails_new/toaster.png",
        "model": "models/gltf/toaster.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Toilet",
        "image": "models/thumbnails_new/toilet.png",
        "model": "models/gltf/toilet.glb",
        "type": "2", //1->2
        "format": "gltf"
    }, {
        "name": "Toiletsquare",
        "image": "models/thumbnails_new/toiletSquare.png",
        "model": "models/gltf/toiletSquare.glb",
        "type": "2", //1->2
        "format": "gltf"
    }, {
        "name": "Trashcan",
        "image": "models/thumbnails_new/trashcan.png",
        "model": "models/gltf/trashcan.glb",
        "type": "8", //1->8
        "format": "gltf"
    }, {
        "name": "Wall",
        "image": "models/thumbnails_new/wall.png",
        "model": "models/gltf/wall.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Wallcorner",
        "image": "models/thumbnails_new/wallCorner.png",
        "model": "models/gltf/wallCorner.glb",
        "type": "0",
        "format": "gltf"
    }, {
        "name": "Wallcornerrond",
        "image": "models/thumbnails_new/wallCornerRond.png",
        "model": "models/gltf/wallCornerRond.glb",
        "type": "0",
        "format": "gltf"
    }, */ {
        "name": "Walldoorway",
        "image": "models/thumbnails_new/wallDoorway.png",
        "model": "models/gltf/wallDoorway.glb",                      //남겨놔야하는 
        "type": "7", // 3->7
        "format": "gltf"
    }, /* {
        "name": "Walldoorwaywide",
        "image": "models/thumbnails_new/wallDoorwayWide.png",
        "model": "models/gltf/wallDoorwayWide.glb",
        "type": "7", // 3->7
        "format": "gltf"
    }, {
        "name": "Wallhalf",
        "image": "models/thumbnails_new/wallHalf.png",
        "model": "models/gltf/wallHalf.glb",
        "type": "0",
        "format": "gltf"
    }, */ {
        "name": "Wallwindow",
        "image": "models/thumbnails_new/wallWindow.png",     //남겨놔야하는 
        "model": "models/gltf/wallWindow.glb",
        "type": "3",
        "format": "gltf"
    }, {
        "name": "Wallwindowslide",
        "image": "models/thumbnails_new/wallWindowSlide.png",      //남겨놔야하는 
        "model": "models/gltf/wallWindowSlide.glb",
        "type": "3",
        "format": "gltf"
    }, /* {
        "name": "Washer",
        "image": "models/thumbnails_new/washer.png",
        "model": "models/gltf/washer.glb",
        "type": "2", //1->2
        "format": "gltf"
    }, {
        "name": "Washerdryerstacked",
        "image": "models/thumbnails_new/washerDryerStacked.png",
        "model": "models/gltf/washerDryerStacked.glb",
        "type": "2", //1->2
        "format": "gltf"
    },
    {
        "name": "Bathroomcabinet",
        "image": "models/thumbnails_new/bathroomCabinet.png",
        "model": "models/gltf/bathroomCabinet.glb",
        "type": "2",
        "format": "gltf"
    }, 
    {
        "name": "Bathroomcabinetdrawer",
        "image": "models/thumbnails_new/bathroomCabinetDrawer.png",
        "model": "models/gltf/bathroomCabinetDrawer.glb",
        "type": "2", //9->2
        "format": "gltf"
    },*/ {
        "name": "Bathroommirror",
        "image": "models/thumbnails_new/bathroomMirror.png",
        "model": "models/gltf/bathroomMirror.glb",                    //남겨놔야하는 
        "type": "2",
        "format": "gltf"
    }, /* {
        "name": "Bathroomsink",
        "image": "models/thumbnails_new/bathroomSink.png",
        "model": "models/gltf/bathroomSink.glb",
        "type": "2", //9->2
        "format": "gltf"
    }, {
        "name": "Bathroomsinksquare",
        "image": "models/thumbnails_new/bathroomSinkSquare.png",
        "model": "models/gltf/bathroomSinkSquare.glb",
        "type": "2", //9->2
        "format": "gltf"
    },
    */
    {
        "name": "Bathtub",
        "image": "models/thumbnails_new/bathtub.png",         //남겨놔야하는 
        "model": "models/gltf/bathtub.glb",
        "type": "2", // 1->2
        "format": "gltf"
    },  {
        "name": "sofa1",
        "image": "models/thumbnails/sofa1.png",
        "model": "models/gltf/sofa1.glb",                  //내가 추가한 것들  소파
        "type": "1", // 1->2
        "format": "gltf"
    },  {
        "name": "desk1",
        "image": "models/thumbnails/office_desk1.png",
        "model": "models/gltf/office_desk1.glb",                  //내가 추가한 것들 사무용 책상
        "type": "1", // 1->2
        "format": "gltf"
    },  {
        "name": "bed1",
        "image": "models/thumbnails/bed1.png",
        "model": "models/gltf/bed1.glb",                  //내가 추가한 것들 침대
        "type": "1", // 1->2
        "format": "gltf"
    },  {
        "name": "wall_stand",
        "image": "models/thumbnails/wall_stand.png",
        "model": "models/gltf/wall_stand.glb",                  //내가 추가한 것들 선반
        "type": "2", // 1->2
        "format": "gltf"
    },  {
        "name": "wardrobe",
        "image": "models/thumbnails/wardrobe.png",
        "model": "models/gltf/wardrobe.glb",                  //내가 추가한 것들 장농
        "type": "1", // 1->2
        "format": "gltf"    
    },  {
        "name": "air_conditioner",
        "image": "models/thumbnails/air_conditioner.png",
        "model": "models/gltf/air_conditioner.glb",                  //내가 추가한 것들 에어컨
        "type": "2", // 1->2
        "format": "gltf"    
    },  {
        "name": "plant",
        "image": "models/thumbnails/plant.png",
        "model": "models/gltf/plant.glb",                  //내가 추가한 것들 화초
        "type": "8", // 1->2
        "format": "gltf"    
    },  {
        "name": "toilet1",
        "image": "models/thumbnails/toilet1.png",
        "model": "models/gltf/toilet1.glb",                  //내가 추가한 것들 변기
        "type": "2", // 1->2
        "format": "gltf"    
    },  {
        "name": "tub",
        "image": "models/thumbnails/tub.png",
        "model": "models/gltf/tub.glb",                  //내가 추가한 것들 욕조
        "type": "2", // 1->2
        "format": "gltf"    
    },  {
        "name": "sink",
        "image": "models/thumbnails/sink.png",
        "model": "models/gltf/sink4.glb",                  //내가 추가한 것들 싱크대
        "type": "2", // 1->2
        "format": "gltf"    
    },  {
        "name": "refrigerator",
        "image": "models/thumbnails/refrigerator1.png",
        "model": "models/gltf/refrigerator.glb",                  //내가 추가한 것들 냉장고1
        "type": "2", // 1->2
        "format": "gltf"    
    },  {
        "name": "refrigerator2",
        "image": "models/thumbnails/refrigerator2.png",
        "model": "models/gltf/refrigerator2.glb",                  //내가 추가한 것들 냉장고2
        "type": "2", // 1->2
        "format": "gltf"    
    },  
]
    var modelTypesNum = ["1", "2", "3", "4", "7", "8", "9"];
    // 1: FLoor item 바닥부착형 평행이동,     // 실내 인테리어 가구제품
    // 2:Wall item 벽면부착형 평행이동 수직이동,  //주방 욕실 인테리어
    // 3:in Wall item 벽면안쪽부착형 평행이동 수직이동 (벽변형됨),  // 창문 샷시 인테리어
    // 4:Ceiling item 천정부착형 평행이동, //천장 등기구 인테리어 
    // 7:in Wall Floor item 바닥부착형 벽면안쪽부착형 평행이동,  //현관문 및 방문 인테리어
    // 8: on Floor item 바닥부착형 평행이동,  // 실내 인테리어 가구제품 2
    // 9:Wall-floor item 바닥부착형 벽면부착형 평행이동,  // 실내 붙박이 인테리어 가구
    // 0:Anywhere item 날라다님 이상함 // 사용하지 말자

    var modelTypesIds = ["floor-items", "wall-items", "in-wall-items", "roof-items", "in-wall-floor-items", "on-floor-items", "wall-floor-items"];

    var itemsDiv = $("#items-wrapper");

    for (var i = 0; i < items.length; i++)

    {

        var item = items[i];

        itemsDiv = $("#" + modelTypesIds[modelTypesNum.indexOf(item.type)] + "-wrapper");

        var modelformat = (item.format) ? ' model-format="' + item.format + '"' : "";

        var html = '<div class="col-sm-4">' + '<a class="thumbnail add-item"' + ' model-name="' + item.name + '"' + ' model-url="' + item.model + '"' + ' model-type="' + item.type + '"' + modelformat + '>' + '<img src="' + item.image + '" alt="Add Item"   data-dismiss="modal" 	> ' + item.name + '</a></div>';

        itemsDiv.append(html);

    }

});