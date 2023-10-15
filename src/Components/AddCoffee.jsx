import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)


        // send data to sever side
        fetch('https://coffee-store-server-e1rj7c2nv-sadiaafrin67.vercel.app//coffee', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newCoffee)
        })

        .then(res => res.json())
        .then(data => {
          console.log(data)

          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Coffee added successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }

        })


    }

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>

        {/* form name and quantity row */}
        <div className="md:flex gap-4 mb-8">

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                placeholder="Coffee Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
             
              <input
                type="number"
                placeholder="Available Quantity"
                name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>

        {/* from supplier and taste row */}
        <div className="md:flex gap-4 mb-8">

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                placeholder="Supplier Name"
                name="supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>

        {/* from category and details row */}
        <div className="md:flex gap-4 mb-8">

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                placeholder="Details"
                name="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>

        {/* from photo URL row */}
        <div className="mb-8">

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>

         

        </div>

        
        <input type="submit" value="Add Coffee"  className="btn btn-block bg-[#D2B48C]" />

      </form>
    </div>
  );
};

export default AddCoffee;
