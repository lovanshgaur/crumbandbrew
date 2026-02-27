"use client";

import { useState } from "react";
import { useAppContext } from "@/context/AppContext";

export default function ProfileDrawer() {
  const { profile, updateProfile, isProfileOpen, setIsProfileOpen } = useAppContext();
  const [formData, setFormData] = useState(profile);

  if (!isProfileOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsProfileOpen(false);
  };

  return (
    <>
      <div
        onClick={() => setIsProfileOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
      />
      
      <aside className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-[var(--bg-base)] z-50 flex flex-col shadow-2xl">
        <div className="p-6 flex items-center justify-between border-b border-[var(--border)]">
          <h2 className="text-2xl font-medium">Profile</h2>
          <button onClick={() => setIsProfileOpen(false)} className="text-sm">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <form id="profile-form" onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--text-primary)]"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--text-primary)]"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--text-primary)]"
                required
              />
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-[var(--border)]">
          <button
            type="submit"
            form="profile-form"
            className="w-full bg-[var(--accent)] text-[var(--accent-text)] rounded-xl py-4 font-medium"
          >
            Save Details
          </button>
        </div>
      </aside>
    </>
  );
}