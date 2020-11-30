using Microsoft.EntityFrameworkCore.Migrations;

namespace BSTBankService.Migrations
{
    public partial class BeneficiaryUpdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Beneficiaries_Customers_CustomerId",
                table: "Beneficiaries");

            migrationBuilder.AlterColumn<int>(
                name: "CustomerId",
                table: "Beneficiaries",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IdentityId",
                table: "Beneficiaries",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_Beneficiaries_Customers_CustomerId",
                table: "Beneficiaries",
                column: "CustomerId",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Beneficiaries_Customers_CustomerId",
                table: "Beneficiaries");

            migrationBuilder.DropColumn(
                name: "IdentityId",
                table: "Beneficiaries");

            migrationBuilder.AlterColumn<int>(
                name: "CustomerId",
                table: "Beneficiaries",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Beneficiaries_Customers_CustomerId",
                table: "Beneficiaries",
                column: "CustomerId",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
