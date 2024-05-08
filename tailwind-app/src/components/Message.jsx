import React, { useState } from "react";
import f2 from "../assets/f2.jpeg";

export const Message = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [addressFocused, setAddressFocused] = useState(false);

  const handleInputFocus = (id) => {
    switch (id) {
      case "name":
        setNameFocused(true);
        break;
      case "lastName":
        setLastNameFocused(true);
        break;
      case "email":
        setEmailFocused(true);
        break;
      case "phone":
        setPhoneFocused(true);
        break;
      case "address":
        setAddressFocused(true);
        break;
      default:
        break;
    }
  };

  const handleInputBlur = (id) => {
    const value =
      id === "name"
        ? name
        : id === "lastName"
        ? lastName
        : id === "email"
        ? email
        : id === "phone"
        ? phone
        : id === "address"
        ? address
        : "";

    if (!value) {
      switch (id) {
        case "name":
          setNameFocused(false);
          break;
        case "lastName":
          setLastNameFocused(false);
          break;
        case "email":
          setEmailFocused(false);
          break;
        case "phone":
          setPhoneFocused(false);
          break;
        case "address":
          setAddressFocused(false);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div id="contact" className="max-w-[1140px] m-auto mt-[5svh]">
      <h2 className="text-center text-gray-700 p-4 font-bold md:text-4xl text-3xl">
        Send us a message
      </h2>
      <p className="text-center text-gray-700 md:text-2xl text-xl">
        Can't wait to hear your thoughts!
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-16">
        <img
          src={f2}
          alt="/"
          className="md:h-full w-[400px] h-[400px] mx-auto p-2 max-h-[500px] hover:scale-110 transition-all delay-75"
        />
        <form>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="relative col-span-1">
              <input
                className="border w-full m-2 p-2 rounded outline-none focus:border-babyblue3 transition duration-200"
                type="text"
                onFocus={() => handleInputFocus("name")}
                onBlur={() => handleInputBlur("name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span
                className={`absolute left-5 top-4 text-gray-400 transition duration-200 ${
                  nameFocused
                    ? "text-sky-700 bg-white transform -translate-y-5 scale-90"
                    : ""
                }`}
              >
                Name
              </span>
            </div>
            <div className="relative col-span-1">
              <input
                className="border w-full m-2 p-2 rounded outline-none focus:border-babyblue3 transition duration-200"
                type="text"
                onFocus={() => handleInputFocus("lastName")}
                onBlur={() => handleInputBlur("lastName")}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <span
                className={`absolute left-5 top-4 text-gray-400 transition duration-200 ${
                  lastNameFocused
                    ? "bg-white text-sky-700 transform -translate-y-5 scale-90"
                    : ""
                }`}
              >
                Last Name
              </span>
            </div>
            <div className="relative col-span-1">
              <input
                className="border w-full m-2 p-2 rounded outline-none focus:border-babyblue3 transition duration-200"
                type="email"
                onFocus={() => handleInputFocus("email")}
                onBlur={() => handleInputBlur("email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span
                className={`absolute left-5 top-4 text-gray-400 transition duration-200 ${
                  emailFocused
                    ? "text-sky-700 bg-white transform -translate-y-5 scale-90"
                    : ""
                }`}
              >
                Email
              </span>
            </div>
            <div className="relative col-span-1">
              <input
                className="border w-full m-2 p-2 rounded outline-none focus:border-babyblue3 transition duration-200"
                type="tel"
                onFocus={() => handleInputFocus("phone")}
                onBlur={() => handleInputBlur("phone")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span
                className={`absolute left-5 top-4 text-gray-400 transition duration-200 ${
                  phoneFocused
                    ? "text-sky-700 bg-white transform -translate-y-5 scale-90"
                    : ""
                }`}
              >
                Phone
              </span>
            </div>
            <div className="relative col-span-2">
              <input
                className="border w-full p-2 m-2 rounded outline-none focus:border-babyblue3 transition duration-200"
                type="text"
                onFocus={() => handleInputFocus("address")}
                onBlur={() => handleInputBlur("address")}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <span
                className={`absolute left-5 top-4 text-gray-400 transition duration-200 ${
                  addressFocused
                    ? "text-sky-700 bg-white transform -translate-y-5 scale-90"
                    : ""
                }`}
              >
                Address
              </span>
            </div>
            <div className="col-span-2">
              <textarea
                className="border w-full m-2 p-2 rounded outline-none focus:border-babyblue3"
                cols="30"
                rows="10"
              ></textarea>
              <button className="m-2 p-2 w-full rounded text-white bg-hero2 hover:bg-hero transition duration-3000 ease-out delay-100">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
