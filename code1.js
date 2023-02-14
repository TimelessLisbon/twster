gdjs.instrucoes_95shotsCode = {};
gdjs.instrucoes_95shotsCode.GDfundoObjects1= [];
gdjs.instrucoes_95shotsCode.GDfundoObjects2= [];
gdjs.instrucoes_95shotsCode.GDstartObjects1= [];
gdjs.instrucoes_95shotsCode.GDstartObjects2= [];

gdjs.instrucoes_95shotsCode.conditionTrue_0 = {val:false};
gdjs.instrucoes_95shotsCode.condition0IsTrue_0 = {val:false};
gdjs.instrucoes_95shotsCode.condition1IsTrue_0 = {val:false};
gdjs.instrucoes_95shotsCode.condition2IsTrue_0 = {val:false};


gdjs.instrucoes_95shotsCode.mapOfGDgdjs_46instrucoes_9595shotsCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.instrucoes_95shotsCode.GDstartObjects1});
gdjs.instrucoes_95shotsCode.mapOfGDgdjs_46instrucoes_9595shotsCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.instrucoes_95shotsCode.GDstartObjects1});
gdjs.instrucoes_95shotsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.instrucoes_95shotsCode.GDstartObjects1);

gdjs.instrucoes_95shotsCode.condition0IsTrue_0.val = false;
gdjs.instrucoes_95shotsCode.condition1IsTrue_0.val = false;
{
gdjs.instrucoes_95shotsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.instrucoes_95shotsCode.mapOfGDgdjs_46instrucoes_9595shotsCode_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.instrucoes_95shotsCode.condition0IsTrue_0.val ) {
{
gdjs.instrucoes_95shotsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.instrucoes_95shotsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.instrucoes_95shotsCode.GDstartObjects1 */
{for(var i = 0, len = gdjs.instrucoes_95shotsCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.instrucoes_95shotsCode.GDstartObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.instrucoes_95shotsCode.GDstartObjects1);

gdjs.instrucoes_95shotsCode.condition0IsTrue_0.val = false;
gdjs.instrucoes_95shotsCode.condition1IsTrue_0.val = false;
{
gdjs.instrucoes_95shotsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.instrucoes_95shotsCode.mapOfGDgdjs_46instrucoes_9595shotsCode_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.instrucoes_95shotsCode.condition0IsTrue_0.val ) {
{
gdjs.instrucoes_95shotsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.instrucoes_95shotsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.instrucoes_95shotsCode.GDstartObjects1 */
{for(var i = 0, len = gdjs.instrucoes_95shotsCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.instrucoes_95shotsCode.GDstartObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "jogo", false);
}}

}


};

gdjs.instrucoes_95shotsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.instrucoes_95shotsCode.GDfundoObjects1.length = 0;
gdjs.instrucoes_95shotsCode.GDfundoObjects2.length = 0;
gdjs.instrucoes_95shotsCode.GDstartObjects1.length = 0;
gdjs.instrucoes_95shotsCode.GDstartObjects2.length = 0;

gdjs.instrucoes_95shotsCode.eventsList0(runtimeScene);

return;

}

gdjs['instrucoes_95shotsCode'] = gdjs.instrucoes_95shotsCode;
