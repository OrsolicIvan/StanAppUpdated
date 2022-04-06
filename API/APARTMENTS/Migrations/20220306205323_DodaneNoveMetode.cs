using Microsoft.EntityFrameworkCore.Migrations;

namespace APARTMENTS.Migrations
{
    public partial class DodaneNoveMetode : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Apartments_AspNetUsers_UserId",
                table: "Apartments");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Apartments",
                newName: "OwnerId");

            migrationBuilder.RenameIndex(
                name: "IX_Apartments_UserId",
                table: "Apartments",
                newName: "IX_Apartments_OwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Apartments_AspNetUsers_OwnerId",
                table: "Apartments",
                column: "OwnerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Apartments_AspNetUsers_OwnerId",
                table: "Apartments");

            migrationBuilder.RenameColumn(
                name: "OwnerId",
                table: "Apartments",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Apartments_OwnerId",
                table: "Apartments",
                newName: "IX_Apartments_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Apartments_AspNetUsers_UserId",
                table: "Apartments",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
