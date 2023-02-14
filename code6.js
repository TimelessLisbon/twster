gdjs.jogostripCode = {};
gdjs.jogostripCode.GDfundoObjects1= [];
gdjs.jogostripCode.GDfundoObjects2= [];
gdjs.jogostripCode.GDordemObjects1= [];
gdjs.jogostripCode.GDordemObjects2= [];
gdjs.jogostripCode.GDvoiceObjects1= [];
gdjs.jogostripCode.GDvoiceObjects2= [];

gdjs.jogostripCode.conditionTrue_0 = {val:false};
gdjs.jogostripCode.condition0IsTrue_0 = {val:false};
gdjs.jogostripCode.condition1IsTrue_0 = {val:false};


gdjs.jogostripCode.eventsList0 = function(runtimeScene) {

{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "voice");
}{runtimeScene.getScene().getVariables().get("ordem").setNumber(0);
}{runtimeScene.getScene().getVariables().get("ler").setNumber(0);
}{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "voice") < 2;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("voice"), gdjs.jogostripCode.GDvoiceObjects1);
{gdjs.evtsExt__VoiceRecognition__StartListening.func(runtimeScene, "pt-PT (Portugese)", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.jogostripCode.GDvoiceObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDvoiceObjects1[i].setString(gdjs.evtsExt__VoiceRecognition__RetrievetResultText.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "voice") > 2;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("voice"), gdjs.jogostripCode.GDvoiceObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDvoiceObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDvoiceObjects1[i].setString("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "voice");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("voice"), gdjs.jogostripCode.GDvoiceObjects1);

gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.jogostripCode.GDvoiceObjects1.length;i<l;++i) {
    if ( gdjs.jogostripCode.GDvoiceObjects1[i].getString() == "gira" ) {
        gdjs.jogostripCode.condition0IsTrue_0.val = true;
        gdjs.jogostripCode.GDvoiceObjects1[k] = gdjs.jogostripCode.GDvoiceObjects1[i];
        ++k;
    }
}
gdjs.jogostripCode.GDvoiceObjects1.length = k;}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("ordem").setNumber(gdjs.randomInRange(1, 17));
}{runtimeScene.getScene().getVariables().get("ler").setNumber(1);
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 1;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Pé Direito Roxo");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 2;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Pé Direito Vermelho");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 3;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Pé Direito Azul");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 4;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Pé Direito Amarelo");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 5;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Pé Esquerdo Roxo");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 6;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Pé Esquerdo Amarelo");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 7;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Pé Esquerdo Azul");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 8;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Pé Esquerdo Vermelho");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 9;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Mão Esquerda Vermelho");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 10;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Mão Direita Roxo");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 11;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Mão Direita Vermelho");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 12;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Mão Direita Azul");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 13;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Mão Direita Amarelo");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 14;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Mão Esquerda Roxo");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 15;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Mão Esquerda Amarelo");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 16;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Mão Esquerda Azul");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ordem")) == 17;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setString("Tira a roupa");
}
}}

}


{


gdjs.jogostripCode.condition0IsTrue_0.val = false;
{
gdjs.jogostripCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ler")) == 1;
}if (gdjs.jogostripCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs.jogostripCode.GDordemObjects1.length === 0 ) ? "" :gdjs.jogostripCode.GDordemObjects1[0].getString()), "Joana", 100, 100, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().get("ler").setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "voice");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ordem"), gdjs.jogostripCode.GDordemObjects1);
gdjs.copyArray(runtimeScene.getObjects("voice"), gdjs.jogostripCode.GDvoiceObjects1);
{for(var i = 0, len = gdjs.jogostripCode.GDordemObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDordemObjects1[i].setX((720 - (gdjs.jogostripCode.GDordemObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.jogostripCode.GDvoiceObjects1.length ;i < len;++i) {
    gdjs.jogostripCode.GDvoiceObjects1[i].setX((720 - (gdjs.jogostripCode.GDvoiceObjects1[i].getWidth())) / 2);
}
}}

}


};

gdjs.jogostripCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.jogostripCode.GDfundoObjects1.length = 0;
gdjs.jogostripCode.GDfundoObjects2.length = 0;
gdjs.jogostripCode.GDordemObjects1.length = 0;
gdjs.jogostripCode.GDordemObjects2.length = 0;
gdjs.jogostripCode.GDvoiceObjects1.length = 0;
gdjs.jogostripCode.GDvoiceObjects2.length = 0;

gdjs.jogostripCode.eventsList0(runtimeScene);

return;

}

gdjs['jogostripCode'] = gdjs.jogostripCode;
