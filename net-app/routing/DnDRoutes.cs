public class DnDRoutes {
    public static void mapDnDRoutes(WebApplication app) {
        var dndGroup = app.MapGroup("/dnd");

        dndGroup.MapPost("/rollDice" , async () => {
            
        });

        dndGroup.MapPost("/rollStats", async () => {

        });

        dndGroup.MapGet("/getDiceRolls", () => {

        });

        dndGroup.MapGet("/getStatsRolls", () => {

        });
    }
}
