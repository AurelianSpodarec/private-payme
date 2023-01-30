import React, { useState, useEffect } from "react";
import Input from "../Input/Input";


function SelectItem({ children, className, ...props }:any) {
    return (
    <div tabIndex={-1}  name="country" id="country" className={"text-black py-2 w-full hover:bg-[#F0F8FF] cursor-pointer px-4"} {...props} onClick={() => props.onClick(children)}>
        <div>{children}</div>
        <div className="SelectItem">
    
        </div>
    </div>
    );
};
    
function Select({ placeholder, label, data, onChange }:any) {
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event: any) => {
        setSearchValue(event.target.value);
        onChange(event)
    };
    
    const filteredData = data.filter((item: any) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    useEffect(() => {
        const handleClick = (event: any) => {
            if (!event.target.closest('.js-select')) {
                setOpen(false);
            }
        }
        
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);
    
    return (
        <div className="relative">
            <div onClick={() => setOpen(!open)}>
                <label htmlFor="email" className="block text-sm mb-1 leading-2 font-medium text-skin-primary">
                    Country
                </label>
                {placeholder && 
                    <div className="js-select rounded-[3px] border border-gray-300 px-3 py-2">
                    <div className="flex justify-between items-baseline cursor-pointer">
                        <span>{value === "" ? placeholder : value}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path d="M4.76822 5.07813C4.36843 5.55789 3.63157 5.55789 3.23178 5.07813L0.366822 1.64019C-0.175951 0.98886 0.287204 1.91977e-07 1.13504 2.66098e-07L6.86496 7.67023e-07C7.7128 8.41143e-07 8.17595 0.988859 7.63318 1.64019L4.76822 5.07813Z" fill="black"/>
                        </svg>

                    </div>
                    </div>
                }
            </div>
            {open && (
                <div className="absolute top-0 max-h-[300px] bg-white  w-full">
                <div className="relative">

                    {/* add icon */}
                    <Input className="w-full" placeholder="Type to search" value={value} onChange={(e:any) => handleSearchChange(e)}  name="country"/>
                    <div className="absolute max-h-[300px] bg-white overflow-y-auto">
                    {data && data.length > 0 && filteredData.map((item: any) => {
                        return <SelectItem key={item.code} value={item.code} tabIndex={-1} onClick={(e:any) => {setValue(item.name); setOpen(false); onChange(e)}}>{item.name}</SelectItem>
                    })}
                    </div>

                </div>
                </div>
            )}
        </div>
    );
}
export default Select;

