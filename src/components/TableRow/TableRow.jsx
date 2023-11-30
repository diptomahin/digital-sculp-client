import { Table, Button } from 'flowbite-react';
import { TiUserDelete } from "react-icons/ti";

const TableRow = ({ savedUser, handleDeleteUser, handleMakeHr }) => {

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap uppercase font-medium text-gray-900 dark:text-white">
        {savedUser.displayName}
      </Table.Cell>
      <Table.Cell className='uppercase'>{savedUser.userRole}</Table.Cell>
      <Table.Cell> <Button onClick={() => handleMakeHr(savedUser)} color="info">Make HR</Button></Table.Cell>
      <Table.Cell><Button onClick={()=>handleDeleteUser(savedUser)}><TiUserDelete></TiUserDelete></Button></Table.Cell>
    </Table.Row>
  );
};

export default TableRow;