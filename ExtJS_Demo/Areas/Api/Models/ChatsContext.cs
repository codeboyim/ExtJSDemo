using System;
using System.Web;
using System.Collections.Generic;

namespace ExtJS_Demo.Areas.Api
{
    public class ChatsContext
    {
        public Chat Create(Chat chat)
        {
            chat.Id = Guid.NewGuid();
            List<Chat> chats = GetChats();
            chats.Add(chat);
            return chat;
        }

        public List<Chat> GetChats()
        {

            if (HttpContext.Current.Application["Chats"] == null)
            {
                HttpContext.Current.Application["Chats"] = new List<Chat>();
            }

            List<Chat> chats = (List<Chat>)HttpContext.Current.Application["Chats"];

            return chats;
        }
    }
}


