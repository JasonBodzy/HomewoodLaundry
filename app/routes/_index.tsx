import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import Modal from 'react-modal';
import Machine from '../components/machine'
import Machine_Type from '../components/type'
import Machine_Status from '../components/status';
import MachineDetail from './machines/$machineId';
import styles from '../styles/index.module.css';
import { useState } from 'react';



export const meta: MetaFunction = () => {
  return [
    { title: 'Homewood Laundry Status' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};



interface LoaderData {
  machines: Machine[];
}

// export const loader: LoaderFunction = async () => {
//   // Fetch all machines data
//   const machines: Machine[] = [
//     { id: 1, name: 'Washer 1', machine_type: Machine_Type.washer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
//     { id: 2, name: 'Washer 2', machine_type: Machine_Type.washer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
//     { id: 3, name: 'Dryer 1', machine_type: Machine_Type.dryer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
//     { id: 4, name: 'Dryer 2', machine_type: Machine_Type.dryer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
//   ];
//   return json<LoaderData>({ machines });
// };

export default function Index() {
  // const { machines } = useLoaderData<LoaderData>();
  const machines: Machine[] = [
    { key: 1, name: 'Washer 1', machine_type: Machine_Type.washer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
    { key: 2, name: 'Washer 2', machine_type: Machine_Type.washer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
    { key: 3, name: 'Dryer 1', machine_type: Machine_Type.dryer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
    { key: 4, name: 'Dryer 2', machine_type: Machine_Type.dryer, machine_status: Machine_Status.available, end_time: new Date(), phone_number: '' },
  ];

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedMachine, setSelectedMachine] = useState(0);

  const buttonPress = (machineKey: number) => {
    setModalVisible(prevState => !prevState);
    setSelectedMachine(machineKey);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Homewood Laundry Room Status 🏡</h1>
      </div>
      <div className={styles.machineGrid}>
        {machines.map((machine) => (
            <MachineDetail machine={machine} />
        ))}
      </div>
      <Modal isOpen={false}>
        <p>Enter your phone number for notifications:</p>
        <input type="text" value={"Phone Number"}>
        </input>

      </Modal>
    </div>
  );
}
