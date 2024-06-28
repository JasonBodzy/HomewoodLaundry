import { json } from '@remix-run/node';
import { useLoaderData, useFetcher } from '@remix-run/react';
import Machine from '../../components/machine'
import Machine_Status from '../../components/status';
import Machine_Type from '../../components/type';
import Washer from '../../components/washer';
import Dryer from '../../components/dryer';
import styles from '~/styles/machineDetails.module.css'

interface LoaderData {
  machine: Machine;
}
// export const loader = async ({ machine: Machine }) => {
//   const { machineId } = params;
//   // Fetch specific machine data
//   const machine: Machine = { id: machineId, type: 'washer', status: 'available' };
//   return json<Machine>({ machine });
// };

// export const action = async ({ request, params }) => {
//   const { machineId } = params;
//   const formData = await request.formData();
//   const action = formData.get('action');

//   // Update machine status based on the action
//   // This could involve updating a database or calling an API

//   return null;
// };

interface MachineDetailProps {
  machine: Machine;
  onButtonPress: any;
}

export default function MachineDetail({machine, onButtonPress} : MachineDetailProps) {
  // const fetcher = useFetcher();
  


  return (
    <div className={styles.machineCard}>
      <h2>{machine.name}</h2>
      {machine.machine_type === Machine_Type.washer ? <Washer /> : <Dryer />}
      <p>Status: {machine.machine_status === Machine_Status.in_use ? 'In Use' : 'Available'}</p>
      {/* {machine.machine_status === Machine_Status.available ? <Timer intialTime={0} /> : null} */}
      <button onClick={onButtonPress} className={styles.machineCardButton}>{machine.machine_status === Machine_Status.available ? 'start' : 'end'}</button>
    </div>

  );
}
