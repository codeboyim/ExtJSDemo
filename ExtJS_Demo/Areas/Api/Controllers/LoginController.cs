using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;

namespace ExtJS_Demo.Areas.Api.Controllers
{
    public class LoginController : Controller
    {
        [HttpGet]
        public JsonResult IsAuthenticated(string email)
        {
            bool authenticated = Session["Email"] != null;

            return Json(new { result = authenticated ? "ok" : "" }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Login(string email)
        {
            List<string> users = new List<string>();
            if (HttpContext.Application["Users"] == null)
            {
                HttpContext.Application["Users"] = users;
            }
            else
            {
                users = (List<string>)HttpContext.Application["Users"];
            }

            if (users.Contains(email.ToLower()))
            {
                return Json(new { success = false, msg = "User has logged in" });
            }
            else
            {
                users.Add(email.ToLower());
                Session["Email"] = email;
                return Json(new { success = true });
            }
        }
    }
}

