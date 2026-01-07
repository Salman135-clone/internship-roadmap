import React, { useState } from "react";

const ItemFilter = ({ filter }) => {
  const [filterValue, setFilterValue] = useState("all");

  const filterOption = [
    { name: "ALL", type: "all" },
    { name: "Incomplete", type: "incomplete" },
    { name: "Complete", type: "complete" },
  ];

  const filterHandler = (val) => {
    setFilterValue(val);
    filter(val);
  };
  return (
    <>
      <section className="mb-4">
        <div className="flex flex-row gap-3 items-center">
          <p className="text-lg font-bold">Filter:</p>
          <div className="flex flex-row gap-4">
            {filterOption?.map((filter) => (
              <button
                key={filter.type}
                onClick={() => filterHandler(filter.type)}
                className={`px-2 font-medium rounded-md cursor-pointer ${
                  filterValue === filter.type ? "bg-green-600" : ""
                }`}
              >
                {filter?.name}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemFilter;
