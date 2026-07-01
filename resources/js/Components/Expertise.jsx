export default function Expertise() {
  const features = [
    {
      title: "Deep Local Market Insight",
      desc: "With deep community roots, our agents provide insider knowledge that empowers our clients.",
      icon: "/images/icon7.svg",
    },
    // {
    //   title: "Innovative Technology",
    //   desc: "We apply modern tools and marketing to help your property find the right buyers.",
    //   icon: "/images/icon8.svg",
    // },
    {
      title: "Built Around You",
      desc: "We put your goals first, delivering responsive support and customized solutions that match your needs.",
      icon: "/images/icon9.svg",
    },
  ];

  return (
    <section className="bg-[#f9fafb] py-16 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="w-full">
          <img
            src="/images/bg5.jpg"
            alt="Luxury Villa"
            className="rounded-2xl shadow-xl w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Tag */}
         {/* <div className="flex">
          <span className="flex items-center gap-2 bg-gray-200 text-lg px-4 py-1 rounded-full">
            <div className="w-6 h-6 flex items-center justify-center bg-orange-400 text-white rounded-full">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 0C15.522 0 20 4.47803 20 10C20 15.522 15.522 20 10 20C4.47803 20 0 15.522 0 10C0 4.47803 4.47803 0 10 0ZM14.7532 11.3298H14.7558V15.8304C14.7558 16.0074 14.6114 16.1518 14.4344 16.1518H11.5271C11.3501 16.1518 11.2057 16.0074 11.2057 15.8304V13.3833C11.2057 13.2063 11.0613 13.0619 10.8843 13.0619H9.11606C8.93906 13.0619 8.79465 13.2063 8.79465 13.3833V15.8304C8.79465 16.0074 8.65032 16.1518 8.47331 16.1518H5.56598C5.38898 16.1518 5.24457 16.0074 5.24457 15.8304V11.3298H5.24433L7.61512 8.91874L9.75677 6.74087C9.81953 6.67709 9.89654 6.64472 9.98606 6.64472C10.0754 6.64472 10.1524 6.67709 10.2152 6.74087L12.3569 8.91874L14.7532 11.3298ZM10.4598 4.04039L13.7787 7.41559L16.4806 10.1634C16.666 10.352 16.7172 10.6186 16.615 10.8626C16.5126 11.1066 16.2867 11.2569 16.022 11.2569H16.006C15.827 11.2569 15.673 11.1924 15.5476 11.0647L12.8587 8.33016L10.4392 5.86953C10.3137 5.74197 10.1598 5.67732 9.98079 5.67732C9.80181 5.67732 9.64787 5.74197 9.52236 5.86953L7.10268 8.33016C6.20654 9.24165 5.31008 10.1533 4.41394 11.0647C4.40512 11.0738 4.39638 11.0816 4.3878 11.0882C4.27591 11.1869 4.12906 11.2467 3.96819 11.2467C3.61764 11.2467 3.33323 10.9624 3.33323 10.6117C3.33323 10.418 3.42 10.2446 3.55685 10.1281L6.22402 7.41559L9.54291 4.04039C9.66843 3.91276 9.82236 3.84819 10.0014 3.84819C10.1803 3.84819 10.3343 3.91283 10.4598 4.04039Z"
                  />
                </svg>
              </div>
           Properties listing
          </span>
        </div> */}

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 leading-tight">
            Results-Driven <span className="bg-linear-to-r from-[#345578] to-[#284769] bg-clip-text text-transparent">Expertise</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed">
         Delivering smooth and successful property transactions through expert real estate knowledge and personalized service.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-10">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-5 relative">
                
                {/* ORANGE LINE */}
                <div className="absolute left-0 top-3 w-[2px] h-6 bg-[#345578] rounded"></div>

                {/* ICON */}
                <div className="ml-7 w-[50px] h-[50px] rounded-full border border-gray-100 bg-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-5 h-5 object-contain"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h4 className="text-[17px] font-semibold bg-linear-to-r from-[#345578] to-[#284769] bg-clip-text text-transparent">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}