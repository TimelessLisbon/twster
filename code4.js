gdjs.instrucoes_95normalCode = {};
gdjs.instrucoes_95normalCode.GDfundoObjects1= [];
gdjs.instrucoes_95normalCode.GDfundoObjects2= [];
gdjs.instrucoes_95normalCode.GDstartObjects1= [];
gdjs.instrucoes_95normalCode.GDstartObjects2= [];

gdjs.instrucoes_95normalCode.conditionTrue_0 = {val:false};
gdjs.instrucoes_95normalCode.condition0IsTrue_0 = {val:false};
gdjs.instrucoes_95normalCode.condition1IsTrue_0 = {val:false};
gdjs.instrucoes_95normalCode.condition2IsTrue_0 = {val:false};


gdjs.instrucoes_95normalCode.mapOfGDgdjs_46instrucoes_9595normalCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.instrucoes_95normalCode.GDstartObjects1});
gdjs.instrucoes_95normalCode.mapOfGDgdjs_46instrucoes_9595normalCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.instrucoes_95normalCode.GDstartObjects1});
gdjs.instrucoes_95normalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.instrucoes_95normalCode.GDstartObjects1);

gdjs.instrucoes_95normalCode.condition0IsTrue_0.val = false;
gdjs.instrucoes_95normalCode.condition1IsTrue_0.val = false;
{
gdjs.instrucoes_95normalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.instrucoes_95normalCode.mapOfGDgdjs_46instrucoes_9595normalCode_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.instrucoes_95normalCode.condition0IsTrue_0.val ) {
{
gdjs.instrucoes_95normalCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.instrucoes_95normalCode.condition1IsTrue_0.val) {
/* Reuse gdjs.instrucoes_95normalCode.GDstartObjects1 */
{for(var i = 0, len = gdjs.instrucoes_95normalCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.instrucoes_95normalCode.GDstartObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.instrucoes_95normalCode.GDstartObjects1);

gdjs.instrucoes_95normalCode.condition0IsTrue_0.val = false;
gdjs.instrucoes_95normalCode.condition1IsTrue_0.val = false;
{
gdjs.instrucoes_95normalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.instrucoes_95normalCode.mapOfGDgdjs_46instrucoes_9595normalCode_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.instrucoes_95normalCode.condition0IsTrue_0.val ) {
{
gdjs.instrucoes_95normalCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.instrucoes_95normalCode.condition1IsTrue_0.val) {
/* Reuse gdjs.instrucoes_95normalCode.GDstartObjects1 */
{for(var i = 0, len = gdjs.instrucoes_95normalCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.instrucoes_95normalCode.GDstartObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "jogo", false);
}}

}


};

gdjs.instrucoes_95normalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.instrucoes_95normalCode.GDfundoObjects1.length = 0;
gdjs.instrucoes_95normalCode.GDfundoObjects2.length = 0;
gdjs.instrucoes_95normalCode.GDstartObjects1.length = 0;
gdjs.instrucoes_95normalCode.GDstartObjects2.length = 0;

gdjs.instrucoes_95normalCode.eventsList0(runtimeScene);

return;

}

gdjs['instrucoes_95normalCode'] = gdjs.instrucoes_95normalCode;
