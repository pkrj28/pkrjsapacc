sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/pjnamespace/project1/model/formatter"

], 
function (Controller,formatter)  {
    "use strict";
    return Controller.extend("com.pjnamespace.project1.controller.View1", {
        f:formatter,
        onInit() {
        }
    });
});