using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;

namespace ExtJS_Demo.Areas.Api.Controllers
{
    public class ChatsController : Controller
    {
        ChatsContext _context;

        public ChatsController()
        {
            _context = new ChatsContext();
        }
        // /Api/Chats
        [HttpGet]
        public JsonResult List()
        {
            var model = _context.GetChats();
            return Json(new { success = true, data = model }, JsonRequestBehavior.AllowGet);
        }

        // POST    /Api/Chats/New { Message:"The Message"}
        [HttpPost]
        public JsonResult New(ChatDTO item)
        {
            Chat chat = new Chat();
            chat.Message = item.Message;
            chat.UserId = Convert.ToString(Session["Email"]);
            return Json(new { success = true, data = _context.Create(chat) });
        }
    }
}

