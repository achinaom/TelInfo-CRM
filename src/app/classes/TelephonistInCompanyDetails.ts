export class TelephonistInCompanyDetails {
    constructor(
        public name?: string,
        public telephone?: string,
        public tz?: string,
        public mail?: string,
        public dateBirth?: Date,
        public familyStatus?: number,
        public idTelephonistInCompany?: number,
        public idTelephonist?: number,
        public password?: string,
        public idCompany?: number) { }
}
