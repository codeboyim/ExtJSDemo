using System.Web.Mvc;

namespace ExtJS_Demo.Areas.Api
{
	public class ApiAreaRegistration : AreaRegistration
	{
		public override string AreaName { get { return "Api"; } }

		public override void RegisterArea (AreaRegistrationContext context)
		{
			context.MapRoute (
				"SingleChat",
				"Api/Chats/Chat/{id}",
				new { controller = "Chats", action = "Chat", 
				id = UrlParameter.Optional }
			);
			context.MapRoute (
				"ListChats",
				"Api/Chats",
				new { controller = "Chats", action = "List" }
			);

			context.MapRoute (
				"Api_default",
				"Api/{controller}/{action}/{id}",
				new { action = "Index", id = UrlParameter.Optional }
			);
		}
	}
}