gdjs.inicioCode = {};
gdjs.inicioCode.GDfundoObjects1= [];
gdjs.inicioCode.GDfundoObjects2= [];
gdjs.inicioCode.GDchooseObjects1= [];
gdjs.inicioCode.GDchooseObjects2= [];
gdjs.inicioCode.GDnormalObjects1= [];
gdjs.inicioCode.GDnormalObjects2= [];
gdjs.inicioCode.GDshotsObjects1= [];
gdjs.inicioCode.GDshotsObjects2= [];
gdjs.inicioCode.GDstripObjects1= [];
gdjs.inicioCode.GDstripObjects2= [];
gdjs.inicioCode.GDsexyObjects1= [];
gdjs.inicioCode.GDsexyObjects2= [];

gdjs.inicioCode.conditionTrue_0 = {val:false};
gdjs.inicioCode.condition0IsTrue_0 = {val:false};
gdjs.inicioCode.condition1IsTrue_0 = {val:false};
gdjs.inicioCode.condition2IsTrue_0 = {val:false};


gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDnormalObjects1Objects = Hashtable.newFrom({"normal": gdjs.inicioCode.GDnormalObjects1});
gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDnormalObjects1Objects = Hashtable.newFrom({"normal": gdjs.inicioCode.GDnormalObjects1});
gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDshotsObjects1Objects = Hashtable.newFrom({"shots": gdjs.inicioCode.GDshotsObjects1});
gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDshotsObjects1Objects = Hashtable.newFrom({"shots": gdjs.inicioCode.GDshotsObjects1});
gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDstripObjects1Objects = Hashtable.newFrom({"strip": gdjs.inicioCode.GDstripObjects1});
gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDstripObjects1Objects = Hashtable.newFrom({"strip": gdjs.inicioCode.GDstripObjects1});
gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDsexyObjects1Objects = Hashtable.newFrom({"sexy": gdjs.inicioCode.GDsexyObjects1});
gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDsexyObjects1Objects = Hashtable.newFrom({"sexy": gdjs.inicioCode.GDsexyObjects1});
gdjs.inicioCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("normal"), gdjs.inicioCode.GDnormalObjects1);

gdjs.inicioCode.condition0IsTrue_0.val = false;
gdjs.inicioCode.condition1IsTrue_0.val = false;
{
gdjs.inicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDnormalObjects1Objects, runtimeScene, true, false);
}if ( gdjs.inicioCode.condition0IsTrue_0.val ) {
{
gdjs.inicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.inicioCode.condition1IsTrue_0.val) {
/* Reuse gdjs.inicioCode.GDnormalObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDnormalObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDnormalObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("normal"), gdjs.inicioCode.GDnormalObjects1);

gdjs.inicioCode.condition0IsTrue_0.val = false;
gdjs.inicioCode.condition1IsTrue_0.val = false;
{
gdjs.inicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDnormalObjects1Objects, runtimeScene, true, false);
}if ( gdjs.inicioCode.condition0IsTrue_0.val ) {
{
gdjs.inicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.inicioCode.condition1IsTrue_0.val) {
/* Reuse gdjs.inicioCode.GDnormalObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDnormalObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDnormalObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "instrucoes_normal", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("shots"), gdjs.inicioCode.GDshotsObjects1);

gdjs.inicioCode.condition0IsTrue_0.val = false;
gdjs.inicioCode.condition1IsTrue_0.val = false;
{
gdjs.inicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDshotsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.inicioCode.condition0IsTrue_0.val ) {
{
gdjs.inicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.inicioCode.condition1IsTrue_0.val) {
/* Reuse gdjs.inicioCode.GDshotsObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDshotsObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDshotsObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("shots"), gdjs.inicioCode.GDshotsObjects1);

gdjs.inicioCode.condition0IsTrue_0.val = false;
gdjs.inicioCode.condition1IsTrue_0.val = false;
{
gdjs.inicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDshotsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.inicioCode.condition0IsTrue_0.val ) {
{
gdjs.inicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.inicioCode.condition1IsTrue_0.val) {
/* Reuse gdjs.inicioCode.GDshotsObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDshotsObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDshotsObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "instrucoes_shots", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("strip"), gdjs.inicioCode.GDstripObjects1);

gdjs.inicioCode.condition0IsTrue_0.val = false;
gdjs.inicioCode.condition1IsTrue_0.val = false;
{
gdjs.inicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDstripObjects1Objects, runtimeScene, true, false);
}if ( gdjs.inicioCode.condition0IsTrue_0.val ) {
{
gdjs.inicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.inicioCode.condition1IsTrue_0.val) {
/* Reuse gdjs.inicioCode.GDstripObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDstripObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDstripObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("strip"), gdjs.inicioCode.GDstripObjects1);

gdjs.inicioCode.condition0IsTrue_0.val = false;
gdjs.inicioCode.condition1IsTrue_0.val = false;
{
gdjs.inicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDstripObjects1Objects, runtimeScene, true, false);
}if ( gdjs.inicioCode.condition0IsTrue_0.val ) {
{
gdjs.inicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.inicioCode.condition1IsTrue_0.val) {
/* Reuse gdjs.inicioCode.GDstripObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDstripObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDstripObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "instrucoes_strip", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sexy"), gdjs.inicioCode.GDsexyObjects1);

gdjs.inicioCode.condition0IsTrue_0.val = false;
gdjs.inicioCode.condition1IsTrue_0.val = false;
{
gdjs.inicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDsexyObjects1Objects, runtimeScene, true, false);
}if ( gdjs.inicioCode.condition0IsTrue_0.val ) {
{
gdjs.inicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.inicioCode.condition1IsTrue_0.val) {
/* Reuse gdjs.inicioCode.GDsexyObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDsexyObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDsexyObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sexy"), gdjs.inicioCode.GDsexyObjects1);

gdjs.inicioCode.condition0IsTrue_0.val = false;
gdjs.inicioCode.condition1IsTrue_0.val = false;
{
gdjs.inicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDsexyObjects1Objects, runtimeScene, true, false);
}if ( gdjs.inicioCode.condition0IsTrue_0.val ) {
{
gdjs.inicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.inicioCode.condition1IsTrue_0.val) {
/* Reuse gdjs.inicioCode.GDsexyObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDsexyObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDsexyObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "instrucoes_sexy", false);
}}

}


{


{
}

}


};

gdjs.inicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicioCode.GDfundoObjects1.length = 0;
gdjs.inicioCode.GDfundoObjects2.length = 0;
gdjs.inicioCode.GDchooseObjects1.length = 0;
gdjs.inicioCode.GDchooseObjects2.length = 0;
gdjs.inicioCode.GDnormalObjects1.length = 0;
gdjs.inicioCode.GDnormalObjects2.length = 0;
gdjs.inicioCode.GDshotsObjects1.length = 0;
gdjs.inicioCode.GDshotsObjects2.length = 0;
gdjs.inicioCode.GDstripObjects1.length = 0;
gdjs.inicioCode.GDstripObjects2.length = 0;
gdjs.inicioCode.GDsexyObjects1.length = 0;
gdjs.inicioCode.GDsexyObjects2.length = 0;

gdjs.inicioCode.eventsList0(runtimeScene);

return;

}

gdjs['inicioCode'] = gdjs.inicioCode;
