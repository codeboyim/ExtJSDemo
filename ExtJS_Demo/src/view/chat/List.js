Ext.define('ExtDemo.view.chat.List', {
    extend: 'Ext.view.View',
    alias: 'widget.chatlist',
    autoEl: 'ul',
    loadMask: false,
    itemSelector: 'li',
    store: 'Chats',
    id: 'chat-list',
    tpl: new Ext.XTemplate(
        '{% var lastUserId="", cn="";%}',
        '<tpl for=".">',
        '{% if(xindex>1){ %}',
        '{%     if(values.UserId!=parent[xindex-2]["UserId"]){ %}',
        '{%         cn=cn==""?"right":""; %}',
        '{%     } %}',
        '{% } %}',
        '<li class="{[cn]}"><i>{UserId}</i><b>{Message}</b></li>',
        '</tpl>'),
    listeners: {
        refresh: function () {
            var d = this.getEl().dom;
            this.scrollBy(0, d.scrollHeight - d.offsetHeight - d.scrollTop);
        }
    }
});