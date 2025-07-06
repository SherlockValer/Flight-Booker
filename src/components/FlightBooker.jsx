import { useState } from "react";

const FlightBooker = () => {
  const [flightType, setFlightType] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  function handleForm(e) {
    e.preventDefault();

    if (returnDate) {
      alert(
        `You have booked a ${flightType} flight from ${departureDate} to ${returnDate}.`
      );
    } else {
      alert(`You have booked a ${flightType} flight on ${departureDate}.`);
    }

    setFlightType("");
    setDepartureDate("");
    setReturnDate("");
  }

  return (
    <div>
      <form onSubmit={handleForm} className="d-flex flex-column gap-4 my-5">
        <section>
          <label htmlFor="type">Flight Type</label>
          <select
            name="type"
            id="type"
            onChange={(e) => setFlightType(e.target.value)}
            value={flightType}
            required
            className="form-select"
          >
            <option value="">Please Select a Flight Type</option>
            <option value="one-way">One-way</option>
            <option value="return">Return</option>
          </select>
        </section>

        <section>
          <label htmlFor="departure-date">Departure Date</label>
          <input
            type="date"
            name="departure-date"
            id="departure-date"
            required
            min={new Date()}
            onChange={(e) => setDepartureDate(e.target.value)}
            value={departureDate}
            className="form-control"
          />
        </section>

        <section>
          <label htmlFor="return-date">Return Date</label>
          <input
            onChange={(e) => setReturnDate(e.target.value)}
            value={returnDate}
            type="date"
            name="return-date"
            id="return-date"
            disabled={flightType !== "return"}
            min={departureDate}
            className="form-control"
          />
        </section>

        <input
          type="submit"
          value="Book Flight"
          disabled={
            flightType === "" ||
            (departureDate === "" ||
              (departureDate === "" && returnDate === ""))
          }
          className="btn btn-primary"
        />
      </form>
    </div>
  );
};
export default FlightBooker;
