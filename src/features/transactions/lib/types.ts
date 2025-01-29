import { Item } from "@/features/items/lib/types";

export interface Transaction {
    id: number;
    is_convoy: number;
    notes: string;
    code: string;
    status: string;
    date: string;
    transaction_type: string;
    transcation_mode_type: string;
    waybill_num: number;
    waybill_img: string;
    qr_code: string;
    source: Source;
    destinations: Source[];
    details: Item[]
}

export interface Source{
    type: string;
    id:number;
    name: string;
}