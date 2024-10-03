"use client"
import React, { useState } from 'react'
import Popover_component from "@/components/Popover_component/Popover_component";
import Categotie_form from './Categotie_form';
import { Button } from '@nextui-org/react';

const Category = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [files, setFiles] = useState<File[]>([]);
    const onSubmit = () => { };
    
    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Add new</Button>
            {isOpen && (
                <Popover_component
                    open={isOpen}
                    set_open={setIsOpen}
                    components={
                        <Categotie_form
                            files={files}
                            setFiles={setFiles}
                            // isLoading={false}
                            // edit={edit}
                            // open={isOpen}
                            set_open={setIsOpen}
                            // vendor_data={vendor}
                            onsubmit={onSubmit}
                        />
                    }
                />
            )}
        </div>
    )
}

export default Category