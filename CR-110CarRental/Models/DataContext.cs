using Microsoft.EntityFrameworkCore;

/*

    This class will handle the connection to DB 
    help to create/register/update/delete/CRUD entries
    for the models that your specify

    If something changes on your models, run migration to sync models <--> DB
    - dotnet ef migration add <somename>
    - dotnet ef database update
*/

public class DataContext: DbContext
{
    // class constructor, receives connection info (where the server is, user, pass)
    // and pass it to the parent

    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }

    // specify which of your models will represent a table in the DB

    public DbSet<Car> Cars {get; set;}
}