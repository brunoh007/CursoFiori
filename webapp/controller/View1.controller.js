sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
function (Controller, JSONModel, Fragment) {
    "use strict";

    return Controller.extend("mentororia.fiori.ka.zkaui5242bf.controller.View1", {
        onInit: function () {

            var oModelJson = new JSONModel({
                name: 'João',
                showSecondName: true
            })
            this.getView().setModel(oModelJson);
            

        },
        onOpenDialog: function () {
            var oView = this.getView(),
                oDialogKids = this.getView().byId("dialogKids");
            if (!oDialogKids) {
                Fragment.load({
                    id: oView.getId(),
                    name: "mentororia.fiori.ka.zkaui5242bf.view.DialogKids",
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
