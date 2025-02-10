const ContactMe = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-xl font-medium uppercase">Contact Me</p>
        <h3 className="text-5xl font-medium text-[#9024B6]">
          Let&apos;s Make Something Together
        </h3>
        <p>
          Connect with us effortlessly! Click the &quot;Contact Me&quot; button
          to reach out and <br /> let&apos;s discuss how we can transform your
          digital experiences into unforgettable journeys.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-8">
        {/* Personal Details */}
        <div className="md:w-1/2 space-y-4 text-center flex flex-col justify-between">
          <h2 className="text-3xl font-semibold text-[#AC5BC8]">
            Personal Details
          </h2>
          <p className="text-base/8">
            <span className="font-semibold ">Phone:</span> <br />
            +92 302 786004 <br />
            +92 302 780007
          </p>
          <p className="text-base/8">
            <span className="font-semibold">Email:</span> <br />
            hammadmasood038@gmail.com
          </p>
          <p className="text-base/8">
            <span className="font-semibold">Address:</span> <br />
            House 188, Street No 1, New Satellite Town, <br />
            Sargodha
          </p>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name here"
            className="bg-[#F5F5F5] rounded-2xl h-[60px] px-4 text-black "
          />
          <input
            type="email"
            placeholder="Enter your Email here"
            className="bg-[#F5F5F5] rounded-2xl h-[60px] px-4 text-black"
          />
          <textarea
            placeholder="Write Something...."
            className="bg-[#F5F5F5] rounded-2xl h-[120px] px-4 py-2 resize-none text-black"
          ></textarea>
          <button className="bg-[#9024B6] text-white font-medium py-3 rounded-2xl">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
