import {
  useGetTourTypesQuery,
  useRemoveTourTypeMutation,
} from "@/redux/features/Tour/tour.api";
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
import { DeleteConfirmation } from "@/components/DeleteConfirmation";
// import { toast } from "sonner";
function AddTourType() {
  const { data } = useGetTourTypesQuery(undefined);

  const [removeTourType] = useRemoveTourTypeMutation();

  const handleRemoveTourType = async (tourTypeId: string) => {
    try {
      const res = await removeTourType(tourTypeId).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    // if(res.success){
    //   toast.success("Tour Type Removed")
    // }
  };

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
            {data?.map((item: { _id: string; name: string }) => (
              <TableRow>
                <TableCell className="font-medium w-full">
                  {item?.name}
                </TableCell>
                <TableCell>
                  <DeleteConfirmation
                    onConfirm={() => handleRemoveTourType(item._id)}
                  >
                    {" "}
                    <Button>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </DeleteConfirmation>
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
