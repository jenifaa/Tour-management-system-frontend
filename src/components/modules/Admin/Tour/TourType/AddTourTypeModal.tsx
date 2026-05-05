import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddTourTypeMutation } from "@/redux/features/Tour/tour.api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function AddTourTypeModal() {
  const form = useForm();

  const [addTourType] = useAddTourTypeMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const res = await addTourType({ name: data.name }).unwrap();
    if (res.success) {
      toast.success("Tour Type Added Successfully");
    }
    console.log(res);
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger>
          <Button className="rounded-md border-2 px-4 py-4">
            Add Tour Type
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Tour Type</DialogTitle>
            <DialogDescription>
              Enter the details for the new tour type.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              id="add-tour-type"
              className="px-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tour Type Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Add Type Name"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <DialogFooter>
            <DialogClose>
              <Button className="rounded-md border-2 px-4 py-4">Cancel</Button>
            </DialogClose>
            <Button type="submit" form="add-tour-type">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
