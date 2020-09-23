export interface IVenue{
    id?:string
    name: string
    description: string
    manager_name: string
    contact_number?: string
    contact_number1?: string
    email: string
    website?: string
    adress_line_1:string
    adress_line_2?:string
    floor_number?:string
    room_number?:string
    pin_code?:string
    city:string
    state:string
    country:string
}