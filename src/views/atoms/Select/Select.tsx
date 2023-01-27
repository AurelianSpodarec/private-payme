
import React, { useRef, useState } from 'react';
import * as RadixSelect from '@radix-ui/react-select';


const SelectItem = React.forwardRef(({ children, className, ...props }:any, forwardedRef) => {
    return (
    <RadixSelect.Item tabIndex={-1} className={"text-black py-2 w-full hover:bg-[#F0F8FF] cursor-pointer px-4"} {...props} ref={forwardedRef}>
        <RadixSelect.ItemText className="cursor-default">{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className="SelectItemIndicator">
        {/* <CheckIcon /> */}
        </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
    );
});

SelectItem.displayName = 'SelectItem'


function Select({ placeholder, label, data, onValueChange }:any) {
    const [value, setValue] = React.useState();

    const [searchValue, setSearchValue] = React.useState("");
    const handleSearchChange = (event: any) => {
        setSearchValue(event.target.value);
    };

    const filteredData = data.filter((item: any) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <RadixSelect.Root 
            value={value} 
            onValueChange={(newValue:any) => {
                setValue(newValue)
                onValueChange(newValue)
            }
        }>

            <div className="relative">
            <RadixSelect.Trigger className="text-black text-sm border-2 border-gray-800 rounded-lg justify-content
                block w-full placeholder:text-[#D4D4D4] appearance-none rounded-[3px] border border-gray-300 px-3 py-2 placeholder-gray-800 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
                " aria-label={placeholder}>
                <div className="flex justify-between items-center">
                <RadixSelect.Value placeholder={placeholder === "" || placeholder === undefined ? "None" : placeholder}/>
                <RadixSelect.Icon className="SelectIcon" />
                </div>
            </RadixSelect.Trigger>


            <RadixSelect.Portal>
           <RadixSelect.Content className="relative z-50 select-none bg-white border border-color-[#0066FF] text-black py-3 rounded-lg" style={{position: 'absolute', top: '40px'}}>
           <div>
                <input placeholder="Search" onChange={handleSearchChange} />
                </div>

                <RadixSelect.Viewport className="text-xs z-10 relative">
                    <RadixSelect.Group>
                        {data && data.length > 0 && filteredData.map((item: any) => {
                            return <SelectItem key={item.name} value={item.name} tabIndex={-1}>{item.name}</SelectItem>
                        })}
                    </RadixSelect.Group>
                </RadixSelect.Viewport>
                </RadixSelect.Content>
            </RadixSelect.Portal>
            </div>
        </RadixSelect.Root>
    );
}
export default Select;