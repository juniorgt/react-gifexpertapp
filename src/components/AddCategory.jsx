import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form
      className="mx-3 flex h-16 flex-col items-center justify-center py-1 sm:mx-32"
      onSubmit={handleSubmit}
    >
      <input
        className="block h-full w-full rounded-md border border-[#455367] bg-[#0f172a] px-3 py-2 text-lg text-white placeholder-slate-400 shadow-sm  focus:border-[#3b82f6]/50 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50"
        type="text"
        placeholder="Escriba lo que desea buscar"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
