"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Lösenorden matchar inte!");
      return;
    }
    alert("Registrering lyckades!");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Registrera
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <Input
            type="email"
            placeholder="Emailadress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Bekräfta lösenord"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold">
            Registrera
          </Button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          Har du redan ett konto?{" "}
          <Link href="/login" className="text-pink-600 font-semibold hover:underline">
            Logga in
          </Link>
        </div>
      </div>
    </div>
  );
}
