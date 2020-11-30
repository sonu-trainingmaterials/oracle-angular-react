export interface ICustomer{
	id:number;
	identityId:string;
	accounts:IAccount[];
	beneficiaries:IBeneficiary[];
	identity:IIdentity;
}

export interface IBeneficiary{
    
}

export interface IAccount{
	accountNo: string;
	accountType: number;
	amount: number;
	id: number;
	startDate: Date
}
export interface IIdentity{
	aadharNo: string;	
	address: string;
	city: string;
	country: string;
	email: string;
	firstName: string;
	id: string;
	lastName: string;
	panNo: string;
	phoneNumber: null
	pictureUrl: string;
	pincode: string;
	signImageUrl: string;
	state: string;
	userName: string;
}