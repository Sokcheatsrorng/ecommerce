"use client";
import LoadingComponent from "@/app/loading";
import UserType from "@/types/User";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { useDisclosure} from "@nextui-org/react";
import Image from "next/image";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react"; 



type DataRow = {
  title: string;
  director: string;
  year: string;
};

const customStyles = {
	rows: {
		style: {
      // minWidth: "1000px",
			minHeight: '72px', // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
		},
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
		},
	},
};

const url_based = "https://store.istad.co/api/products/";
const UserTable = () => {
  const [getUser, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [userDetail, setUserDetail] = useState({} as UserType);
  function handleDetail(value: UserType) {
    onOpen();
    setUserDetail(value)
    
  }

  const columnsData: TableColumn<UserType>[] = [
    {
      name: "ID",
      selector: (row):any => <div className=" font-bold text-blue-600">{row.id}</div>,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row):any => (
        <Image  src={row.image} width={70} height={70} alt="user" />
      ),
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <div>
            <Dropdown>
              <DropdownTrigger>
                <button>
                  <IoEllipsisHorizontalOutline />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  key="detail"
                  onClick={()=> handleDetail(row)}
                >
                  View Detail
                </DropdownItem>

                <DropdownItem key="edit">Edit</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      },
    },
  ];


  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url_based);
      const response = await data.json();
      setUser(response.users);
      setFilter(response.users);
    }
    fetchData();
    setIsLoading(false);
  }, []);


  useEffect(() => {
    if (!search) {
      setFilter(getUser);
      return;
    }
    const result = getUser.filter((item: UserType) => {
      return item.username?.toLowerCase().includes(search.toLowerCase());
    });
    setFilter(result);
  }, [getUser, search]);

  const paginationComponentOptions = {
    rowsPerPageText: "ជួរដេកក្នុងមួយទំព័រ",
    rangeSeparatorText: "នៃ",
    selectAllRowsItem: true,
    selectAllRowsItemText: "ទាំងអស់",
  };

  return (
    <div className="w-full" >
      <DataTable
        progressPending={isLoading}
        columns={columnsData}
        fixedHeader={true}
        fixedHeaderScrollHeight="500px"
        selectableRows
        pagination
        subHeader
        // customStyles={customStyles}
        subHeaderComponent={
          <input
            className="border-[1px] px-4 py-2 w-full rounded-md border-blue-400"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        }
        paginationComponentOptions={paginationComponentOptions}
        onSelectedRowsChange={() => console.log("row selected")}
        progressComponent={<LoadingComponent />}
        customStyles={customStyles}
        data={filter}
        actions={
          <Button size="sm" color="primary">
            Export PDF
          </Button>
        }
      />
    </div>
  );
};

export default UserTable;