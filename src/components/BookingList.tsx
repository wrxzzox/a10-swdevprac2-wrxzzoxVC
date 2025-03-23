'use client'
import { AppDispatch, useAppSelector } from "@/redux/store"
import { BookingItem } from "../../interfaces";
import { removeBooking } from "@/redux/features/bookSlice";
import { useDispatch, UseDispatch } from "react-redux";

export default function BookingList() {
    const venueItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
            {
                venueItems.length == 0 ? "No Venue Booking"
                : venueItems.map((bookingItem: BookingItem) => (
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem.venue}>
                        <div className="text-xl">
                            {bookingItem.nameLastname}
                        </div>
                        <div className="text-xl">
                            {bookingItem.tel}
                        </div>
                        <div className="text-xl">
                            {bookingItem.venue}
                        </div>
                        <div className="text-xl">
                            {bookingItem.bookDate}
                        </div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm" 
                        onClick={() => dispatch(removeBooking(bookingItem))}>
                            Remove Booking
                        </button>
                    </div>
                ))
            }
        </div>
    )
}