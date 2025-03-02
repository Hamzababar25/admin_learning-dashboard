import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function LoadingButton({ children, loading, disabled, ...props }) {
  return (
    <Button disabled={disabled || loading} {...props}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
