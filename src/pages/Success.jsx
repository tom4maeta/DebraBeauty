function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">

      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

        <h2 className="text-3xl font-bold text-green-600">
          Payment Successful 🎉
        </h2>

        <p className="mt-4 text-gray-600">
          Thank you for shopping with Debra Beauty.
        </p>

        <a
          href="/"
          className="inline-block mt-6 bg-pink-600 text-white px-6 py-3 rounded-full"
        >
          Continue Shopping
        </a>

      </div>

    </div>
  );
}

export default Success;