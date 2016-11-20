export class Contact {
	constructor(
		public id: number,
		public first_name: string,
		public last_name: string,
		public phone: string,
		public email: string,
		public address: string,
		public city: string,
		public state: string,
		public zip: number
	) {}
}