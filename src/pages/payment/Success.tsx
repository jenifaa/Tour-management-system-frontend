export default function Success() {
  const params = new URLSearchParams(window.location.search);

  const transactionId = params.get("transactionId") || "N/A";
  const amount = params.get("amount") || "0";
  const status = params.get("status") || "Success";
  const customerName = params.get("name") || "Guest";
  const email = params.get("email") || "Not Provided";
  const phone = params.get("phone") || "Not Provided";
  const tourName = params.get("tour") || "Tour Package";
  const date = params.get("date") || new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-cyan-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100">
        <div className="bg-linear-to-r from-emerald-500 to-teal-500 p-8 text-white text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold mb-2">Payment Successful</h1>
          <p className="text-emerald-100 text-lg">
            Your booking has been confirmed successfully.
          </p>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-6">
          <div className="space-y-5">
            <div>
              <p className="text-sm text-gray-500 mb-1">Customer Name</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {customerName}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Email Address</p>
              <h3 className="text-lg font-semibold text-gray-800">{email}</h3>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Phone Number</p>
              <h3 className="text-lg font-semibold text-gray-800">{phone}</h3>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Tour Package</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {tourName}
              </h3>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Transaction ID</span>
              <span className="font-semibold text-gray-800 break-all text-right">
                {transactionId}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">Payment Status</span>
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                {status}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">Payment Date</span>
              <span className="font-semibold text-gray-800">{date}</span>
            </div>

            <div className="border-t pt-5 flex items-center justify-between">
              <span className="text-lg text-gray-600 font-medium">
                Total Paid
              </span>
              <span className="text-3xl font-bold text-emerald-600">
                ৳ {amount}
              </span>
            </div>
          </div>
        </div>

        <div className="px-8 pb-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => window.print()}
            className="flex-1 py-3 rounded-xl border border-emerald-500 text-emerald-600 font-semibold hover:bg-emerald-50 transition-all"
          >
            Download Receipt
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="flex-1 py-3 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
}
