sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/pjnamespace/project1/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], 
function (Controller, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("com.pjnamespace.project1.controller.View1", {

        formatter: formatter,

        onInit: function () {
        },

        onSubmit: function () {
            var select = this.getView().byId("select").getSelectedKey();
            var combo = this.getView().byId("combo").getSelectedKeys();
            var radio = this.getView().byId("radio").getSelectedIndex();
        },

        onGo: function () {
            var aFilter = [];
            var customer = this.byId("customer").getValue();
            if (customer !== "") {
                aFilter.push(new Filter("CustomerId", "EQ", customer));
            }
            this.byId("table").getBinding("items").filter(aFilter)            
        },
        onReset: function () {
            this.byId("customer").setValue("");
            this.byId("agency").setValue("");
        }

    });
});