using System.Web.Mvc;

namespace HireSpace.DevDashboard.Controllers
{
    using System.Net;

    using PusherServer;

    public class StatsController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}