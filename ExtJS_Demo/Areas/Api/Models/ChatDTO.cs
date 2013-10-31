using System;
using System.ComponentModel.DataAnnotations;

namespace ExtJS_Demo.Areas.Api
{
    /// <summary>
    /// structure used for receiving data from client preventing over-posting.
    /// </summary>
    public class ChatDTO
    {
        [Required]
        public string Message { get; set; }

        [Required]
        public string UserId { get; set; }

    }
}

