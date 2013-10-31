Ext.define('ExtDemo.controller.Chats', {
    extend: 'Ext.app.Controller',
    stores: ['Chats'],
    models: ['Chat'],
    views: [
        'chat.List',
        'chat.New'
    ],

    init: function () {
        var self = this;
        this.control({

            '#chat-field': {
                keyup: this.addMessage
            }
        })

    },

    addMessage: function (t, e) {
        var chat,
            store = this.getChatsStore();

        if (e.getKey() === e.ENTER && t.getValue().trim().length > 0) {

            chat = Ext.create('ExtDemo.model.Chat', { Message: t.getValue().trim() });
            chat.save({
                callback: function (c, op, success) {
                    if (success) {
                        store.add(c);
                        t.setValue('');
                    }
                }
            });
        }
    }
});