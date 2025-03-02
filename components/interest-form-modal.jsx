"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
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
import {
  createInterest,
  updateInterest,
  fetchInterestById,
} from "@/services/interest";
import { LoadingButton } from "./LoadingButton/loading-button";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  image: z.any(),
});

export const InterestFormModal = ({
  mode,
  interest,
  children,
  onSuccess,
  open,
  onOpenChange,
}) => {
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: null,
    },
  });

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleOpenChange = (newOpenState) => {
    if (!newOpenState) {
      form.reset();
      setPreview("");
      if (mode === "edit") {
        onSuccess?.();
      }
    }
    onOpenChange(newOpenState);
  };

  useEffect(() => {
    if (open) {
      if (mode === "add") {
        form.reset({
          name: "",
          image: null,
        });
        setPreview("");
      } else if (mode === "edit" && interest?._id) {
        const fetchInterestDetails = async () => {
          try {
            setLoading(true);
            const response = await fetchInterestById(interest._id);
            form.reset({
              name: response.data.name,
            });
            setPreview(response.data.image?.url || "");
          } catch (error) {
            toast.error("Failed to fetch interest details");
          } finally {
            setLoading(false);
          }
        };
        fetchInterestDetails();
      }
    }
  }, [open, mode, interest, form]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    if (data.image) {
      formData.append("file", data.image);
    }

    try {
      if (mode === "add") {
        await createInterest(formData);
        toast.success("Interest created successfully");
      } else if (mode === "edit" && interest?._id) {
        await updateInterest(interest._id, formData);
        toast.success("Interest updated successfully");
      }
      handleClose();
      onSuccess?.();
      form.reset();
      setPreview("");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add New Interest" : "Edit Interest"}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter interest name"
                      className="rounded-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <label
                        htmlFor="image-upload"
                        className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-accent"
                      >
                        {preview ? (
                          <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="flex flex-col items-center p-4">
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 12.1572V10.6692C0 9.00523 0.584 7.58923 1.752 6.42123C2.92 5.25323 4.336 4.66923 6 4.66923C6.512 4.66923 7.056 4.75723 7.632 4.93323C7.92 3.55723 8.616 2.42123 9.72 1.52523C10.824 0.629227 12.088 0.173227 13.512 0.157227C15.16 0.157227 16.568 0.749227 17.736 1.93323C18.904 3.11723 19.496 4.52523 19.512 6.15723C19.512 6.60523 19.432 7.11723 19.272 7.69323C19.384 7.67723 19.464 7.66923 19.512 7.66923C20.744 7.66923 21.8 8.10923 22.68 8.98923C23.56 9.86923 24 10.9252 24 12.1572V13.6692C24 14.9172 23.56 15.9732 22.68 16.8372C21.8 17.7012 20.744 18.1412 19.512 18.1572H19.224C19.368 17.7572 19.456 17.3972 19.488 17.0772C19.536 16.4212 19.456 15.7812 19.248 15.1572C19.04 14.5332 18.688 13.9812 18.192 13.5012L15.192 10.5012C14.312 9.60523 13.248 9.15723 12 9.15723C10.752 9.15723 9.696 9.59723 8.832 10.4772L5.832 13.4772C5.352 13.9572 5 14.5172 4.776 15.1572C4.552 15.7972 4.472 16.4452 4.536 17.1012C4.552 17.3892 4.616 17.7012 4.728 18.0372C3.368 17.7332 2.24 17.0372 1.344 15.9492C0.448 14.8612 0 13.5972 0 12.1572ZM7.512 16.8132C7.464 16.3332 7.608 15.9332 7.944 15.6132L10.944 12.6132C11.248 12.3092 11.6 12.1572 12 12.1572C12.416 12.1572 12.768 12.3092 13.056 12.6132L16.056 15.6132C16.392 15.9332 16.544 16.3332 16.512 16.8132C16.496 16.9572 16.456 17.1012 16.392 17.2452C16.28 17.5172 16.096 17.7412 15.84 17.9172C15.584 18.0932 15.304 18.1732 15 18.1572H13.512V22.6692C13.512 23.0852 13.36 23.4372 13.056 23.7252C12.752 24.0132 12.4 24.1572 12 24.1572C11.6 24.1572 11.248 24.0132 10.944 23.7252C10.64 23.4372 10.496 23.0852 10.512 22.6692V18.1572H9C8.696 18.1572 8.424 18.0772 8.184 17.9172C7.944 17.7572 7.752 17.5332 7.608 17.2452C7.56 17.1012 7.528 16.9572 7.512 16.8132Z"
                                fill="#BB8F32"
                              />
                            </svg>
                            <span className="text-sm mt-2">Upload Image</span>
                          </div>
                        )}
                      </label>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="rounded-xl"
              >
                Cancel
              </Button>
              <LoadingButton
                type="submit"
                loading={loading}
                className="rounded-xl"
              >
                {mode === "add" ? "Add Interest" : "Save Changes"}
              </LoadingButton>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
