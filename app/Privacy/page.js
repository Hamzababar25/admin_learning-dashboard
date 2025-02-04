"use client";
import React from "react";

const ExchangePolicyPage = () => {
  return (
    <div className="bg-white min-h-screen  ">
      <div className="max-w-5xl mx-auto bg-white  rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-8">
          We offer a hassle-free exchange policy to ensure your shopping
          experience is enjoyable and stress-free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Exchange Process:
            </h2>
            <p className="text-gray-700 mb-4">
              For exchange, contact our customer support team via WhatsApp at{" "}
              <span className="font-medium">+92 337 2109968</span> and provide
              your order number, the item(s) you wish to exchange, and the
              reason for the exchange.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Reverse Pick-up Services (Karachi only):
            </h2>
            <p className="text-gray-700 mb-4">
              Customers in Karachi can take advantage of reverse pick-up
              services, where the company arranges for the product to be picked
              up from the customer&apos;s location.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Exchange from Other Cities:
            </h2>
            <p className="text-gray-700 mb-4">
              Customers outside Karachi need to send the shipment back via any
              courier service to the company&apos;s warehouse address for
              exchange.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Eligibility for Exchanges:
            </h2>
            <p className="text-gray-700 mb-4">
              To be eligible for an exchange, the item must be in its original
              condition, unworn, unwashed, and with all tags and labels
              attached.
              <br />
              Personalized, custom-made, and final sale items are not eligible
              for exchange, unless there is a manufacturing defect or shipping
              damage.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Exchange Period:
            </h2>
            <p className="text-gray-700 mb-4">
              Customers can easily exchange their products within 7 days from
              the day they receive their delivery.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Reverse Shipment Fee (Karachi only):
            </h2>
            <p className="text-gray-700 mb-4">
              For the convenience of reverse pick-up in Karachi, a fee of Rs 200
              will be charged at the time of delivering the exchange product.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Shipping Address for Exchanges:
            </h2>
            <p className="text-gray-700">
              Outfitbydk Warehouse
              <br />
              House no 160 Street 10 Block D Sector 11 1/2 Orangi Town, Karachi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangePolicyPage;
