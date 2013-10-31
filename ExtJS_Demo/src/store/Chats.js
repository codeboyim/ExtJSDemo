Ext.define('ExtDemo.store.Chats', {
    extend: 'Ext.data.Store',
    model: 'ExtDemo.model.Chat',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: '/api/chats/list',
            create: '/api/chats/new'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }

});
