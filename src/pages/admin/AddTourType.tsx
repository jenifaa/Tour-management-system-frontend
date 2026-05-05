import { useGetTourTypesQuery } from "@/redux/features/Tour/tour.api";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@base-ui/react";
import { Trash2 } from "lucide-react";
import { AddTourTypeModal } from "@/components/modules/Admin/Tour/TourType/AddTourTypeModal";
function AddTourType() {
  const { data } = useGetTourTypesQuery(undefined);
  console.log(data);

  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-10">
        <h1 className="text-xl font-semibold">Tour Types</h1>
        <AddTourTypeModal></AddTourTypeModal>
      </div>
      <div className="border border-muted rounded-md">
        {" "}
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">Name</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: { name: string }) => (
              <TableRow>
                <TableCell className="font-medium w-full">
                  {item?.name}
                </TableCell>
                <TableCell>
                  <Button>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AddTourType;
