import React from "react";
import men from "../assets/men.png";
import first from "../assets/1st.png";

const FeatureSection = ({ heading, text, image, reverse }) => {
  return (
    <div
      className={`flex items-center space-x-6 p-6 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-1/2">
        <h2 className="text-2xl font-bold text-gray-800">{heading}</h2>
        <p className="text-gray-600 mt-2">{text}</p>
      </div>
      <div>
        <img src={image} alt="Display" className="w-100" />
      </div>
    </div>
  );
};
const Cards = ({ heading, text, paragraph }) => {
  return (
    <>
      <h1>{heading}</h1>
      <p>{text}</p>
      <p>{paragraph}</p>
    </>
  );
};

const Feature = () => {
  return (
    <div className="mx-auto container">
      <div className="text-center container mx-auto px-6">
        <h1 className="my-7 text-2xl font-semibold border-b-2 border-gray-300 inline-block pb-2">
          Feature
        </h1>
        <p className="leading-relaxed mb-6">
          Discover the best features designed to enhance your experience. From
          intuitive interfaces to seamless functionality, our platform ensures
          top-tier performance, reliability, and ease of use. Explore how these
          features can improve your workflow and productivity.
        </p>
      </div>
      <div className="space-y-10">
        <FeatureSection
          heading="Effortless Navigation"
          text="Experience a user-friendly design that simplifies navigation. Our platform is built with a clear and organized layout, ensuring that users can find exactly what they need without any hassle. The intuitive design minimizes the learning curve, making it accessible to users of all levels. Whether you're a beginner or an experienced user, you’ll appreciate the seamless transitions, easy-to-find controls, and structured content placement."
          image={men}
        />
        <FeatureSection
          heading="Enhanced Performance"
          text="Our system is optimized for speed and efficiency, reducing load times and improving responsiveness. Built with the latest technologies, our platform ensures smooth operation, even with heavy workloads. No more frustrating delays or interruptions—just seamless performance that lets you focus on what matters most. Whether you're managing data, browsing content, or multitasking, our enhanced performance guarantees a fluid experience."
          image={men}
          reverse
        />
        <FeatureSection
          heading="Advanced Security"
          text="Your data is safe with us. We use advanced security protocols to protect sensitive information and maintain privacy. With end-to-end encryption, secure authentication, and continuous monitoring, you can be assured of a safe and protected experience. Our system is designed to detect and prevent potential threats, giving you peace of mind while you work, shop, or interact on our platform."
          image={men}
        />
        <FeatureSection
          heading="Seamless Integration"
          text="Our platform supports seamless integration with a variety of third-party services and tools, allowing you to streamline your workflow. Whether you need to connect with existing applications, synchronize data, or automate processes, our integration capabilities make it easy. Experience effortless connectivity across multiple platforms, ensuring that your data remains consistent and easily accessible at all times."
          image={first}
          reverse
        />
      </div>
      <Cards
        heading="Reliable Support"
        text="A dedicated support team available whenever you need."
        paragraph="We provide round-the-clock assistance to ensure you have a smooth experience, solving issues instantly."
      />
    </div>
  );
};

export default Feature;
