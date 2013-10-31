//Ext.Loader.setConfig({
//    enabled: true
//});
//Ext.require([
//    //'Ext.diag.layout.Context',
//    //'Ext.diag.layout.ContextItem',
//]);
Ext.onReady(function () {

    Ext.application({

        name: 'ExtDemo',
        appFolder: 'src',
        controllers: ['Chats'],
        stores: ['Chats'],

        launch: function () {
            var winLogin,
                app = this,
                connection = $.connection('/shout');

            connection.received(function (data) {
                app.getChatsStore().load();
            });


            connection.start().done(function () {
                app.getChatsStore().on({
                    add: function () {

                        connection.send('shout');
                    }
                })
            });


            if (!winLogin) {
                winLogin = Ext.create('Ext.window.Window',
                    {
                        title: 'Enter Your Email',
                        layout: 'fit',
                        autoShow: false,
                        items: [{
                            xtype: 'form',
                            url: 'Login/Login',
                            items: [{
                                xtype: 'textfield',
                                name: 'email',
                                fieldLabel: 'Email',
                                vtype: 'email',
                                allowBlank: false
                            }]
                        }],
                        buttons: [{
                            text: 'Enter',
                            handler: function () {
                                var form = this.up('window').down('form');

                                if (form.isValid()) {
                                    form.submit({
                                        success: function (form, action) {
                                            winLogin.hide();
                                            app.createMainView();
                                        },
                                        failure: function (form, action) {
                                            Ext.Msg.alert('Failed', action.result.msg);
                                        }
                                    });


                                }
                            }
                        }]

                    });
            }


            Ext.Ajax.request({
                url: 'Login/IsAuthenticated',
                success: function (res) {

                    var d = Ext.JSON.decode(res.responseText, true);

                    if (d) {

                        if (d.result == 'ok') {

                            app.createMainView();

                        }
                        else {

                            winLogin.show();
                        }
                    }
                }
            });

        },
        createMainView: function () {
            Ext.create('Ext.container.Viewport', {
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'panel',
                        layout: 'border',
                        width: 300,
                        flex: 10,
                        margin: 20,

                        items: [
                        {
                            xtype: 'chatlist',
                            region: 'center',
                            autoScroll: true
                        },
                        {
                            xtype: 'chatfield',
                            region: 'south'

                        }]
                    }]
            });
        }

    });

});