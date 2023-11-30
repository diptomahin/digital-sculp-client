
import UseUsers from "../../Hooks/UseUsers";
import { Table } from 'flowbite-react';
import ListRow from "./ListRow";

const EmployeelList = () => {
    const { savedUsers, refetch } = UseUsers(); 
    return (
        <div className="py-36 overflow-x-auto">
        <h1 className="text-center font-bold text-3xl mb-10">All Employee list</h1>
        <Table>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Verified</Table.HeadCell>
            <Table.HeadCell>Bank Account</Table.HeadCell>
            <Table.HeadCell>salary</Table.HeadCell>
            <Table.HeadCell>Pay</Table.HeadCell>
            <Table.HeadCell>Details</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {
              savedUsers.map(savedUser =>
                <ListRow
                  key={savedUser._id}
                  savedUser={savedUser}
                  refetch={refetch}
                ></ListRow>)
            }
          </Table.Body>
        </Table>
      </div>
    );
};

export default EmployeelList;