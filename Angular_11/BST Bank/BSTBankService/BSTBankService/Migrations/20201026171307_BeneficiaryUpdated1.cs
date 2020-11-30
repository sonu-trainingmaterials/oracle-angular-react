using Microsoft.EntityFrameworkCore.Migrations;

namespace BSTBankService.Migrations
{
    public partial class BeneficiaryUpdated1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RelationToNominee",
                table: "Account");

            migrationBuilder.AddColumn<string>(
                name: "NomineeRelation",
                table: "Account",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NomineeRelation",
                table: "Account");

            migrationBuilder.AddColumn<string>(
                name: "RelationToNominee",
                table: "Account",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
