import { Vendor_Data, vendr_form } from "@/types/Vendor_type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Vendors {
  name: string;
  phone: string;
  email: string;
  // Add other fields as needed
}

export const vendorApi = createApi({
  reducerPath: "vendorApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7000/" }),
  endpoints: (build) => ({
    addNew_vendor: build.mutation<Vendor_Data, vendr_form>({
      query: (data) => ({
        url: "/api/vendor/add",
        method: "POST",
        body: data,
      }),
    }),
    getAllVendors: build.query<
      Vendors[],
      {
        keyword?: string;
        status?: string;
        rowsPerPage?: number;
        page?: number;
      } | void
    >({
      query: (filters) => {
        // Initialize the query params object
        const params: Record<string, string | number> = {};

        // Add filters to the query parameters if they are present
        if (filters) {
          if (filters.keyword) {
            params.keyword = filters.keyword;
          }
          if (filters.status && filters.status !== "all") {
            params.status = filters.status;
          }
          if (filters.rowsPerPage) {
            params.rowsPerPage = filters.rowsPerPage; // Convert number to string
          }
          if (filters.page) {
            params.page = filters.page; // Convert number to string
          }
        }

        return {
          url: "/api/vendor/all-vendors",
          params, // Use the dynamically constructed params
          method: "GET",
        };
      },
    }),
  }),
});

// Export both the mutation and the query hooks
export const { useAddNew_vendorMutation, useGetAllVendorsQuery } = vendorApi;
