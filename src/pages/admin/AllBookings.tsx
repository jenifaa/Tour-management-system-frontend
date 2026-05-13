import { useGetAllBookingsQuery } from "@/redux/features/booking/booking.api";

export default function AllBookings() {
  const { data, isLoading } = useGetAllBookingsQuery(undefined);
  console.log(data);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <div>AllBookings</div>;
}
