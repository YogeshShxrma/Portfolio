
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { Label } from "@/components/ui/label";
import { Lock, User } from "lucide-react";

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLogin = ({ isOpen, onClose }: AdminLoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password);
      onClose();
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md folk-card">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl text-folk-purple">Admin Login</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-folk-purple/10 text-folk-purple">
            <Lock size={36} />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <User size={14} />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="border-folk-border"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="flex items-center gap-2">
              <Lock size={14} />
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-folk-border"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-folk-purple hover:bg-folk-purple-dark" 
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLogin;
