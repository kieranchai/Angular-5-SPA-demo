export class StallDishes {
    constructor (
        public fc_id: number,
        public stall_id: number,
        public dish_id: number,
        public dish_name: string,
        public stall_img01 : string,
        public availability : string,
        public price : string,
    ) { }
}