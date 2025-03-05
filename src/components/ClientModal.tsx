
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

interface ClientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ClientModal = ({ open, onOpenChange }: ClientModalProps) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success",
        description: `Client ${name} added. WhatsApp chat initiated!`,
      });
      setIsLoading(false);
      setName("");
      setPhone("");
      onOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] glass-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Add New Client</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Client Name</Label>
            <Input
              id="name"
              placeholder="Enter client name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/50 dark:bg-black/50 border-gray-200 dark:border-gray-700"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">WhatsApp Number</Label>
            <Input
              id="phone"
              placeholder="+1 (555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white/50 dark:bg-black/50 border-gray-200 dark:border-gray-700"
              required
            />
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Add & Initiate Chat</span>
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClientModal;
