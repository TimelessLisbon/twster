gdjs.jogoCode = {};
gdjs.jogoCode.GDfundoObjects1= [];
gdjs.jogoCode.GDfundoObjects2= [];
gdjs.jogoCode.GDmembroObjects1= [];
gdjs.jogoCode.GDmembroObjects2= [];
gdjs.jogoCode.GDcorObjects1= [];
gdjs.jogoCode.GDcorObjects2= [];
gdjs.jogoCode.GDvoiceObjects1= [];
gdjs.jogoCode.GDvoiceObjects2= [];
gdjs.jogoCode.GDinicioObjects1= [];
gdjs.jogoCode.GDinicioObjects2= [];

gdjs.jogoCode.conditionTrue_0 = {val:false};
gdjs.jogoCode.condition0IsTrue_0 = {val:false};
gdjs.jogoCode.condition1IsTrue_0 = {val:false};
gdjs.jogoCode.condition2IsTrue_0 = {val:false};


gdjs.jogoCode.mapOfGDgdjs_46jogoCode_46GDinicioObjects1Objects = Hashtable.newFrom({"inicio": gdjs.jogoCode.GDinicioObjects1});
gdjs.jogoCode.mapOfGDgdjs_46jogoCode_46GDinicioObjects1Objects = Hashtable.newFrom({"inicio": gdjs.jogoCode.GDinicioObjects1});
gdjs.jogoCode.eventsList0 = function(runtimeScene) {

{


gdjs.jogoCode.condition0IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.jogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cor"), gdjs.jogoCode.GDcorObjects1);
gdjs.copyArray(runtimeScene.getObjects("membro"), gdjs.jogoCode.GDmembroObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "voice");
}{runtimeScene.getScene().getVariables().get("membro").setNumber(0);
}{runtimeScene.getScene().getVariables().get("cor").setNumber(0);
}{runtimeScene.getScene().getVariables().get("ler").setNumber(0);
}{for(var i = 0, len = gdjs.jogoCode.GDcorObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDcorObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.jogoCode.GDmembroObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDmembroObjects1[i].setString("");
}
}}

}


{


gdjs.jogoCode.condition0IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "voice") < 2;
}if (gdjs.jogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("voice"), gdjs.jogoCode.GDvoiceObjects1);
{gdjs.evtsExt__VoiceRecognition__StartListening.func(runtimeScene, "pt-PT (Portugese)", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.jogoCode.GDvoiceObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDvoiceObjects1[i].setString(gdjs.evtsExt__VoiceRecognition__RetrievetResultText.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.jogoCode.condition0IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "voice") > 2;
}if (gdjs.jogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("voice"), gdjs.jogoCode.GDvoiceObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDvoiceObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDvoiceObjects1[i].setString("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "voice");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("voice"), gdjs.jogoCode.GDvoiceObjects1);

gdjs.jogoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.jogoCode.GDvoiceObjects1.length;i<l;++i) {
    if ( gdjs.jogoCode.GDvoiceObjects1[i].getString() == "gira" ) {
        gdjs.jogoCode.condition0IsTrue_0.val = true;
        gdjs.jogoCode.GDvoiceObjects1[k] = gdjs.jogoCode.GDvoiceObjects1[i];
        ++k;
    }
}
gdjs.jogoCode.GDvoiceObjects1.length = k;}if (gdjs.jogoCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("cor").setNumber(gdjs.randomInRange(1, 4));
}{runtimeScene.getScene().getVariables().get("membro").setNumber(gdjs.randomInRange(1, 4));
}{runtimeScene.getScene().getVariables().get("ler").setNumber(1);
}}

}


{


gdjs.jogoCode.condition0IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("cor")) == 1;
}if (gdjs.jogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cor"), gdjs.jogoCode.GDcorObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDcorObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDcorObjects1[i].setString("Roxo");
}
}}

}


{


gdjs.jogoCode.condition0IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("cor")) == 2;
}if (gdjs.jogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cor"), gdjs.jogoCode.GDcorObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDcorObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDcorObjects1[i].setString("Vermelho");
}
}}

}


{


gdjs.jogoCode.condition0IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("cor")) == 3;
}if (gdjs.jogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cor"), gdjs.jogoCode.GDcorObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDcorObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDcorObjects1[i].setString("Azul");
}
}}

}


{


gdjs.jogoCode.condition0IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("cor")) == 4;
}if (gdjs.jogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cor"), gdjs.jogoCode.GDcorObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDcorObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDcorObjects1[i].setString("Amarelo");
}
}}

}


