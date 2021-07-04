export class LeadAndCalls {
    constructor(
        public leadId?: number,
        public leadPhoneNumber?: string,
        public leadPhone2?: string,
        public leadFirstName?: string,
        public leadLastName?: string,
        public leadCity?: string,
        public leadCreationDate?: Date,
        public leadTz?: string,
        public leadAddress?: string,
        public leadMail?: string,
        public leadPlaceWorking?: string,
        public leadStatus?: number,
        public leadType?: number,
        public idCall?: number,
        public IdTelephonist_c?: number,
        public DateCall?: Date,
        public timeCall?: Date,
        public countcall?: number,
        public done?: number) { }
}

