import UseUsers from "../../Hooks/UseUsers";
import { Table } from 'flowbite-react';
import TableRow from "../../components/TableRow/tableRow";
import useAxios from "../../Hooks/UseAxios";
import Swal from "sweetalert2";

const AllEmployee = () => {
  const { savedUsers, refetch } = UseUsers();
  const displaySavedUsers = savedUsers.filter(savedUser => savedUser.userRole !== 'admin')

  const axiosPublic = useAxios();

  const handleMakeHr = savedUser => {
    axiosPublic.patch(`/users/admin/${savedUser._id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${savedUser.displayName} is a HR Now!`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(error => console.error(error));
  }

  const handleDeleteUser = savedUser => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      console.log(result)
      if (result.isConfirmed == true) {
        axiosPublic.delete(`/users/admin/${savedUser._id}`)
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch()
              Swal.fire(
                'Deleted!',
                `${savedUser.displayName} is fired`,
                'success'
              )
            }
          })

      }
    })
  }
  return (
    <div className="py-36 overflow-x-auto">
      <h1 className="text-center font-bold text-3xl mb-10">All Employee list</h1>
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Designation</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>Fire</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            displaySavedUsers.map(savedUser =>
              <TableRow
                key={savedUser._id}
                savedUser={savedUser}
                refetch={refetch}
                handleMakeHr={handleMakeHr}
                handleDeleteUser={handleDeleteUser}
              ></TableRow>)
          }
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllEmployee;