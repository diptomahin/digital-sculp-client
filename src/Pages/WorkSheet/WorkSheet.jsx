import { Table } from 'flowbite-react';
import { Button, Select, TextInput } from 'flowbite-react';
import { Datepicker } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from './../../Providers/AuthProvider';
import useAxios from '../../Hooks/UseAxios';
import Swal from 'sweetalert2';
import useWorks from '../../Hooks/useWorks';
import Worktable from '../../components/WorkTable/Worktable';

const WorkSheet = () => {
    const {user} = useContext(AuthContext);
    const {userWorks, refetch} = useWorks()
    const axiosPublic = useAxios()
    const handleTaskSubmit = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const task = form.get("task")
        const hour = form.get("hours")
        const date = form.get("date")
        const email = user.email
        const newTask={
            task ,hour, date, email
        }
        axiosPublic.post('/works', newTask)
        .then(res => {
            if (res.data.insertedId) {
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Work Added successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        console.log(newTask)
    }
    return (
        <div className="overflow-x-auto py-36">
            <div>
                <Worktable userWorks={userWorks}></Worktable>
            </div>
            <form onSubmit={handleTaskSubmit}>
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Task</Table.HeadCell>
                        <Table.HeadCell>Hours</Table.HeadCell>
                        <Table.HeadCell>Date</Table.HeadCell>
                        <Table.HeadCell>email</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Add</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                <div className="w-1/2">
                                    <Select  name='task' required>
                                        <option>sales</option>
                                        <option>support</option>
                                        <option>content</option>
                                        <option>paper work</option>
                                    </Select>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div className='w-1/2'>
                                    <TextInput name='hours' type='number'></TextInput>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div className='w-1/2'>
                                    <Datepicker name='date'></Datepicker>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <Button type='submit'>Submit</Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </form>
        </div>
    );
};

export default WorkSheet;