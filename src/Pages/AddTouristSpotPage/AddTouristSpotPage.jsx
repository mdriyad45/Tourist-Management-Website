import { Textarea } from "@nextui-org/react";
import React from "react";

const AddTouristSpotPage = () => {


    const handleAddTourForm = (e) =>{
        e.preventDefault();

        const form = e.target;
        console.log(form.price.value)
        const country = form.country.value;
        const region = form.region.value;
        const touristSpotName = form.touristSpotName.value;
        const location = form.location.value;
        const price = form.price.value;
        const seasonality = form.seasonality.value;
        const departure = form.departure.value;
        const departureTime = form.departureTime.value;
        const dressCode = form.dressCode.value;
        const duration = form.duration.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const photo1 = form.photo1.value;
        const photo2 = form.photo2.value;
        const photo3 = form.photo3.value;

        const touristSpotData = {country,region,touristSpotName,location,price,seasonality,departure,departureTime,dressCode,duration,rating,description,photo1,photo2,photo3};
        

    }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w- bg-slate-500 shrink-0 shadow-2xl">
          <form onSubmit={handleAddTourForm} className="card-body">
            <div className="grid md:grid-cols-3 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country Name</span>
                </label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Region</span>
                </label>
                <input
                  type="text"
                  name="region"
                  placeholder="Region"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tourist Spot Name</span>
                </label>
                <input
                  type="text"
                  name="touristSpotName"
                  placeholder="Tourist Spot Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="$ Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">seasonality</span>
                </label>
                <input
                  type="text"
                  name="seasonality"
                  placeholder="Seasonality"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Departure</span>
                </label>
                <input
                  type="text"
                  name="departure"
                  placeholder="Departure"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Departure Time</span>
                </label>
                <input
                  type="text"
                  name="departureTime"
                  placeholder="Departure Time"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Return Time</span>
                </label>
                <input
                  type="text"
                  name="returnTime"
                  placeholder="Return Time"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Dress Code</span>
                </label>
                <input
                  type="text"
                  name="dressCode"
                  placeholder="Dress Code"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Duration</span>
                </label>
                <input
                  type="text"
                  name="duration"
                  placeholder="example: 5 Days 4 Nights"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Short description"
                  className="input input-bordered h-20 py-2"
                  required
                />
              </div>       
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="url"
                name="photo1"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="url"
                name="photo2"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="url"
                name="photo3"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristSpotPage;
