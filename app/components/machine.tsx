interface Machine {
    id: number;
    machine_type: Machine_Type;
    machine_status: Machine_Status;
    end_time: Date | null;
    phone_number: String | null;
}

export default Machine;