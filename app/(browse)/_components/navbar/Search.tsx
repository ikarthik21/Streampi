"use client";

import qs from "query-string";
import React, { useState } from "react";
import { SearchIcon, X as Clear } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
 
export const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    const url = qs.stringifyUrl(
      { url: "/search", query: { key: search } },
      { skipEmptyString: true }
    );
    router.push(url);
  };

  return (
    <form className="flex items-center " onSubmit={onSubmit}>
      <Input
        className="rounded lg:w-[400px]  border-[0.1px]"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <Clear
          className="absolute right-20 cursor-pointer hover:opacity-75 hover:transition"
          size={20}
          onClick={() => setSearch("")}
        />
      )}

      <Button
        type="submit"
        size="sm"
        variant="secondary"
        className="rounded-l-none"
      >
        <SearchIcon className="cursor-pointer" />
      </Button>

    </form>
  );
};
