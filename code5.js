gdjs.jogosexyCode = {};
gdjs.jogosexyCode.GDfundoObjects1= [];
gdjs.jogosexyCode.GDfundoObjects2= [];
gdjs.jogosexyCode.GDordemObjects1= [];
gdjs.jogosexyCode.GDordemObjects2= [];
gdjs.jogosexyCode.GDvoiceObjects1= [];
gdjs.jogosexyCode.GDvoiceObjects2= [];
gdjs.jogosexyCode.GDinicioObjects1= [];
gdjs.jogosexyCode.GDinicioObjects2= [];

gdjs.jogosexyCode.conditionTrue_0 = {val:false};
gdjs.jogosexyCode.condition0IsTrue_0 = {val:false};
gdjs.jogosexyCode.condition1IsTrue_0 = {val:false};
gdjs.jogosexyCode.condition2IsTrue_0 = {val:false};


gdjs.jogosexyCode.mapOfGDgdjs_46jogosexyCode_46GDinicioObjects1Objects = Hashtable.newFrom({"inicio": gdjs.jogosexyCode.GDinicioObjects1});
gdjs.jogosexyCode.mapOfGDgdjs_46jogosexyCode_46GDinicioObjects1Objects = Hashtable.newFrom({"inicio": gdjs.jogosexyCode.GDinicioObjects1});
gdjs.jogosexyCode.eventsList0 = function(runtimeScene) {

{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "voice");
}{runtimeScene.getScene().getVariables().get("ordem").setNumber(0);
}{runtimeScene.getScene().getVariables().get("ler").setNumber(0);
}{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "voice") < 2;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("voice"), gdjs.jogosexyCode.GDvoiceObjects1);
{gdjs.evtsExt__VoiceRecognition__StartListening.func(runtimeScene, "pt-PT (Portugese)", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.jogosexyCode.GDvoiceObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDvoiceObjects1[i].setString(gdjs.evtsExt__VoiceRecognition__RetrievetResultText.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "voice") > 2;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("voice"), gdjs.jogosexyCode.GDvoiceObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDvoiceObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDvoiceObjects1[i].setString("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "voice");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("voice"), gdjs.jogosexyCode.GDvoiceObjects1);

gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.jogosexyCode.GDvoiceObjects1.length;i<l;++i) {
    if ( gdjs.jogosexyCode.GDvoiceObjects1[i].getString() == "gira" ) {
        gdjs.jogosexyCode.condition0IsTrue_0.val = true;
        gdjs.jogosexyCode.GDvoiceObjects1[k] = gdjs.jogosexyCode.GDvoiceObjects1[i];
        ++k;
    }
}
gdjs.jogosexyCode.GDvoiceObjects1.length = k;}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("ordem").setNumber(gdjs.randomInRange(1, 25));
}{runtimeScene.getScene().getVariables().get("ler").setNumber(1);
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 1;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Pé Direito Roxo");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 2;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Pé Direito Vermelho");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 3;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Pé Direito Azul");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 4;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Pé Direito Amarelo");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 5;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Pé Esquerdo Roxo");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 6;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Pé Esquerdo Amarelo");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 7;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Pé Esquerdo Azul");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 8;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Pé Esquerdo Vermelho");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 9;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão Esquerda Vermelho");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 10;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão Direita Roxo");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 11;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão Direita Vermelho");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 12;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão Direita Azul");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 13;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão Direita Amarelo");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 14;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão Esquerda Roxo");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 15;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão Esquerda Amarelo");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 16;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão Esquerda Azul");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 17;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Beijo na boca");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 18;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Beijo no mamilo");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 19;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão direita no bumbum");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 20;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão esquerda no bumbum");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 21;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão direita na maminha");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 22;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão esquerda na maminha");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 23;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão direita festinha no corpo");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 24;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Mão esquerda festinha no corpo");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 25;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setString("Beijo em sitio à escolha");
}
}}

}


{


gdjs.jogosexyCode.condition0IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ler")) == 1;
}if (gdjs.jogosexyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs.jogosexyCode.GDordemObjects1.length === 0 ) ? "" :gdjs.jogosexyCode.GDordemObjects1[0].getString()), "Joana", 100, 75, 15, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().get("ler").setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "voice");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogosexyCode.GDordemObjects1);
gdjs.copyArray(runtimeScene.getObjects("voice"), gdjs.jogosexyCode.GDvoiceObjects1);
{for(var i = 0, len = gdjs.jogosexyCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDordemObjects1[i].setX((720 - (gdjs.jogosexyCode.GDordemObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.jogosexyCode.GDvoiceObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDvoiceObjects1[i].setX((720 - (gdjs.jogosexyCode.GDvoiceObjects1[i].getWidth())) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.jogosexyCode.GDinicioObjects1);

gdjs.jogosexyCode.condition0IsTrue_0.val = false;
gdjs.jogosexyCode.condition1IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.jogosexyCode.mapOfGDgdjs_46jogosexyCode_46GDinicioObjects1Objects, runtimeScene, true, false);
}if ( gdjs.jogosexyCode.condition0IsTrue_0.val ) {
{
gdjs.jogosexyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.jogosexyCode.condition1IsTrue_0.val) {
/* Reuse gdjs.jogosexyCode.GDinicioObjects1 */
{for(var i = 0, len = gdjs.jogosexyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDinicioObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "inicio", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.jogosexyCode.GDinicioObjects1);

gdjs.jogosexyCode.condition0IsTrue_0.val = false;
gdjs.jogosexyCode.condition1IsTrue_0.val = false;
{
gdjs.jogosexyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.jogosexyCode.mapOfGDgdjs_46jogosexyCode_46GDinicioObjects1Objects, runtimeScene, true, false);
}if ( gdjs.jogosexyCode.condition0IsTrue_0.val ) {
{
gdjs.jogosexyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.jogosexyCode.condition1IsTrue_0.val) {
/* Reuse gdjs.jogosexyCode.GDinicioObjects1 */
{for(var i = 0, len = gdjs.jogosexyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.jogosexyCode.GDinicioObjects1[i].setAnimation(1);
}
}}

}


};

gdjs.jogosexyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.jogosexyCode.GDfundoObjects1.length = 0;
gdjs.jogosexyCode.GDfundoObjects2.length = 0;
gdjs.jogosexyCode.GDordemObjects1.length = 0;
gdjs.jogosexyCode.GDordemObjects2.length = 0;
gdjs.jogosexyCode.GDvoiceObjects1.length = 0;
gdjs.jogosexyCode.GDvoiceObjects2.length = 0;
gdjs.jogosexyCode.GDinicioObjects1.length = 0;
gdjs.jogosexyCode.GDinicioObjects2.length = 0;

gdjs.jogosexyCode.eventsList0(runtimeScene);

return;

}

gdjs['jogosexyCode'] = gdjs.jogosexyCode;
