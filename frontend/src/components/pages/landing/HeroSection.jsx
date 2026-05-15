const HeroSection = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-8">
        <div className="text-sm uppercase  tracking-tighter text-[#5b3df5]">
          Smart Personal Finance Platform
        </div>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900 ">
          Track Money Smarter. Save Better With AI.
        </h2>
        <p className="text-gray-600 text-lg leading-8 mb-8 max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          deserunt explicabo, ratione illo fuga neque similique. Autem labore,
          quas iste ex qui hic. Sed perspiciatis et exercitationem, odit
          repellat eligendi magni suscipit rem beatae perferendis impedit
          doloribus quasi neque accusamus maxime iusto, ex quis quibusdam?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button className="px-7 py-4 border rounded-md border-gray-600 text-sm font-medium hover:bg-gray-100 transition cursor-pointer">
            Create Free Account
          </button>
          <button className="px-7 py-4 bg-[#5b3df5] text-white rounded-lg text-sm font-medium hover:bg-gray-100 hover:text-gray-600 transition border cursor-pointer">
            Explore Features
          </button>
        </div>
        <div className="flex">
          <span>Income & Expense Tracking</span>
          <span>AI Financial Advisory</span>
          <span>Monthly Reports</span>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
