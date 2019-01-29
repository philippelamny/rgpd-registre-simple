let ComponentActivitesList = {
    template: `
        
    `
};

let ComponentActiviteItem = {
    template: `
        
    `
};

Vue.component('component-activites-list', ComponentActivitesList);
Vue.component('component-activite-item', ComponentActiviteItem);


var vue = new Vue({
    el: '#app',
    data: {
        data: {
            title: 'Registre conforme'
            , societe : ''
            , pdg: {

            }
            , dpo: {

            }
        },
    },
});
