sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sapui5exercise1.controller.View1", {
        onInit() {

        },

        onClearPress: function(){
            var oView = this.getView();

            var userNameInput    = oView.byId("user_name");
            var userStreetInput  = oView.byId("user_street");
            var userNoInput      = oView.byId("user_no");
            var userZipCodeInput = oView.byId("user_zip_code");
            var userCityInput    = oView.byId("user_city");
            var countrySelect    = oView.byId("country_select");
            
            if(userNameInput){
                userNameInput.setValue("");
            }

            if(userStreetInput){
                userStreetInput.setValue("");
            }
            
            if(userNoInput){
                userNoInput.setValue("");
            }

            if(userZipCodeInput){
                userZipCodeInput.setValue("");
            }

            if(userCityInput){
                userCityInput.setValue("");
            }

            if(countrySelect){
                countrySelect.setSelectedKey("");
            }
        }
    });
});