public class EnvConfig {
    public static string GetDatabaseString(IConfiguration configuration)
    {
        return configuration.GetValue<string>("MONGO_DB_URL");
    }

    public static int GetPortString(IConfiguration configuration)
    {
        return configuration.GetValue<int>("PORT");
    }

    public static string GetDatabaseString2() {
        return Environment.GetEnvironmentVariable("MONGO_DB_URL");
    }

    public static int GetPortString2() {
        return Int32.Parse(Environment.GetEnvironmentVariable("PORT"));
    }
}
