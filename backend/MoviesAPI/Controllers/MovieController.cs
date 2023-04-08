using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MoviesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp) {
            context = temp;
        }
        // GET: /<controller>/
        public IEnumerable<Movie> Get()
        {
        //this filters the data and sorts it alphabetically
            return context.Movie
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();
        }
        //public void Post(Movie m)
        //{

        //}
    }
}

