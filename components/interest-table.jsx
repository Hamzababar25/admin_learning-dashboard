"use client";

import { useState, useEffect, useCallback } from "react";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Button } from "@/components/ui/button";
import { fetchInterests, deleteInterest } from "@/services/interest";
import { toast } from "sonner";
import { DataTablePagination } from "./ui/data-table/data-table-pagination";
import { DataTableColumnHeader } from "./ui/data-table/data-column-header";
import { useDebounce } from "@/hooks/useDebounce";
import { InterestFormModal } from "./interest-form-modal";
import { Plus } from "lucide-react";
import { TableSkeleton } from "./ui/data-table/table-skeleton";

export function InterestsTable() {
  const [interests, setInterests] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 10,
    totalItems: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });
  const [, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [mode, setMode] = useState("add");
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (interest) => {
    console.log(interest);
    setIsModalOpen(true);
    setSelectedInterest(interest);
    setMode("edit");
  };

  const handleCloseModal = () => {
    setSelectedInterest(null);
    setMode("add");
    setIsModalOpen(false);
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [initialLoading, setInitialLoading] = useState(true);

  const loadInterests = useCallback(
    async (page = 1, perPage = 10, search = "") => {
      try {
        setLoading(true);
        const response = await fetchInterests(page, perPage, search);

        if (response.success) {
          setInterests(response.data);
          setPagination(response.pagination);
        } else {
          throw new Error(response.message || "Failed to fetch interests");
        }
      } catch (error) {
        setError(error.message);
        toast?.error(error.message);
      } finally {
        setLoading(false);
        setInitialLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (isModalOpen && mode === "add") {
      setSelectedInterest(null);
    }
  }, [isModalOpen, mode]);

  useEffect(() => {
    loadInterests(
      pagination.currentPage,
      pagination.perPage,
      debouncedSearchTerm
    );
  }, []);

  const handlePageChange = (pageIndex) => {
    const newPage = pageIndex + 1;
    setPagination((prev) => ({ ...prev, currentPage: newPage }));
  };

  const handlePageSizeChange = (newPageSize) => {
    setPagination((prev) => ({
      ...prev,
      perPage: newPageSize,
      currentPage: 1,
    }));
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  };

  useEffect(() => {
    loadInterests(
      pagination.currentPage,
      pagination.perPage,
      debouncedSearchTerm
    );
  }, [refreshKey]);

  const handleSuccess = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const handleModalSuccess = () => {
    handleSuccess();
    handleCloseModal();
    loadInterests(
      pagination.currentPage,
      pagination.perPage,
      debouncedSearchTerm
    );
  };

  const handleDelete = async (interest) => {
    if (confirm(`Are you sure you want to delete "${interest.name}"?`)) {
      try {
        await deleteInterest(interest._id);
        toast?.success("Interest deleted successfully");
        loadInterests(
          pagination.currentPage,
          pagination.perPage,
          debouncedSearchTerm
        );
      } catch (error) {
        toast?.error(error.message);
      }
    }
  };

  const columns = [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => {
        const interest = row.original;
        const imageUrl =
          interest.image?.url || interest.image || "/placeholder-image.jpg";

        return (
          <div className="relative h-10 w-10 rounded-md overflow-hidden">
            <img
              src={imageUrl}
              alt={interest.name || "Interest image"}
              className="object-cover"
              onError={(e) => {
                e.target.src = "/placeholder-image.jpg";
              }}
            />
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
      cell: ({ row }) => {
        return <div className="font-medium">{row.getValue("name")}</div>;
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="CreatedAt" />
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("createdAt"));
        return (
          <div>
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}{" "}
            {date.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
        );
      },
    },
    {
      accessorKey: "updatedAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="UpdatedAt" />
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("updatedAt"));
        return (
          <div>
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}{" "}
            {date.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const interest = row.original;

        return (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleEdit(interest)}
              className="h-8 w-8"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.76184 15.5972C8.76184 15.1538 9.12124 14.7944 9.56462 14.7944H15.9868C16.4302 14.7944 16.7896 15.1538 16.7896 15.5972C16.7896 16.0406 16.4302 16.4 15.9868 16.4H9.56462C9.12124 16.4 8.76184 16.0406 8.76184 15.5972Z"
                  fill="#BB8F32"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8052 5.24113C17.0975 3.94374 17.0426 2.24001 16.0776 1.19665C15.607 0.687905 14.9374 0.362941 14.1788 0.345023C13.4175 0.32704 12.6286 0.6182 11.9008 1.22717C11.8821 1.24274 11.8642 1.25915 11.8471 1.27635L1.43613 11.7289C0.986548 12.1802 0.734131 12.7914 0.734131 13.4285V14.788C0.734131 15.6722 1.45018 16.3998 2.34276 16.3998H3.69048C4.33087 16.3998 4.94489 16.1447 5.39682 15.691L15.8052 5.24113ZM12.9421 3.38913C12.6286 3.07563 12.1202 3.07563 11.8068 3.38913C11.4933 3.70264 11.4933 4.21093 11.8068 4.52444L12.6095 5.32721C12.923 5.64071 13.4313 5.64071 13.7448 5.32721C14.0583 5.01371 14.0583 4.50542 13.7448 4.19191L12.9421 3.38913Z"
                  fill="#BB8F32"
                />
              </svg>

              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDelete(interest)}
              className="h-8 w-8 text-destructive hover:text-destructive"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.87046 16.4126L2.37871 5.97207H15.9787L14.487 16.4126C14.4291 16.8177 14.227 17.1883 13.9178 17.4564C13.6087 17.7245 13.2132 17.8721 12.804 17.8721H5.55346C5.14425 17.8721 4.74876 17.7245 4.4396 17.4564C4.13045 17.1883 3.92836 16.8177 3.87046 16.4126ZM16.8287 2.57207H12.5787V1.72207C12.5787 1.49664 12.4892 1.28044 12.3298 1.12103C12.1703 0.961624 11.9541 0.87207 11.7287 0.87207H6.62871C6.40328 0.87207 6.18708 0.961624 6.02767 1.12103C5.86826 1.28044 5.77871 1.49664 5.77871 1.72207V2.57207H1.52871C1.30328 2.57207 1.08708 2.66162 0.92767 2.82103C0.768264 2.98044 0.678711 3.19664 0.678711 3.42207C0.678711 3.6475 0.768264 3.86371 0.92767 4.02311C1.08708 4.18252 1.30328 4.27207 1.52871 4.27207H16.8287C17.0541 4.27207 17.2703 4.18252 17.4298 4.02311C17.5892 3.86371 17.6787 3.6475 17.6787 3.42207C17.6787 3.19664 17.5892 2.98044 17.4298 2.82103C17.2703 2.66162 17.0541 2.57207 16.8287 2.57207Z"
                  fill="#FF3636"
                />
              </svg>

              <span className="sr-only">Delete</span>
            </Button>
          </div>
        );
      },
    },
  ];

  if (initialLoading) {
    return <TableSkeleton />;
  }

  if (error && interests.length === 0) {
    return (
      <div className="text-center py-10 text-red-500">
        Error: {error}
        <Button
          variant="outline"
          className="ml-4"
          onClick={() =>
            loadInterests(1, pagination.perPage, debouncedSearchTerm)
          }
        >
          Retry
        </Button>
      </div>
    );
  }

  const customPaginationComponent = (props) => {
    const { table } = props;

    const originalSetPageIndex = table.setPageIndex;
    table.setPageIndex = (updater) => {
      originalSetPageIndex(updater);

      const newPageIndex =
        typeof updater === "function"
          ? updater(table.getState().pagination.pageIndex)
          : updater;

      handlePageChange(newPageIndex);
    };

    const originalSetPageSize = table.setPageSize;
    table.setPageSize = (size) => {
      originalSetPageSize(size);
      handlePageSizeChange(size);
    };

    return <DataTablePagination table={table} />;
  };

  return (
    <div className="px-4">
      <div className="mb-2 flex justify-end">
        <InterestFormModal
          mode={mode}
          interest={selectedInterest}
          onSuccess={handleModalSuccess}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        >
          <Button className="rounded-full flex items-center">
            <div className="bg-white rounded-md">
              <Plus color="black" />
            </div>
            <div>New Interest</div>
          </Button>
        </InterestFormModal>
      </div>

      <DataTable
        key={refreshKey}
        columns={columns}
        data={interests}
        filterKey="name"
        searchPlaceholder="Search interests..."
        onSearch={handleSearchChange}
        onEdit={handleEdit}
        onDelete={handleDelete}
        paginationComponent={customPaginationComponent}
      />
    </div>
  );
}
