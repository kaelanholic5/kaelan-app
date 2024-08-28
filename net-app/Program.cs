var app = WebApplication.Create();

DnDRoutes.mapDnDRoutes(app);

Console.WriteLine("Environment Variables");
Console.WriteLine(EnvConfig.GetDatabaseString2());
Console.WriteLine(EnvConfig.GetPortString2());