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
    <form className="  items-center hidden md:flex " onSubmit={onSubmit}>
      <div className="items-center relative ">
        <Input
          className="rounded bg-[#222328]  rounded-r-md lg:w-[300px] h-[34px] font-mono text-[16px] border-[#606064]  "
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <Clear
            className="absolute right-2 top-2 cursor-pointer hover:opacity-75 hover:transition"
            size={20}
            onClick={() => setSearch("")}
          />
        )}
      </div>

      <Button
        type="submit"
        size="sm"
        className="rounded rounded-l-none bg-[#2F2F30] hover:bg-[#373738] h-[35px]"
      >
        <SearchIcon className="cursor-pointer" />
      </Button>
    </form>
  );
};
