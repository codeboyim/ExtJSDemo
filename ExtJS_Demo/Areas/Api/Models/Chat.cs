using System;
using System.ComponentModel.DataAnnotations;

namespace ExtJS_Demo.Areas.Api
{
	public class Chat
	{
		public Guid Id { get; set; }

		[Required]
		public string Message { get; set; }

		[Required]
		[DataType (DataType.EmailAddress)]
		public string UserId { get; set; }
	}
}