{


gdjs.jogoCode.condition0IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("membro")) == 1;
}if (gdjs.jogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("membro"), gdjs.jogoCode.GDmembroObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDmembroObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDmembroObjects1[i].setString("Pé Direito");
}
}}

}


{


gdjs.jogoCode.condition0IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("membro")) == 4;
}if (gdjs.jogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("membro"), gdjs.jogoCode.GDmembroObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDmembroObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDmembroObjects1[i].setString("Pé Esquerdo");
}
}}

}


{


gdjs.jogoCode.condition0IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("membro")) == 3;
}if (gdjs.jogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("membro"), gdjs.jogoCode.GDmembroObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDmembroObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDmembroObjects1[i].setString("Mão Direita");
}
}}

}


{


gdjs.jogoCode.condition0IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("membro")) == 2;
}if (gdjs.jogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("membro"), gdjs.jogoCode.GDmembroObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDmembroObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDmembroObjects1[i].setString("Mão Esquerda");
}
}}

}


{


gdjs.jogoCode.condition0IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ler")) == 1;
}if (gdjs.jogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cor"), gdjs.jogoCode.GDcorObjects1);
gdjs.copyArray(runtimeScene.getObjects("membro"), gdjs.jogoCode.GDmembroObjects1);
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs.jogoCode.GDmembroObjects1.length === 0 ) ? "" :gdjs.jogoCode.GDmembroObjects1[0].getString()) + (( gdjs.jogoCode.GDcorObjects1.length === 0 ) ? "" :gdjs.jogoCode.GDcorObjects1[0].getString()), "Joana", 100, 75, 15, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().get("ler").setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "voice");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cor"), gdjs.jogoCode.GDcorObjects1);
gdjs.copyArray(runtimeScene.getObjects("membro"), gdjs.jogoCode.GDmembroObjects1);
gdjs.copyArray(runtimeScene.getObjects("voice"), gdjs.jogoCode.GDvoiceObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDcorObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDcorObjects1[i].setX((720 - (gdjs.jogoCode.GDcorObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.jogoCode.GDmembroObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDmembroObjects1[i].setX((720 - (gdjs.jogoCode.GDmembroObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.jogoCode.GDvoiceObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDvoiceObjects1[i].setX((720 - (gdjs.jogoCode.GDvoiceObjects1[i].getWidth())) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.jogoCode.GDinicioObjects1);

gdjs.jogoCode.condition0IsTrue_0.val = false;
gdjs.jogoCode.condition1IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.jogoCode.mapOfGDgdjs_46jogoCode_46GDinicioObjects1Objects, runtimeScene, true, false);
}if ( gdjs.jogoCode.condition0IsTrue_0.val ) {
{
gdjs.jogoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.jogoCode.condition1IsTrue_0.val) {
/* Reuse gdjs.jogoCode.GDinicioObjects1 */
{for(var i = 0, len = gdjs.jogoCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDinicioObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.jogoCode.GDinicioObjects1);

gdjs.jogoCode.condition0IsTrue_0.val = false;
gdjs.jogoCode.condition1IsTrue_0.val = false;
{
gdjs.jogoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.jogoCode.mapOfGDgdjs_46jogoCode_46GDinicioObjects1Objects, runtimeScene, true, false);
}if ( gdjs.jogoCode.condition0IsTrue_0.val ) {
{
gdjs.jogoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.jogoCode.condition1IsTrue_0.val) {
/* Reuse gdjs.jogoCode.GDinicioObjects1 */
{for(var i = 0, len = gdjs.jogoCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDinicioObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "inicio", false);
}}

}


};

gdjs.jogoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.jogoCode.GDfundoObjects1.length = 0;
gdjs.jogoCode.GDfundoObjects2.length = 0;
gdjs.jogoCode.GDmembroObjects1.length = 0;
gdjs.jogoCode.GDmembroObjects2.length = 0;
gdjs.jogoCode.GDcorObjects1.length = 0;
gdjs.jogoCode.GDcorObjects2.length = 0;
gdjs.jogoCode.GDvoiceObjects1.length = 0;
gdjs.jogoCode.GDvoiceObjects2.length = 0;
gdjs.jogoCode.GDinicioObjects1.length = 0;
gdjs.jogoCode.GDinicioObjects2.length = 0;

gdjs.jogoCode.eventsList0(runtimeScene);

return;

}

gdjs['jogoCode'] = gdjs.jogoCode;
