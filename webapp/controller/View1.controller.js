sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
function (Controller, JSONModel, Fragment) {
    "use strict";

    return Controller.extend("mentoria.fiori.ka.zkaui5242bf.controller.View1", {
        onInit: function () {

            var oModelJson = new JSONModel({
                name: 'João',
                showSecondName: true
            })
            // oModelJson.setDefaultBindingMode(BindingMode)
            this.getView().setModel(oModelJson, "model1");
            
            var oModelJson2 = new JSONModel({
                name: 'Pedro',
                showSecondName: true
            })
            this.getView().setModel(oModelJson2, "model2");


            var oModelJson3 = new JSONModel();
            oModelJson3.loadData("model/Products.json")
            this.getView().setModel(oModelJson3, "model3");            


        },
        onOpenDialog: function () {
            var oView = this.getView(),
                oDialogKids = this.getView().byId("dialogKids");
            if (!oDialogKids) {
                Fragment.load({
                    id: oView.getId(),
                    name: "mentoria.fiori.ka.zkaui5242bf.view.DialogKids",
                    type: "XML",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            } else {
                oDialogKids.open();
            }
        },
        onClosePopup: function () {
            this.getView().byId("dialogKids").close();
        },
        
    });
    
});
