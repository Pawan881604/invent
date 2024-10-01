"use client";
import React, { useEffect, useMemo } from "react";
import Input_field from "@/components/common/fields/Input_field";
import Phone_number_field from "@/components/common/fields/Phone_number_field";
import Select_field from "@/components/common/fields/Select_field";
import { Customer_form, customer_list } from "@/types/Customer_type";
import { Button, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useForm } from "react-hook-form";

interface Customer_from_props {
  open: boolean;
  set_open: (value: boolean) => void;
  onSubmit: (data: Customer_form) => void;
  isLoading: boolean;
  data: customer_list | never[];
  edit: boolean;
}
const status = [{ label: 'Active', value: 'active', }, { label: 'Inactive', value: 'inactive', }]
const Customer_from: React.FC<Customer_from_props> = ({
  open,
  set_open,
  onSubmit,
  isLoading,
  data,
  edit,
}) => {


  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Customer_form>({
    defaultValues: {
      shipping_address: { country: "India" }, // Set default country value
      billing_address: { country: "India" }, // Set default country value
      status: "active", // Set default country value
    },
  });

  // const memoizedVendorData = useMemo(() => {
  //   if (data && typeof data === 'object' && !Array.isArray(data)) {
  //     return {
  //       name: data.name,
  //       phone: data.phone,
  //       email: data.email,
  //       company: data.company_name,
  //       gstin: data.gstin,
  //       status: data.status,
  //       shipping_address: {
  //         address_line_1: data.shipping_address?.address_line_1 || '',
  //         address_line_2: data.shipping_address?.address_line_2 || '',
  //         city: data.shipping_address?.city || '',
  //         state: data.shipping_address?.state || '',
  //         pin_code: data.shipping_address?.pin_code || '',
  //         country: data.shipping_address?.country || '',
  //       },
  //       billing_address: {
  //         address_line_1: data.billing_address?.address_line_1 || '',
  //         address_line_2: data.billing_address?.address_line_2 || '',
  //         city: data.billing_address?.city || '',
  //         state: data.billing_address?.state || '',
  //         pin_code: data.billing_address?.pin_code || '',
  //         country: data.billing_address?.country || '',
  //       },
  //     };
  //   }
  //   return {} as Partial<vendr_form>; // Use Partial<vendr_form> to allow for missing keys
  // }, [data]);

  // useEffect(() => {
  //   if (edit && Object.keys(memoizedVendorData).length > 0) {
  //     // Validate if memoizedVendorData has the correct structure
  //     const isValidVendorData = (data: any): data is vendr_form => {
  //       return data && typeof data === 'object' && 'name' in data; // Adjust according to your requirements
  //     };

  //     if (isValidVendorData(memoizedVendorData)) {
  //       // Iterate over each key in memoizedVendorData
  //       (Object.keys(memoizedVendorData) as (keyof vendr_form)[]).forEach((key) => {
  //         const value = memoizedVendorData[key];
  //         if (value !== undefined) { // Ensure value is not undefined
  //           if (typeof value === 'object' && value !== null) {
  //             // If value is an object (i.e., an address), iterate through its keys
  //             (Object.keys(value) as (keyof BaseAddress)[]).forEach((addressKey) => {
  //               const fullKey = `${key}.${addressKey}` as keyof vendr_form; // Assert fullKey as keyof vendr_form

  //               // Use a type assertion here to ensure we pass the correct type to setValue
  //               if (typeof value[addressKey] === 'number') {
  //                 // If the value is a number, convert it to string
  //                 setValue(fullKey, value[addressKey].toString());
  //               } else {
  //                 setValue(fullKey, value[addressKey] as string); // Cast as string for other cases
  //               }
  //             });
  //           } else {
  //             // Set value for top-level keys
  //             setValue(key, value as string); // You might need to adjust this based on your requirements
  //           }
  //         }
  //       });
  //     }
  //   } else {
  //     // Clear form if not in edit mode
  //     (Object.keys(memoizedVendorData) as (keyof vendr_form)[]).forEach((key) =>
  //       setValue(key, '')
  //     );
  //   }
  // }, [memoizedVendorData, setValue, edit]);



  return (
    <div>
      <div>
        <ModalHeader className="flex flex-col gap-1">
          {edit ? "Update Customer From" : "Customer From"}
        </ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex  items-center justify-between p-2">
            <p className="text-lg">Basic Details</p>
            <div className="w-52">
              <Select_field
                control={control}
                errors={errors}
                name="status"
                label="select status"
                options={status}
              />
            </div>
          </div>
          <div className="bg-white">
            <div className="flex flex-wrap gap-2">
              <div className="w-full">
                <Input_field
                  control={control}
                  errors={errors}
                  name="name"
                  label="Name"
                />
              </div>
            </div>

          </div>
          <div>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => set_open(false)}
              >
                Close
              </Button>

              <Button
                isLoading={isLoading}
                className="bg-black text-white"
                type="submit"
              >
                Save
              </Button>
            </ModalFooter>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Customer_from;
