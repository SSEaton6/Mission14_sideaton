﻿using System;
using System.ComponentModel.DataAnnotations;
namespace MoviesAPI.Data
{
	public class Movie
	{
			[Key]
			public int MovieID { get; set; }
			public string Title { get; set; }
			public string Category { get; set; }
			public int Year { get; set; }
			public string Director { get; set; }
			public string Rating { get; set; }
			public bool Edited { get; set; }
	}
}

