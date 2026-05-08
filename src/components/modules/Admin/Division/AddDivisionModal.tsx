import SingleImageUploader from "@/components/SingleImageUploader";
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
import { Textarea } from "@/components/ui/textarea";
import { useAddDivisionMutation } from "@/redux/features/division/division.api";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
// import { toast } from "sonner";

export function AddDivisionModal() {
  const [image, setImage] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const [addDivision] = useAddDivisionMutation();
  console.log("Inside add division", image);
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", image as File);

    try {
      const res = await addDivision(formData).unwrap();
      toast.success("Division successfully added");
      setOpen(false);
     
    } catch (error) {
      toast.error("Failed to add division");
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="rounded-md border-2 px-4 py-4">Add Division</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Add Division</DialogTitle>
          <DialogDescription>
            Enter the details for the new division.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            id="add-division"
            className="px-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Division Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Add Division Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Division Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <SingleImageUploader onChange={setImage} />
        </Form>

        <DialogFooter>
          <DialogClose>
            <Button className="rounded-md border-2 px-4 py-4">Cancel</Button>
          </DialogClose>
          <Button disabled={!image} type="submit" form="add-division">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
