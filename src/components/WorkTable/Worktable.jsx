import { Table,  TextInput} from 'flowbite-react';
const Worktable = ({userWorks}) => {
    console.log(userWorks)
    return (
        <div className='my-10'>
              <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Task</Table.HeadCell>
                        <Table.HeadCell>Hours</Table.HeadCell>
                        <Table.HeadCell>Date</Table.HeadCell>
                        <Table.HeadCell>email</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                       {
                        userWorks.map(userWork=> <Table.Row key={userWork._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            <div className="w-1/2">
                               {userWork.task}
                            </div>
                        </Table.Cell>
                        <Table.Cell>
                            <div className='w-1/2'>
                              {userWork.hour}
                            </div>
                        </Table.Cell>
                        <Table.Cell>
                            <div className='w-1/2'>
                                {
                                    userWork.date
                                }
                            </div>
                        </Table.Cell>
                        <Table.Cell>
                            <div className='w-1/2'>
                                {
                                    userWork.email
                                }
                            </div>
                        </Table.Cell>
                    </Table.Row> )
                       }
                    </Table.Body>
                </Table>
        </div>
    );
};

export default Worktable;