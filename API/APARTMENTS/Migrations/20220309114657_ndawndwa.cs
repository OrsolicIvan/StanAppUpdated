using Microsoft.EntityFrameworkCore.Migrations;

namespace APARTMENTS.Migrations
{
    public partial class ndawndwa : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Adresses_ApartmentId",
                table: "Adresses");

            migrationBuilder.AlterColumn<string>(
                name: "City",
                table: "Adresses",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_Adresses_ApartmentId",
                table: "Adresses",
                column: "ApartmentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Adresses_ApartmentId",
                table: "Adresses");

            migrationBuilder.AlterColumn<int>(
                name: "City",
                table: "Adresses",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Adresses_ApartmentId",
                table: "Adresses",
                column: "ApartmentId",
                unique: true);
        }
    }
}
