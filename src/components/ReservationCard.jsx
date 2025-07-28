import React from "react";

// 🔸 Static Data (Embedded JSON)
const reservations = [
  {
    id: 1,
    venueName: "The Grand Cafe",
    date: "2024-08-15",
    time: "19:00",
    partySize: 2,
    location: "Downtown",
    rating: 4.8,
    cuisine: "French",
    status: "Confirmed",
    reservationId: "GC-2024-001",
  },
  {
    id: 2,
    venueName: "Ocean's Breeze",
    date: "2024-08-22",
    time: "20:30",
    partySize: 4,
    location: "Beachside",
    rating: 4.5,
    cuisine: "Seafood",
    status: "Confirmed",
    reservationId: "OB-2024-002",
  },
  {
    id: 3,
    venueName: "The Rooftop Grill",
    date: "2024-09-01",
    time: "18:00",
    partySize: 5,
    location: "Uptown",
    rating: 4.2,
    cuisine: "BBQ",
    status: "Pending",
    reservationId: "RG-2024-003",
  },
];

// 🔹 Reservation Card Component
const ReservationCard = ({ reservation, onCancel }) => {
  return (
    <div className="p-0 w-full max-w-md mx-auto sm:mx-0">
      <div className="bg-slate-400 rounded-xl p-4 flex flex-col justify-between h-full hover:shadow-lg transition-shadow  border border-black-bold cursor-pointer hover:bg-slate-300">
        {/* 🔸 Header with Background Image */}
        <div
          className="rounded-xl p-4 bg-cover bg-center relative min-h-[180px] sm:min-h-[220px]"
          style={{ backgroundImage: "url('/restaurant-header.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl" />
          <div className="relative z-10 text-white space-y-2">
            <div className="flex justify-between items-center">
              <div className="text-xl">🍴</div>
              <div className="text-xs bg-amber-200 text-gray-800 rounded px-2 py-0.5">
                {reservation.cuisine}
              </div>
            </div>
            <h3 className="text-lg sm:text-2xl font-semibold">{reservation.venueName}</h3>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                  reservation.status === "Confirmed"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {reservation.status}
              </span>
              <span className="text-yellow-300 text-sm font-semibold">
                ⭐ {reservation.rating}
              </span>
            </div>
            <p className="text-sm">
              Reservation ID:{" "}
              <span className="font-semibold">{reservation.reservationId}</span>
            </p>
          </div>
        </div>

        {/* 🔸 Body */}
        <div className="space-y-4 pt-6">
          {/* Date */}
          <div className="flex items-center bg-blue-50 rounded-lg px-3 py-2">
            <span className="text-blue-600 mr-3 text-xl">📅</span>
            <div>
              <p className="text-gray-900 font-medium text-sm sm:text-base">
                {new Date(reservation.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-500 text-xs">Reservation Date</p>
            </div>
          </div>

          {/* Time and Guests */}
          <div className="flex flex-col sm:flex-row gap-2">
            {/* Time */}
            <div className="flex-1 flex items-center bg-purple-50 rounded-lg px-3 py-2">
              <img
                src="/icons/wired-lineal-45-clock-time-hover-pinch.svg"
                alt="Clock"
                className="w-5 h-5 sm:w-6 sm:h-6 mr-3"
              />
              <div>
                <p className="text-gray-900 font-medium text-sm sm:text-base">
                  {new Date(`1970-01-01T${reservation.time}`).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="text-gray-500 text-xs">Time</p>
              </div>
            </div>

            {/* Guests */}
            <div className="flex-1 flex items-center bg-indigo-50 rounded-lg px-3 py-2">
              <span className="text-indigo-600 mr-3 text-xl">👥</span>
              <div>
                <p className="text-gray-900 font-medium text-sm sm:text-base">
                  {reservation.partySize}
                </p>
                <p className="text-gray-500 text-xs">Guests</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center bg-green-50 rounded-lg px-3 py-2">
            <span className="text-green-600 mr-3 text-xl">📍</span>
            <div>
              <p className="text-gray-900 font-medium text-sm sm:text-base">
                {reservation.location}
              </p>
              <p className="text-gray-500 text-xs">Location</p>
            </div>
          </div>

          {/* Cancel Button */}
          <button
            onClick={() => onCancel(reservation.id)}
            className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
          >
            Cancel Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

// 🔹 Main Wrapper Component
const AllReservations = () => {
  const handleCancel = (id) => {
    console.log("Cancel reservation:", id);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reservations.map((res) => (
          <ReservationCard key={res.id} reservation={res} onCancel={handleCancel} />
        ))}
      </div>
    </div>
  );
};

export default AllReservations;
