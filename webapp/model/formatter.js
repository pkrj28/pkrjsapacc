sap.ui.define([
], 
function () {
    "use strict";
    return {
        FormatStatus: function(Status){
        if(Status==="P"){
            return "Pass(P)";
        }
        else if(Status==="N"){
            return "No(N)";
        }
         else { return Status }
        },
       FormatDes: function(Description){
        if(Description==="Vacation"){
            return "Error";
        }       
        }
    };
});