"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginRegisterPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (isLogin) {
      // Giriş işlemi
      alert(`Loggar in med email: ${email}`);
    } else {
      // Kayıt işlemi - basit şifre kontrolü örneği
      if (password !== confirmPassword) {
        setError("Lösenorden matchar inte!");
        return;
      }
      alert(`Registrerar användare med email: ${email}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? "Logga in" : "Registrera"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-semibold text-gray-700">
              Lösenord
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block mb-1 font-semibold text-gray-700">
                Bekräfta lösenord
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Bekräfta lösenord"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          )}

          {error && (
            <p className="text-red-600 font-semibold text-center">{error}</p>
          )}

          <Button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md transition"
          >
            {isLogin ? "Logga in" : "Registrera"}
          </Button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          {isLogin ? (
            <>
              Har du inget konto?{" "}
              <button
                onClick={() => {
                  setIsLogin(false);
                  setError("");
                }}
                className="text-pink-600 font-semibold hover:underline"
              >
                Skapa här!
              </button>
            </>
          ) : (
            <>
              Har du redan konto?{" "}
              <button
                onClick={() => {
                  setIsLogin(true);
                  setError("");
                }}
                className="text-pink-600 font-semibold hover:underline"
              >
                Logga in här
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
