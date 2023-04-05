using Microsoft.AspNetCore.Mvc;
using mission13_giuliani.Data;

namespace mission13_giuliani.Controllers;

[ApiController]
[Route("[controller]")]
public class MovieDataController : ControllerBase
{
    private JoelHiltonMovieCollectionContext context;

    public MovieDataController(JoelHiltonMovieCollectionContext val) 
    {
        context = val;
    }

    [HttpGet]
    public IEnumerable<Movie> MovieData()
    {   
        var movies = context.Movies.Where(x => x.Edited == "Yes").OrderBy(x => x.Title).ToArray();
        return movies;
    }
}

