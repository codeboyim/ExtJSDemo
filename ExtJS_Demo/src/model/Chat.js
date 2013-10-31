Ext.define('ExtDemo.model.Chat', {
    extend: 'Ext.data.Model',
    fields: ['UserId', 'Message'],

    proxy: {
        type: 'ajax',
        api: {
            create: '/chats/new'
        },
        reader: {
            root: 'data'
        }
    }
});
