import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    fetch(`https://coffee-store-server-e1rj7c2nv-sadiaafrin67.vercel.app/coffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");

              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== _id
              )
              setCoffees(remainingCoffees);
            }
          });
        }
      });
  };

  return (
    <div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={photo} alt="Movie" />
          </figure>
          <div className=" flex justify-between w-full p-6">
            <div>
              <h2 className="card-title">Name: {name}</h2>
              <p>Quantity: {quantity}</p>
              <p>Supplier: {supplier}</p>
              <p>Taste: {taste}</p>
            </div>

            <div className="card-actions justify-end">
              <div className="btn-group btn-group-vertical space-y-4">
                <button className="btn bg-black text-white">View</button>

                <Link to={`/updateCoffee/${_id}`}>
                  <button className="btn bg-black text-white">Edit</button>
                </Link>

                <button
                  onClick={() => handleDelete(_id)}
                  className="btn bg-orange-500 text-white"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
}

export default CoffeeCard;
