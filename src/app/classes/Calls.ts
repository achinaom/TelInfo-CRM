export class Calls {
    constructor(
        public id?: number,
        public idPhoneNumber?: number,
        public idTelephonist?: number,
        public dateCall?: Date,
        public timeCall?: Date,
        public transcriptCall?: string,
        public done?: number) { }
}
