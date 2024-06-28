import Machine_Type from './type'
import Machine_Status from './status';

export default interface Machine {
    id: number;
    name: String;
    machine_type: Machine_Type;
    machine_status: Machine_Status;
    end_time: Date | null;
    phone_number: String | null;
}