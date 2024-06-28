import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Machine from '../components/machine'
import Machine_Type from '../components/type'
import Machine_Status from "../components/status";
import MachineDetail from './machines/$machineId';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

interface LoaderData {
  machines: Machine[];
}

// export const loader: LoaderFunction = async () => {
//   // Fetch all machines data
//   const machines: Machine[] = [
//     { id: 1, name: "Washer 1", machine_type: Machine_Type.washer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
//     { id: 2, name: "Washer 2", machine_type: Machine_Type.washer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
//     { id: 3, name: "Dryer 1", machine_type: Machine_Type.dryer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
//     { id: 4, name: "Dryer 2", machine_type: Machine_Type.dryer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
//   ];
//   return json<LoaderData>({ machines });
// };

export default function Index() {
  // const { machines } = useLoaderData<LoaderData>();
  const machines: Machine[] = [
    { id: 1, name: "Washer 1", machine_type: Machine_Type.washer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
    { id: 2, name: "Washer 2", machine_type: Machine_Type.washer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
    { id: 3, name: "Dryer 1", machine_type: Machine_Type.dryer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
    { id: 4, name: "Dryer 2", machine_type: Machine_Type.dryer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h1>Homewood Laundry Room Status</h1>
      </div>
      <div>
        {machines.map((machine) => (
            <MachineDetail machine={machine} />
        ))}
      </div>
    </div>
  );
}
