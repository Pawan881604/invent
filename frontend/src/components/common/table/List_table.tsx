"use client"
import React from "react";
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { vendr_list as Vendor, vendor_Column } from "@/types/Vendor_type";
import TableBottomContent from "./TableBottomContent";
import TableTopContent from "./TableTopContent";

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

interface Props {
  data: Vendor[];
  loading: boolean;
  renderCell: (vendor: Vendor, columnKey: React.Key) => React.ReactNode;
  filterValue: string;
  setFilterValue: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  resultPerpage: number;
  setRowsPerPage: (value: number) => void;
  data_length: number;
  page: number;
  setPage: (value: number) => void;
  columns: any;
  form_open:(value:boolean)=>void;
}


const ListTable: React.FC<Props> = ({
  data,
  renderCell,
  loading,
  filterValue,
  setFilterValue,
  statusFilter,
  setStatusFilter,
  resultPerpage,
  setRowsPerPage,
  data_length,
  page,
  setPage, columns,form_open
}) => {
  const pages = Math.ceil(data_length / Number(resultPerpage));

  return (
    <Table aria-label="Example table with custom cells"
      isHeaderSticky
      bottomContent={<TableBottomContent page={page} pages={pages} setPage={setPage} />}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "min-h-[500px]",
      }}
      topContent={
        <TableTopContent
          filterValue={filterValue}
          statusFilter={statusFilter}
          setPage={setPage}
          setStatusFilter={setStatusFilter}
          columns={columns}
          setFilterValue={setFilterValue}
          data_length={data_length}
          setRowsPerPage={setRowsPerPage}
          form_open={form_open}
        />}
      topContentPlacement="outside"
    >
      <TableHeader columns={columns}>
        {(column: vendor_Column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No vendors found"} items={data}
        loadingContent={<Spinner />}
        isLoading={loading}
      >
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ListTable;
