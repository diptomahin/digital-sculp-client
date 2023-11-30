import { Table, Button } from 'flowbite-react';
import { FaRegCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
const ListRow = ({ savedUser }) => {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap uppercase font-medium text-gray-900 dark:text-white">
                {savedUser.displayName}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap uppercase font-medium text-gray-900 dark:text-white">
                {savedUser.email}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap uppercase font-medium text-gray-900 dark:text-white">
            {
             savedUser.isVerified? <button className=''> <FaRegCheckCircle className='text-2xl' /> </button>: <MdCancel class/>
            }
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap uppercase font-medium text-gray-900 dark:text-white">
                {savedUser.bankAccount}
            </Table.Cell>
            <Table.Cell className='uppercase'>{
                savedUser.salary}
            </Table.Cell>
            <Table.Cell>
                <Button color="info">Pay</Button>
            </Table.Cell>
            <Table.Cell>
                {
                    savedUser.userRole
                }
            </Table.Cell>
        </Table.Row>
    );
};

export default ListRow;