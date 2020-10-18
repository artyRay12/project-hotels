import React, { useEffect } from "react";
import { useState } from "react";
import { data } from "./data";
import "./hotelsPage.scss";
import FilterPanel from "../../Components/HotelFilter/HotelsFilter";
import SizeButtons from "../../Components/SizeButtons/SizeButtons";
import Pagination from "../../Components/Pagination/Pagination";
import HotelCards from "../../Components/HotelCards/HotelCards";

const HotelsPage = () => {
    const [filter, setFilter] = useState("");
    const [state] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTableSize, setCurrentTableSize] = useState(5);

    useEffect(() => {
        setCurrentPage(1);
    }, [currentTableSize]);

    const onFilterChange = (newFilterText) => {
        setFilter(newFilterText);
    };

    const onSizeChange = (newSize) => {
        setCurrentTableSize(newSize);
    };

    const onCurrentPageChange = (newCurrentPageNumber) => {
        setCurrentPage(newCurrentPageNumber);
    };

    const filteredContacts = state.filter((contact) => {
        return contact.name.indexOf(filter) !== -1;
    });

    const calculateDataSelection = () => {
        return [
            (currentPage - 1) * currentTableSize,
            (currentPage - 1) * currentTableSize + currentTableSize,
        ];
    };

    const dataForShow = !filter ? state : filteredContacts;

    return (
        <div className="buyers-wrapper no-gutters">
            <h2 className="text-light text-center m-4">Buyers</h2>
            <div className="d-flex col p-0 justify-content-between buyers-control-panel">
                <FilterPanel onFilterChange={onFilterChange} />
                <SizeButtons onSizeChange={onSizeChange} />
            </div>
            <HotelCards 
                state={dataForShow.slice(...calculateDataSelection())}
            />
            <Pagination
                tableCurrentSize={currentTableSize}
                tableTotalSize={data.length}
                onCurrentPageChange={onCurrentPageChange}
            />
        </div>
    );
};

export default HotelsPage;
