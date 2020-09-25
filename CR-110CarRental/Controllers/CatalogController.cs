using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace CarRental.Controllers
{
    public class CatalogController: Controller
    {

        private DataContext dbContext;
        public CatalogController(DataContext context)
        {  // injecting a db connection
            this.dbContext = context;

        } 
        public IActionResult Index()
        {
            return View(); // catalog page

        }

        public IActionResult Register()
        {
            return View();

        }

        public IActionResult GetCatalog()
        {
            
            
            var list = dbContext.Cars.ToList();  // read the table (lis of CAR objects)
            return Json(list);// send it back as a json list
        }



        public IActionResult GetTrucks()
        {
            var list = dbContext.Cars.Where(c => c.Category == "Truck/SUV").ToList();
            return Json(list);
        }

        public IActionResult GetSedans()
        {
            var list = dbContext.Cars.Where(c => c.Category == "Sedans").ToList();
            return Json(list);
        }


        public IActionResult GetSport()
        {
            var list = dbContext.Cars.Where(c => c.Category == "Sport").ToList();
            return Json(list);
        }


        public IActionResult GetFamily()
        {
            var list = dbContext.Cars.Where(c => c.Category == "Family").ToList();
            return Json(list);
        }

    
        [HttpPost]
        public IActionResult RegisterCar([FromBody] Car theCar)
        {
            System.Console.WriteLine("new car saved");

           // theCar.Id = 1; // Test

           dbContext.Cars.Add(theCar);
           dbContext.SaveChanges();
                
            return Json(theCar); // return JSON object
        }
    }
}